import taskInitialState, {
  ITasksState, IToggleModal,
} from "app/domains/tasks/store/taskState";
import TaskActions from "app/domains/tasks/store/taskActions";
import {
  ReducerBuilder,
  reducerWithInitialState,
} from "typescript-fsa-reducers";
import { Success } from "typescript-fsa";
import { IGetTasksPayload, IGetTasksResponse } from "app/domains/tasks/api/dto";

const getTaskStarted = (state: ITasksState): ITasksState => {
  return {
    ...state,
    isLoading: true,
  };
};
const getTaskDone = (
  state: ITasksState,
  payload: Success<IGetTasksPayload, IGetTasksResponse>
): ITasksState => {
  return {
    ...state,
    tasks: payload.result.data,
    isLoading: false,
  };
};
const getTaskFailed = (state: ITasksState): ITasksState => {
  return {
    ...state,
    isLoading: false,
  };
};

const addTaskDone = (state: ITasksState): ITasksState => {
  return {
    ...state,
    isLoading: false,
  };
};

const toggleModal = (state: ITasksState, payload: IToggleModal): ITasksState => {
  const { action, visible } = payload;
  const newState: any = { ...state };
  newState[`${action}TaskModalVisible`] = visible;

  return newState;
};

export const taskReducer: ReducerBuilder<ITasksState> = reducerWithInitialState(
  taskInitialState
)
  .case(TaskActions.getTasks.async.started, getTaskStarted)
  .case(TaskActions.getTasks.async.done, getTaskDone)
  .case(TaskActions.getTasks.async.failed, getTaskFailed)
  .case(TaskActions.addTask.async.started, getTaskStarted)
  .case(TaskActions.addTask.async.done, addTaskDone)
  .case(TaskActions.addTask.async.failed, getTaskFailed)
  .case(TaskActions.toggleModal, toggleModal);


