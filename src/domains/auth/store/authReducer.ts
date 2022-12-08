import { Action } from "app/store";
import { AuthActionsEnum } from "./authActions";
import authInitialState, { IAuthInfo, IAuthState } from "./authState";

export const authReducer = (
  state = authInitialState,
  action: Action<IAuthInfo | string>
): IAuthState => {
  switch (action.type) {
    case AuthActionsEnum.LOGIN_START:
      return {
        ...state,
        isLoading: true,
      };
    case AuthActionsEnum.LOGIN_SUCCESS:
      return <IAuthState>{
        ...state,
        authInfo: action.payload,
        isLoading: false,
      };
    case AuthActionsEnum.LOGIN_FAILURE:
      return <IAuthState>{
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
