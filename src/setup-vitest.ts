import { vi } from "vitest";
import crypto from "crypto";
import { getMockTasks } from "./tests/helpers/getMockTasks";

Object.defineProperty(globalThis, "crypto", {
  value: {
    randomUUID: () => crypto.randomUUID,
  },
});

vi.mock("zustand");
vi.mock("./entities/task/store/utils", () => {
  return {
    getInitialState: () => ({ tasks: getMockTasks() }),
  };
});
