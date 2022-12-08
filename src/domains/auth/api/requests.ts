import axios, { AxiosError, AxiosResponse } from "axios";
import { UserLogin } from "../views/LoginScreen";
import { API_URL } from "app/App";
import { IAuthInfo } from "app/domains/auth/store/authState";

export async function loginRequest(
  payload: UserLogin
): Promise<AxiosResponse<IAuthInfo> | AxiosError> {
  return await axios.post(`${API_URL}/auth/login`, payload);
}
