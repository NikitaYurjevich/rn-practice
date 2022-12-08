import { Color } from "app/helpers/constants";
import React from "react";
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

type onPressCallback = (event: GestureResponderEvent) => void;

interface IProps {
  mode?: "outlined" | "greenFill" | "redFill";
  text: string;
  onPress: onPressCallback;
  disabled?: boolean;
  btnStyles?: any;
  textStyles?: any;
}

const AppButton = ({
  mode = "greenFill",
  text,
  onPress,
  disabled,
  btnStyles,
  textStyles,
}: IProps) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...(mode === "outlined" && styles.buttonOutlined),
        ...(mode === "greenFill" && styles.buttonGreenFill),
        ...(mode === "redFill" && styles.buttonRedFill),
        ...(disabled && styles.disabled),
        ...btnStyles,
      }}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={{
          ...styles.text,
          ...(mode === "outlined" && styles.textOutlined),
          ...(mode === "greenFill" && styles.greenButtonText),
          ...(mode === "redFill" && styles.redButtonText),
          ...textStyles,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",

    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
  },
  buttonOutlined: {
    backgroundColor: "transparent",
    borderColor: Color.text,
    borderWidth: 1,
  },
  buttonGreenFill: {
    backgroundColor: Color.success,
  },
  buttonRedFill: {
    backgroundColor: Color.error,
  },
  text: {
    fontSize: 16,
  },
  textOutlined: {
    color: Color.text,
  },
  greenButtonText: {
    color: Color.white,
  },
  redButtonText: {
    color: Color.white,
  },
  disabled: {
    opacity: 0.5,
  },
});
