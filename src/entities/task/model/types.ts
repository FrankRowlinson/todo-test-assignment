export type Id = string;
export type Status = "active" | "completed";

export interface Task {
  id: Id;
  text: string;
  status: Status;
}

export interface TaskState {
  tasks: Task[];
  addTask: (newTask: Task) => void;
  clearCompleted: () => void;
  switchStatus: (id: Id) => void;
}
