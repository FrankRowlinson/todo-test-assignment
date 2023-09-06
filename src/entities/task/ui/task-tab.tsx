import { Box, Text } from "@chakra-ui/react";
import { useTaskStore } from "..";
import { Status } from "../model/types";
import { getTasks, getTasksByStatus } from "../store/selectors";
import { TaskEntry } from "./task-entry";
import { useTaskTabStyles } from "./styles";

type Props = {
  status?: Status;
};

export function TaskTab({ status }: Props) {
  const { boxStyles } = useTaskTabStyles();
  const tasks = useTaskStore(status ? getTasksByStatus(status) : getTasks());

  if (!tasks.length) {
    return <Text>There is no {status} tasks yet...</Text>;
  }

  return (
    <Box {...boxStyles}>
      {tasks.map((task) => (
        <TaskEntry {...task} key={task.id} />
      ))}
    </Box>
  );
}
