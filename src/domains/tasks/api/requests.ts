import axios, { AxiosError, AxiosResponse } from "axios";
import { ITask } from "app/domains/tasks/store/taskState";
import { API_URL } from "app/App";
import {
  AddTaskPayload,
  IGetTasksPayload,
  RemoveTaskPayload,
} from "app/domains/tasks/api/dto";

export async function getTasksRequest({
  appId,
  token,
}: IGetTasksPayload): Promise<AxiosResponse<ITask[]> | AxiosError> {
  return await axios.get(`${API_URL}/tasks/list`, {
    params: {
      appId,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function addTaskRequest(
  payload: AddTaskPayload
): Promise<AxiosResponse<string> | AxiosError> {
  const { appId, userIds, taskName, token } = payload;
  return await axios.post(
    `${API_URL}/tasks/new-task`,
    {
      appId,
      userIds,
      name: taskName,
      deadline: new Date(),
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}
