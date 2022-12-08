import LoginScreen from "app/domains/auth/views/LoginScreen";
import React from "react";
import { useSelector } from "react-redux";
import { IAppState } from "app/store";
import TasksScreen from "app/domains/tasks/views/TasksScreen";

const AppContainer = () => {
  const { authInfo } = useSelector((state: IAppState) => state.auth);
  return authInfo.access_token ? <TasksScreen /> : <LoginScreen />;
};

export default AppContainer;
