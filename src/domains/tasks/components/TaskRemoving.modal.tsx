import React from "react";
import { Modal, View, Text, StyleSheet } from "react-native";
import { Color } from "app/helpers/constants";
import AppButton from "app/components/AppButton.component";
import { useDispatch, useSelector } from "react-redux";
import TaskActions from "app/domains/tasks/store/taskActions";
import { IAppState } from "app/store";
import { ITask } from "app/domains/tasks/store/taskState";

interface IProps {
  task?: ITask;
}

const TaskRemovingModal = ( { task }: IProps) => {
  const { removeTaskModalVisible } = useSelector(
    (state: IAppState) => state.tasks
  );
  const { authInfo } = useSelector((state: IAppState) => state.auth);

  const { appId } = useSelector((state: IAppState) => state.auth);
  const dispatch = useDispatch();
  const closeModalHandler = () => {
    dispatch(TaskActions.toggleModal({ action: "remove", visible: false }));
  };
  const removeTaskHandler = async (): Promise<void> => {
    if (task) {
      const requestPayload = { appId, taskId: task.id, token: authInfo.access_token };
      try {
        await dispatch(TaskActions.removeTask(requestPayload));
        closeModalHandler();
        dispatch(TaskActions.getTasks({ appId, token: authInfo.access_token }));
      } catch (e) {
        console.log("Error : ", JSON.stringify(e));
      }
    }
  };

  return (
    <Modal visible={removeTaskModalVisible} transparent={true}>
      <View style={styles.container}>
        <View style={styles.contentBox}>
          <Text
            style={styles.title}
          >
            {`Удалить задачу "${task?.name}"?`}</Text>
          <View style={styles.actionsBox}>
            <AppButton
              mode={"outlined"}
              text={"Отмена"}
              onPress={closeModalHandler}
              btnStyles={{ marginHorizontal: 8 }}
            />
            <AppButton
                text={"Удалить"}
                onPress={removeTaskHandler}
                btnStyles={{ marginHorizontal: 8 }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TaskRemovingModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  contentBox: {
    justifyContent: "center",
    flex: 0.4,
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.text,
    borderRadius: 15,
  },
  title: {
    fontSize: 18,
    color: Color.text,
    textAlign: "center",
  },
  actionsBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },
});
