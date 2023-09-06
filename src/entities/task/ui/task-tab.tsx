import { Box } from "@chakra-ui/react";
import { useTaskStore } from "..";
import { Status } from "../model/types";
import { getTasks, getTasksByStatus } from "../store/selectors";
import { TaskEntry } from "./task-entry";

type Props = {
  status?: Status;
};

export function TaskTab({ status }: Props) {
  const tasks = useTaskStore(status ? getTasksByStatus(status) : getTasks);
  return (
    <Box gap={2}>
      {tasks.map((task) => (
        <TaskEntry {...task} key={`${task.id}${task.status}`} />
      ))}
    </Box>
  );
}
