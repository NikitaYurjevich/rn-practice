export interface IAuthInfo {
  userId: string;
  access_token: string;
  token_expires_at: Date | null;
  refresh_token: string;
  refresh_token_expires_at: Date | null;
}

export interface IAuthState {
  appId: number;
  authInfo: IAuthInfo;
  isLoading: boolean;
}

const authInitialState: IAuthState = {
  appId: 70,
  authInfo: {} as IAuthInfo,
  isLoading: false,
};

export default authInitialState;
