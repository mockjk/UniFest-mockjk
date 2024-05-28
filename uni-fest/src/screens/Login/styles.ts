import { StyleSheet } from "react-native";
import { width, height } from "../../constants/measures";

const styles = StyleSheet.create({
    generic: {
      width: width * 0.8,
      marginBottom: 12,
    },
    form: {
      justifyContent: "flex-start",
    },
    title: {
      fontSize: 32,
      marginBottom: 16,
    },
    errorBox: {
      width: width*0.8,
      height: height*0.07,
      borderRadius: 10,
      borderColor: "transparent",
      borderWidth: 3,
      elevation: 10,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row-reverse",
    },
    buttonError: {
    },
  });

  export default styles;