import React, { createContext, useEffect, useState } from "react";
import { Session, User } from '@supabase/supabase-js';
import { supabase } from "../api";
import { useNavigate } from "react-router-dom";

type AuthContextInfo = {
  loading: boolean;
  session: Omit<Session, 'user'> | null;
  user: User | null;
  onMagicLinkLogin(email: string): Promise<void>;
}

export const AuthContext = createContext<AuthContextInfo>({ 
  loading: true, 
  session: null, 
  user: null, 
  onMagicLinkLogin: async () => {} 
});

type AuthProviderProps = {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    supabase.auth.getSession()
    .then(({ data: { session }}) => {
      setSession(session);
      setUser(session?.user ?? null);
    })
    .catch(error => {
      console.log(error);
      setSession(null);
      setUser(null);
    })
    .finally(() => {
      setLoading(false);
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
    });
  }, [])

  useEffect(() => {
    if (!loading && !session) navigate('/');
  }, [session, loading])

  const onMagicLinkLogin = async (email: string): Promise<void> => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) throw error;
      setLoading(false);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
      setLoading(false);
    }
  }

  return (
    <AuthContext.Provider 
      value={{ 
        loading: loading, 
        session: session, 
        user: user, 
        onMagicLinkLogin: onMagicLinkLogin 
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}