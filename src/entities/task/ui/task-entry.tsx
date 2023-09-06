import { Checkbox, Flex, Text } from "@chakra-ui/react";
import { Task } from "../model/types";
import { useTaskStore } from "..";
import { useTaskEntryStyles } from "./styles";

type TaskEntryProps = Task;

export function TaskEntry({ id, status, text }: TaskEntryProps) {
  const { flexStyles, textStyles, checkboxStyles } = useTaskEntryStyles();
  const { switchStatus } = useTaskStore();
  return (
    <Flex {...flexStyles}>
      <Checkbox
        {...checkboxStyles}
        onChange={() => switchStatus(id)}
        isChecked={status === "completed"}
      />
      <Text {...textStyles} as={status === "completed" ? "s" : "p"}>
        {text}
      </Text>
    </Flex>
  );
}
