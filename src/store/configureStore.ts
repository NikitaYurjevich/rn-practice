import { combineReducers } from "redux";
import { IAuthState } from "app/domains/auth/store/authState";
import { ITasksState } from "app/domains/tasks/store/taskState";
import { authReducer } from "app/domains/auth/store/authReducer";
import { taskReducer } from "app/domains/tasks/store/taskReducer";

export interface Action<T> {
  type: string;
  payload: T;
}

export interface IAppState {
  auth: IAuthState;
  tasks: ITasksState;
}

export const rootReducer = combineReducers({
  auth: authReducer,
  tasks: taskReducer,
});
