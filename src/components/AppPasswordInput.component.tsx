import Eye from "app/icons/eye.icon";
import EyeCrossedOut from "app/icons/eyeCrossedOut.icon";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

interface IProps extends TextInputProps {
  isConfirm?: boolean;
}

const AppPasswordInput = ({ isConfirm = false, ...rest }: IProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {isConfirm ? "Confirm password" : "Password"}
      </Text>
      <View style={styles.passwordInputContainer}>
        <TextInput
          style={styles.passwordInput}
          secureTextEntry={!isPasswordVisible}
          {...rest}
        />
        <TouchableOpacity
          style={styles.passwordToggleVisibleBtn}
          onPress={togglePasswordVisibility}
        >
          {isPasswordVisible ? (
            <Eye width={20} />
          ) : (
            <EyeCrossedOut width={20} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppPasswordInput;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  label: {
    fontSize: 16,
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
  },
  passwordInput: {
    flex: 0.9,

    padding: 8,

    color: "#000",
    fontSize: 16,
    letterSpacing: 1,
  },
  passwordToggleVisibleBtn: {
    flex: 0.1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
});
