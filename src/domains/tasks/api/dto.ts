export interface IGetTasksPayload {
  appId: number;
  token: string;
}

export interface AddTaskPayload {
  appId: number;
  userIds: string[];
  taskName: string;
  token: string;
}
