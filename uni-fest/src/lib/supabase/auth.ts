import  User from "../../types/User";
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

export async function signUpWithEmail(user: User) {
  const {
    data: { session },
    error,
  } = await supabase.auth.signUp({
    email: user.email,
    password: user.password,
    options: {
      data: {
        fullName: user.fullName,
        age: user.age,
        phone: user.phone,
        cpf: user.cpf
      }
    }
  });

  return { session, error };
};
