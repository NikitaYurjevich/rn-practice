import { AxiosError } from "axios";
import { loginRequest } from "../api/requests";
import { UserLogin } from "../views/LoginScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthActionsEnum = {
  LOGIN_START: "AUTH/LOGIN_START",
  LOGIN_SUCCESS: "AUTH/LOGIN_DONE",
  LOGIN_FAILURE: "AUTH/LOGIN_FAILED",
};

export default class AuthActions {
  static login =
    (payload: UserLogin) =>
    async (dispatch: any): Promise<AxiosError | void> => {
      dispatch({ type: AuthActionsEnum.LOGIN_START });
      try {
        const response = await loginRequest(payload);
        if ("data" in response) {
          dispatch({
            type: AuthActionsEnum.LOGIN_SUCCESS,
            payload: response.data,
          });
          await AsyncStorage.setItem("authInfo", JSON.stringify(response.data));
        }
      } catch (e) {
        dispatch({ type: AuthActionsEnum.LOGIN_FAILURE, payload: e.data });
      }
    };
}
