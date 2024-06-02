import { Button, IconButton, Text, TextInput } from "react-native-paper";
import { useState } from "react";
import AlignedLogin from "../../components/AlignedLogin";
import styles from "./styles";
import { View } from "react-native";
import { signInWithEmail } from "../../lib/supabase/auth";
import { AuthError } from "@supabase/supabase-js";

interface Props {
  navigation: any;
}

interface showError {
  render: boolean;
  error: AuthError | null;
  errorStatus: boolean;
}

export default function Login(props: Props) {
  const [showError, setShowError] = useState<showError>({
    render: false,
    error: null,
    errorStatus: false,
  });

  const closeError = () => {
    setShowError((prevState) => ({
      ...prevState,
      render: false,
    }));
  };

  async function tryLogin(email: string, password: string) {
    const error = await signInWithEmail(email, password);

    if (error) {
      setShowError({
        render: true,
        error: error,
        errorStatus: true,
      });

      return;
    }

    props.navigation.navigate("Home");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AlignedLogin>
      <View style={styles.title}>
        {showError.render && (
          <View style={styles.errorBox}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Button
                style={styles.buttonError}
                rippleColor="transparent"
                onPress={() => closeError()}
                children=""
              />
              <IconButton icon="close" />
            </View>
            <Text style={{ color: "red" }}>
              {"\t"}
              {showError.error?.message}
            </Text>
          </View>
        )}

        <Text style={styles.title}>Log in</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.generic}
          label="Email"
          error={showError.errorStatus}
          onChange={() =>
            setShowError((prevState) => ({ ...prevState, errorStatus: false }))
          }
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={styles.generic}
          label="Password"
          error={showError.errorStatus}
          onChange={() =>
            setShowError((prevState) => ({ ...prevState, errorStatus: false }))
          }
        />
        <Button
          style={styles.generic}
          mode="contained"
          onPress={() => tryLogin(email, password)}
        >
          Log in
        </Button>
        <Button
          style={styles.generic}
          mode="contained-tonal"
          onPress={() => props.navigation.navigate("Register")}
        >
          Sign up
        </Button>
      </View>
    </AlignedLogin>
  );
}
