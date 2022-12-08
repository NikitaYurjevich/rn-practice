import {
  addTaskRequest,
  getTasksRequest,
  removeTaskRequest,
} from "app/domains/tasks/api/requests";
import { actionCreator, asyncActionCreator } from "app/store/index.ts";
import {
  AddTaskPayload,
  IGetTasksPayload,
  RemoveTaskPayload,
} from "app/domains/tasks/api/dto";
import { ITask, ToggleModal } from "./taskState";

export default class TaskActions {
  static getTasks = asyncActionCreator<IGetTasksPayload, ITask[], Error>(
    "TASKS/GET_TASKS",
    getTasksRequest
  );
  static addTask = asyncActionCreator<AddTaskPayload, string, Error>(
    "TASKS/ADD_TASKS",
    addTaskRequest
  );
}
