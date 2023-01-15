import { Session, User } from "@supabase/supabase-js"
import { create } from "zustand";
import { devtools } from 'zustand/middleware';
import { supabase } from "./supabase.client";
import { ProfileRow, ProfileUpdate } from "./types"

type ProfilesApi = {
  loading: boolean;
  profile: ProfileRow | null;

  loadProfile(user: User, session: Session): Promise<void>;
  searchProfiles(term: string): Promise<ProfileRow[]>;
  updateAvatar(file: File): Promise<void>;
  updateProfile(value: ProfileUpdate): Promise<void>;
}

export const useProfilesApi = create<ProfilesApi>()(
  devtools(
    (set, get) => ({
      loading: false,
      profile: null,

      loadProfile: async (user: User, session: Session) => {
        try {
          set({ loading: true });
          if (!user || !session) throw new Error('User or Session not set');
          let { data, error } = await supabase.from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
      
          if (error) throw error;
          if (!data) return Promise.reject('Profile does not exist');
          set({ profile: data, loading: false });
          return Promise.resolve();
        } catch (error) {
          set({ loading: false });
          return Promise.reject(error);
        }      
      },

      searchProfiles: async (term: string): Promise<ProfileRow[]> => {
        try {
          const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .textSearch('fts', `'${term}'`)
          
          if (error) throw error;
          return Promise.resolve(data ?? []);
        } catch (error) {
          return Promise.reject(error);
        }
      },

      updateAvatar: async (file: File) => {
        try {
          set({ loading: true });
          const fileExt = file.name.split('.').pop();
          const fileName = `${Math.random()}.${fileExt}`;
          const filePath = `${fileName}`;

          let { error } = await supabase.storage.from('avatars').upload(filePath, file);
          if (error) throw error;

          let { data } = await supabase.storage.from('avatars').getPublicUrl(filePath, { transform: { height: 300, width: 300 }});
          await get().updateProfile({ id: get().profile?.id, avatar_url: data.publicUrl });
          set({ loading: false });
        } catch (error) {
          set({ loading: false });
          return Promise.reject(error);
        }
      },

      updateProfile: async (value: ProfileUpdate) => {
        try {
          const { data, error } = await supabase
            .from('profiles')
            .update(value)
            .eq('id', value.id)
            .select('*')
            .single();

          if (error) throw error;
          if (!data || (Array.isArray(data) && data.length === 0)) 
            throw new Error('Successfully Saved but could not retreive item');

          set({ profile: data });
          return Promise.resolve();
        } catch (error) {
          return Promise.reject(error);
        }    
      }
    }),
    { name: 'Profiles' }
  )
)