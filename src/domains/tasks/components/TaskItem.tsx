import React from "react";
import { TouchableOpacity } from "react-native";
import { ITask } from "app/domains/tasks/store/taskState";

interface IProps {
  task: ITask;
}

const TaskItem = ({ task }: IProps) => {
  const openRemoveTaskModal = () => {};

  return <TouchableOpacity />;
};

export default TaskItem;
