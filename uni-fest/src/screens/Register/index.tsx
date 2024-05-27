import { View } from "react-native";
import AlignedLogin from "../../components/AlignedLogin";
import { Button, Text, TextInput } from "react-native-paper";
import styles from "../Login/styles";

export default function Register() {
  return (
    <AlignedLogin>
      <View style={styles.title}>
        <Text style={styles.title}>Sign up</Text>
        <TextInput
          maxLength={70}
          style={styles.generic}
          label="Nome Completo"
        />
        <TextInput maxLength={70} style={styles.generic} label="Email" />
        <TextInput maxLength={11} style={styles.generic} label="Telefone" />
        <Button style={styles.generic} mode="contained">
          Sign up
        </Button>
      </View>
    </AlignedLogin>
  );
};

