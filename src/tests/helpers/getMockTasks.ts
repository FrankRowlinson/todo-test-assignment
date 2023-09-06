import { Status } from "../../entities/task/model/types";

export function getMockTasks() {
  return generateTasks("completed").concat(generateTasks("active"));
}

function generateTasks(status: Status) {
  return new Array(5).fill(0).map(() => ({
    id: String(Math.random()),
    text: status,
    status,
  }));
}
