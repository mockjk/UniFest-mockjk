import { View } from "react-native";
import AlignedLogin from "../../components/AlignedLogin";
import { Button, Text, TextInput } from "react-native-paper";
import styles from "../Login/styles";
import { signUpWithEmail } from "../../lib/supabase/auth";
import { useState } from "react";
import User from '../../types/User';
import LoginErrors from "../../types/LoginErrors";
import TextInputPassword from "../../components/TextInputPassword";


interface Props {
  navigation: any;
}

export default function Register(props: Props) {

  const [user, setUser] = useState<User>({
    email: "",
    password: "",
    fullName: "",
    age: undefined,
    phone: undefined,
    cpf: "",
  });

  const [ error, setError ] = useState<{
    hasError: boolean, 
    errorType: LoginErrors}>();

  const tryRegister = async (userData: User) => {
    const result = await signUpWithEmail(userData);
    console.log(result);

    if(result.error){
      
    }
  };


  return (
    <AlignedLogin>
      <View style={styles.title}>
        <Text style={styles.title}>Sign up</Text>
        <TextInput
          maxLength={80}
          style={styles.generic}
          label="Nome Completo"
          value={user.fullName}
          onChangeText={(text) => setUser({...user, fullName: text})}
        />
        <TextInput 
          maxLength={80}
          keyboardType="email-address"
          style={styles.generic} 
          label="Email"
          value={user.email}
          onChangeText={(text) => setUser({...user, email: text})}
        />
        <TextInputPassword 
          style={styles.generic}
          label="Password"
          value={user.password}
          action={(text:string) => setUser({...user, password: text})}
        />
        <TextInput 
          maxLength={3}
          keyboardType="numeric"
          style={styles.generic} 
          label="Idade"
          value={user.age !== 0 ? user.age?.toString() : ''}
          onChangeText={(text) => setUser({...user, age: Number(text)})}
        />
        <TextInput 
          maxLength={11}
          keyboardType="phone-pad"
          style={styles.generic} 
          label="Telefone"
          value={user.phone === undefined ? user.phone : user.phone.toString()}
          onChangeText={(text) => setUser({...user, phone: Number(text)})}
        />

        <TextInput
          maxLength={14} 
          keyboardType="numeric"
          style={styles.generic} 
          label="CPF"
          value={user.cpf}
          onChangeText={(text) => setUser({...user, cpf: text})}
        />

        <Button style={styles.generic} mode="contained" onPress={() => tryRegister(user)}>
          Sign up
        </Button>
      </View>
    </AlignedLogin>
  );
};

