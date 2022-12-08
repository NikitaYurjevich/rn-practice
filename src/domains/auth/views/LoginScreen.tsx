import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import AppInput from "app/components/AppInput.component";
import AppPasswordInput from "app/components/AppPasswordInput.component";
import { useDispatch } from "react-redux";
import { AuthActionsEnum } from "app/domains/auth/store/authActions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Color } from "app/helpers/constants";

export type UserLogin = {};

const LoginScreen = () => {
  const [fields, setFields] = useState<UserLogin>({ email: "", password: "" });

  const tryAuthorize = async (): Promise<void> => {
    const authInfoStringify = await AsyncStorage.getItem("authInfo");
    if (authInfoStringify) {
      const authInfo = JSON.parse(authInfoStringify);
      dispatch({ type: AuthActionsEnum.LOGIN_SUCCESS, payload: authInfo });
    }
  };
  useEffect(() => {
    tryAuthorize();
  }, []);

  const dispatch = useDispatch();
  const loginHandler = async () => {};

  return (
    <View style={styles.container}>
      <AppInput keyboardType={"email-address"} />
      <AppPasswordInput />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",

    paddingHorizontal: 15,
    backgroundColor: Color.white,
  },
});
