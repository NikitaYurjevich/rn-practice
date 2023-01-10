import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import AppPasswordInput from "app/domains/auth/components/AppPasswordInput.component";
import { useDispatch } from "react-redux";
import AuthActions, { AuthActionsEnum } from "app/domains/auth/store/authActions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Color } from "app/helpers/constants";
import AppButton from "app/components/AppButton.component";
import AppInput from "app/components/AppInput.component";

export type UserLogin = {
  email: string,
  password: string,
};

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

  const onChangeEmailHandler = (email: string): void => {
    setFields({...fields, email});
  }

  const onChangePasswordHandler = (password: string): void => {
    setFields({...fields, password});
  }

  const dispatch = useDispatch();
  const loginHandler = async () => {
    try {
      await dispatch(AuthActions.login(fields));
    } catch (e) {
      console.log("Error : ", JSON.stringify(e));
    }
  };

  return (
    <View style={styles.container}>
      <AppInput
          onChangeText={onChangeEmailHandler}
          value={fields.email}
          keyboardType={"email-address"}
          placeholder={"example@mail.com"}
          label={"Email"}
      />
      <AppPasswordInput
          onChangeText={onChangePasswordHandler}
          value={fields.password}
          placeholder={"strong password"}
      />
      <AppButton
          text={"Sign In"}
          onPress={loginHandler}
          btnStyles={{ marginTop: 10 }}
      />
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
