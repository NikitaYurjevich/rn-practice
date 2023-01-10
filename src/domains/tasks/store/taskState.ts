export interface ITasksState {
  tasks: ITask[];
  addTaskModalVisible: boolean;
  removeTaskModalVisible: boolean;
  isLoading: boolean;
}
export const TasksActionsEnum = {
  GET_TASKS_START: "GET_TASKS_STARTED",
  GET_TASKS_SUCCESS: "GET_TASKS_DONE",
  GET_TASKS_FAILURE: "GET_TASKS_FAILED",
};

const taskInitialState: ITasksState = {
  tasks: [],
  addTaskModalVisible: false,
  removeTaskModalVisible: false,
  isLoading: false,
};
export default taskInitialState;

type TaskStateType = "Новое" | "В работе" | "На проверке" | "Выполнено";

export interface ITask {
  id: string;
  name: string;
  creationDate: string;
  description: string;
  author: {
    id: string;
    name: string;
  };
  performer: {
    id: string;
    name: string;
  };
  inspector: {
    id: string;
    name: string;
  };
  comment: string;
  state: {
    name: TaskStateType;
    color: string;
  };
  deadline: string;
  subject: {
    id: string;
    name: string;
    systemType: string;
  };
  files: IFile[];
  subtasks: ISubTask[];
}

export interface ISubTask {
  id: string;
  name: string;
  creationDate: string;
  description: string;
  author: {
    id: string;
    name: string;
  };
  performer: {
    id: string;
    name: string;
  };
  inspector: {
    id: string;
    name: string;
  };
  comment: string;
  state: {
    name: TaskStateType;
    color: string;
  };
  deadline: string;
  files: IFile[];
}

export interface IFile {
  id: string;
  name: string;
  signed: boolean;
  format: string;
  size: number;
  link: string;
  view: string;
}

export interface IToggleModal {
  action: "add" | "remove";
  visible: boolean;
}
