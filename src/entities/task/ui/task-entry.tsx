import { Checkbox, Flex, Text } from "@chakra-ui/react";
import { Task } from "../model/types";
import { useTaskStore } from "..";

type TaskEntryProps = Task;

export function TaskEntry({ id, status, text }: TaskEntryProps) {
  const { switchStatus } = useTaskStore();
  return (
    <Flex gap={2}>
      <Checkbox
        size='lg'
        onChange={() => switchStatus(id)}
        checked={status === "completed"}
        defaultChecked={status === "completed"}
      />
      <Text fontSize={20} as={status === "completed" ? "s" : "p"}>
        {text}
      </Text>
    </Flex>
  );
}
