import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Color } from "app/helpers/constants";
import { useDispatch } from "react-redux";
import TaskActions from "app/domains/tasks/store/taskActions";
import AppButton from "app/components/AppButton.component";

const AddTaskButton = () => {
  const openModalHandler = () => {};

  return <AppButton />;
};

export default AddTaskButton;
