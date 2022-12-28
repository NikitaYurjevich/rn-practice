import React from "react";
import { View, TextInputProps, StyleSheet, TextInput, Text } from "react-native";

interface IProps extends TextInputProps {
  label?: string;
}

const AppInput = ({ label, ...rest }: IProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        { label }
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          {...rest}
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
  },
  input: {
    flex: 0.9,

    padding: 8,

    color: "#000",
    fontSize: 16,
    letterSpacing: 1,
  }
});
