import {
  addTaskRequest,
  getTasksRequest,
  removeTaskRequest,
} from "app/domains/tasks/api/requests";
import { actionCreator, asyncActionCreator } from "app/store/index.ts";
import {
  IGetTasksPayload,
  IGetTasksResponse,
  AddTaskPayload,
  RemoveTaskPayload,
} from "app/domains/tasks/api/dto";
import { IToggleModal } from "./taskState"

export default class TaskActions {
  static toggleModal = actionCreator<IToggleModal>('TOGGLE_MODAL');
  static getTasks = asyncActionCreator<IGetTasksPayload, IGetTasksResponse, Error>(
    "TASKS/GET_TASKS",
    getTasksRequest
  );
  static addTask = asyncActionCreator<AddTaskPayload, string, Error>(
    "TASKS/ADD_TASKS",
    addTaskRequest
  );
  static removeTask = asyncActionCreator<RemoveTaskPayload, string, Error>(
    "TASKS/REMOVE_TASK",
    removeTaskRequest
  );
}
