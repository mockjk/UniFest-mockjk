import { supabase } from "./config";

export async function signInWithEmail(email: string, password: string) {
  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if(error === null){
    return error;
  }
  
  console.log(error);
  return error;
};

export async function signUpWithEmail(email: string, password: string) {
  const {
    data: { session },
    error,
  } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  return { session, error };
};
