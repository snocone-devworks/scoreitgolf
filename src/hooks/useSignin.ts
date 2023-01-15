import { AuthError, Provider } from "@supabase/supabase-js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../api/supabase.client";
import { useNotify } from "./useNotify"

const redirectBase = import.meta.env.VITE_SERVER_URL;

export const useSignin = () => {
  const notify = useNotify();
  const navigate = useNavigate();
  const [error, setError] = useState<AuthError | null>(null);

  const onEmailPasswordLogin = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      console.log(error);
      setError(error);
      notify('error', 'could not sign in');
      return;
    }

    setError(null);
    navigate('/account/settings');
    notify('success', 'You have been signed in');
  }

  const onEmailPasswordSignup = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        emailRedirectTo: `${redirectBase}/emailconfirmation`
      }
    });

    if (error) {
      console.log(error);
      setError(error);
      notify('error', 'could not sign up');
    }
  }

  const onSocialLogin = async (provider: Provider) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: provider,
      options: {
        redirectTo: `${redirectBase}/account/settings`
      }
    });

    if (error) {
      console.log(error);
      setError(error);
      notify('error', 'could not sign in');
      return;
    }

    setError(null);
  }

  const onSignout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      setError(error);
      notify('error', 'could not sign out');
      return;
    }

    setError(null);
    notify('success', 'You have been signed out');
    navigate('/login');
  }

  return { error, onEmailPasswordLogin, onEmailPasswordSignup, onSocialLogin, onSignout };
}