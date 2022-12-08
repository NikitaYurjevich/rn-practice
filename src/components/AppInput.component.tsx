import React from "react";
import { View, TextInputProps, StyleSheet } from "react-native";

interface IProps extends TextInputProps {
  label?: string;
}

const AppInput = ({ label, ...rest }: IProps) => {
  return <View style={styles.container}>{/* ... */}</View>;
};

export default AppInput;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
