import React, { useEffect, useState } from "react";
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
import { ITask } from "app/domains/tasks/store/taskState";

const TasksScreen = () => {
  const { isLoading, tasks } = useSelector((state: IAppState) => state.tasks);
  const { appId, authInfo } = useSelector((state: IAppState) => state.auth);
  const [selectedTask, setSelectedTask] = useState<ITask>();

  const dispatch = useDispatch();

  const getTasks = async (): Promise<void> => {
    try {
      dispatch(TaskActions.getTasks({ appId, token: authInfo.access_token }));
    } catch (e) {
      console.log("Error : ", JSON.stringify(e));
    }
  };
  useEffect(() => {
    getTasks();
  }, []);

  const logoutHandler = async () => {
    await AsyncStorage.removeItem("authInfo");
    dispatch({ type: AuthActionsEnum.LOGIN_SUCCESS, payload: {} });
  };

  if (isLoading)
    return <ActivityIndicator size={"large"} style={styles.indicatorOffset} />;
  return (
    <View style={styles.container}>
      <Text style={styles.tasksText}>Задачи</Text>
      <TaskList
        tasks={tasks}
        setSelectedTask={setSelectedTask}
      />
      <View style={styles.actionsBox}>
        <AddTaskButton btnStyles={styles.button}/>
        <AppButton
          text={"Выйти"}
          onPress={logoutHandler}
          mode={"redFill"}
          btnStyles={styles.button}
        />
      </View>
      <TaskAddingModal />
      <TaskRemovingModal
        task={selectedTask}
      />
    </View>
  );
};

export default TasksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  tasksText: {
    fontSize: 24,
    textAlign: "center",
    marginVertical: 15,
  },
  indicatorOffset: {
    marginTop: 20,
  },
  actionsBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  button: {
    margin: 5,
  }
});
