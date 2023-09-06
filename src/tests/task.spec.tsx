import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { useTaskStore } from "../entities/task";
import { initApp } from "./helpers/initApp";

const user = userEvent.setup();
const taskName = "Hello world";

describe("Test tasks", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("can add task to tasklist", async () => {
    render(initApp());

    const input = screen.queryByPlaceholderText(/what to do/i);
    await user.type(input!, `${taskName}{enter}`);

    const task = screen.queryAllByText(taskName);
    expect(task).toBeDefined();
  });

  it("can mark task as completed", async () => {
    render(initApp());
    const checkbox = screen
      .queryAllByText("active")[0]
      .parentElement?.querySelector("input");

    await user.click(checkbox!);

    const activeTasks = useTaskStore
      .getState()
      .tasks.filter((task) => task.status === "active");

    expect(activeTasks).toHaveLength(4);
  });

  it("can remove task from completed", async () => {
    render(initApp());
    const checkbox = screen
      .queryAllByText("completed")[0]
      .parentElement?.querySelector("input");

    await user.click(checkbox!);

    const completedTasks = useTaskStore
      .getState()
      .tasks.filter((task) => task.status === "completed");

    expect(completedTasks).toHaveLength(4);
  });

  it("can delete all completed tasks", async () => {
    render(initApp());
    const clearButton = screen.getByText(/clear all/i);

    await user.click(clearButton);
    const completedTasks = useTaskStore
      .getState()
      .tasks.filter((task) => task.status === "completed");

    expect(completedTasks).toHaveLength(0);
  });

  it("displays all tasks from store", () => {
    const { queryAllByRole } = render(initApp());

    const tasksOnScreen = queryAllByRole("tabpanel")[0];
    const tasksInStore = useTaskStore.getState().tasks;

    expect(tasksOnScreen.children[0].children.length).toEqual(
      tasksInStore.length
    );
  });
});
