import { Status, TaskState } from "../model/types";

export const getTasks = (state: TaskState) => state.tasks;

export const getTasksByStatus = (status: Status) => (state: TaskState) =>
  state.tasks.filter((task) => task.status === status);
