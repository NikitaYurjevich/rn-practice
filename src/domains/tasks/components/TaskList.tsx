import { FlatList, ListRenderItem  } from "react-native";
import React from "react";
import { ITask } from "app/domains/tasks/store/taskState";
import TaskItem from "app/domains/tasks/components/TaskItem";

type setSelectedTaskCallback = (task: ITask) => void;

interface IProps {
  tasks: ITask[];
  setSelectedTask: setSelectedTaskCallback;
}

const TaskList = ({ tasks, setSelectedTask }: IProps) => {
  const renderItem: ListRenderItem<ITask> = ({ item }) => (
    <TaskItem
      task={item}
      setSelectedTask={setSelectedTask}
    />
  );

  return <FlatList
    data={tasks}
    renderItem={renderItem}
    keyExtractor={item => item.id}
  />;
};

export default TaskList;
