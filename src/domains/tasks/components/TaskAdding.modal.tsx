import React, { useState } from "react";
import { Modal, View, StyleSheet } from "react-native";
import AppInput from "app/components/AppInput.component";
import { Color } from "app/helpers/constants";
import AppButton from "app/components/AppButton.component";
import { useDispatch, useSelector } from "react-redux";
import TaskActions from "app/domains/tasks/store/taskActions";
import { IAppState } from "app/store";

const TaskAddingModal = () => {
  const { addTaskModalVisible, isLoading } = useSelector(
    (state: IAppState) => state.tasks
  );
  const { authInfo } = useSelector((state: IAppState) => state.auth);

  const [taskName, setTaskName] = useState<string>("");

  const { appId } = useSelector((state: IAppState) => state.auth);
  const dispatch = useDispatch();
  const closeModalHandler = () => {
    dispatch(TaskActions.toggleModal({ action: "add", visible: false }));
  };
  const addTaskHandler = async (): Promise<void> => {
    const requestPayload = { appId, userIds: [authInfo.userId], taskName, token: authInfo.access_token };

    try {
      await dispatch(TaskActions.addTask(requestPayload));
      closeModalHandler();
      dispatch(TaskActions.getTasks({ appId, token: authInfo.access_token }));
    } catch (e) {
      console.log("Error : ", JSON.stringify(e));
    }
  };

  return (
    <Modal visible={addTaskModalVisible} transparent={true}>
      <View style={styles.container}>
        <View style={styles.contentBox}>
          <AppInput
            value={taskName}
            onChangeText={setTaskName}
            label={"Название задачи:"}
            keyboardType={"email-address"}
          />
          <View style={styles.actionsBox}>
            <AppButton
              mode={"outlined"}
              disabled={isLoading}
              text={"Закрыть"}
              onPress={closeModalHandler}
              btnStyles={styles.button}
            />
            <AppButton
              disabled={isLoading}
              text={"Добавить"}
              onPress={addTaskHandler}
              btnStyles={styles.button}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TaskAddingModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
  },
  contentBox: {
    justifyContent: "center",
    flex: 0.4,
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.text,
    borderRadius: 15,
  },
  actionsBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  button: {
    margin: 5,
  }
});
