import React, { useEffect } from "react";
import { ActivityIndicator, Text, View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { IAppState } from "app/store";
import TaskActions from "app/domains/tasks/store/taskActions";
import TaskList from "app/domains/tasks/components/TaskList";
import { Color } from "app/helpers/constants";
import AddTaskButton from "app/domains/tasks/components/AddTask.button";
import TaskAddingModal from "app/domains/tasks/components/TaskAdding.modal";
import AppButton from "app/components/AppButton.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TaskRemovingModal from "app/domains/tasks/components/TaskRemoving.modal";
import { AuthActionsEnum } from "app/domains/auth/store/authActions";

const TasksScreen = () => {
  const { isLoading } = useSelector((state: IAppState) => state.tasks);
  const { appId, authInfo } = useSelector((state: IAppState) => state.auth);

  const dispatch = useDispatch();
  const logoutHandler = async () => {
    await AsyncStorage.removeItem("authInfo");
    dispatch({ type: AuthActionsEnum.LOGIN_SUCCESS, payload: {} });
  };

  if (isLoading)
    return <ActivityIndicator size={"large"} style={styles.indicatorOffset} />;
  return (
    <View style={styles.container}>
      <Text>Задачи</Text>
      <TaskList />
      <View>
        <AddTaskButton />
        <AppButton />
      </View>
      <TaskAddingModal />
      <TaskRemovingModal />
    </View>
  );
};

export default TasksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  indicatorOffset: {
    marginTop: 20,
  },
});
