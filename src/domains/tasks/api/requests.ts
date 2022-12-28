import axios, { AxiosError, AxiosResponse } from "axios";
import { API_URL } from "app/App";
import {
  AddTaskPayload,
  IGetTasksPayload,
  IGetTasksResponse,
  RemoveTaskPayload,
} from "app/domains/tasks/api/dto";

export async function getTasksRequest({
  appId,
  token,
}: IGetTasksPayload): Promise<AxiosResponse<IGetTasksResponse> | AxiosError> {
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

export async function removeTaskRequest(
    payload: RemoveTaskPayload
): Promise<AxiosResponse<string> | AxiosError> {
  const { appId, taskId, token } = payload;
  return await axios.post(
    `${API_URL}/tasks/delete-task`,
    {
      appId,
      ids: [taskId],
      deadline: new Date(),
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}
