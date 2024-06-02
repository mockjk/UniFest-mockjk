import { TextInput } from "react-native-paper";

interface Props {
  style: any;
  label: any;
  value: any;
  action: any;
}

const TextInputPassword = (props: Props) => {
  return (
    <TextInput
      maxLength={32}
      style={props.style}
      label={props.label}
      value={props.value}
      onChangeText={props.action}
    />
  );
};

export default TextInputPassword;