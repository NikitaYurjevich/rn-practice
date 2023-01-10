import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { ITask } from "app/domains/tasks/store/taskState";
import { Color } from "app/helpers/constants";
import TaskActions from "app/domains/tasks/store/taskActions";
import { useDispatch } from "react-redux";

type setSelectedTaskCallback = (task: ITask) => void;

interface IProps {
  task: ITask;
  setSelectedTask: setSelectedTaskCallback;
}

const TaskItem = ({ task, setSelectedTask }: IProps) => {

  const dispatch = useDispatch();
  const openRemoveTaskModal = () => {
    try {
      dispatch(TaskActions.toggleModal({ action: "remove", visible: true }));
      setSelectedTask(task)
    } catch (e) {
      console.log("Error : ", JSON.stringify(e));
    }
  };

  return (
    <TouchableOpacity
      style={styles.taskItem}
      onPress={openRemoveTaskModal}
    >
      <Text>
        {task.name}
      </Text>
    </TouchableOpacity>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  taskItem: {
    padding: 10,
    borderBottomColor: Color.text,
    borderBottomWidth: 1,
  },
});
