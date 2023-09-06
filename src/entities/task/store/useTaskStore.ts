import { persist, createJSONStorage } from "zustand/middleware";
import { Task, TaskState } from "../model/types";
import { compareStates } from "../../../shared/lib/compare";
import { createWithEqualityFn } from "zustand/traditional";

const initialState = {
  tasks: [],
};

export const useTaskStore = createWithEqualityFn<TaskState>()(
  persist(
    (set) => ({
      ...initialState,

      addTask: (newTask) =>
        set((state) => ({
          tasks: state.tasks.concat(newTask),
        })),

      clearCompleted: () =>
        set((state) => ({
          tasks: state.tasks.filter(
            (task: Task) => task.status !== "completed"
          ),
        })),

      switchStatus: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task: Task) =>
            task.id === id
              ? {
                  ...task,
                  status: task.status === "active" ? "completed" : "active",
                }
              : task
          ),
        })),
    }),
    { name: "task-storage", storage: createJSONStorage(() => localStorage) }
  ),
  compareStates
);
