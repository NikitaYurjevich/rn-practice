import React, { useEffect, useState } from "react";
import { Modal, View, Text, StyleSheet } from "react-native";
import AppInput from "app/components/AppInput.component";
import { Color } from "app/helpers/constants";
import AppButton from "app/components/AppButton.component";
import { useDispatch, useSelector } from "react-redux";
import TaskActions from "app/domains/tasks/store/taskActions";
import { IAppState } from "app/store";

const TaskRemovingModal = () => {
  const { removeTaskModalVisible } = useSelector(
    (state: IAppState) => state.tasks
  );
  const { authInfo } = useSelector((state: IAppState) => state.auth);

  const { appId } = useSelector((state: IAppState) => state.auth);
  const dispatch = useDispatch();
  const closeModalHandler = () => {};
  const removeTaskHandler = async (): Promise<void> => {
    const requestPayload = {};

    try {
      // Запрос на удаление
      closeModalHandler();
      dispatch(TaskActions.getTasks({ appId, token: authInfo.access_token }));
    } catch (e) {
      console.log("Error : ", JSON.stringify(e));
    }
  };

  return (
    <Modal visible={removeTaskModalVisible} transparent={true}>
      <View style={styles.container}>
        <View style={styles.contentBox}>
          <Text
            style={styles.title}
          >{`Удалить задачу "${"<имя задачи>"}"?`}</Text>
          <View style={styles.actionsBox}>
            <AppButton
              mode={"outlined"}
              text={"Отмена"}
              onPress={closeModalHandler}
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
