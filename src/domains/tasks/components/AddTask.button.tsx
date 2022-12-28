import React from "react";
import { useDispatch } from "react-redux";
import TaskActions from "app/domains/tasks/store/taskActions";
import AppButton from "app/components/AppButton.component";

const AddTaskButton = ({ ...rest}) => {
  const dispatch = useDispatch();
  const openModalHandler = () => {
    dispatch(TaskActions.toggleModal({ action: "add", visible: true }));
  };

  return (
    <AppButton
      text={"Добавить задачу"}
      onPress={openModalHandler}
      { ...rest }
    />
  );
};

export default AddTaskButton;
