import { ITask } from "app/domains/tasks/store/taskState";

export interface IGetTasksPayload {
  appId: number;
  token: string;
}

export interface IGetTasksResponse {
  data: ITask[];
}

export interface AddTaskPayload {
  appId: number;
  userIds: string[];
  taskName: string;
  token: string;
}

export interface RemoveTaskPayload {
  appId: number;
  taskId: string;
  token: string;
}
