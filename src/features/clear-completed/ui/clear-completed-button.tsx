import { Button } from "@chakra-ui/react";
import { useTaskStore } from "../../../entities/task";
import { useClearButtonStyles } from "./styles";

export function ClearCompletedButton() {
  const { buttonStyles } = useClearButtonStyles();
  const { clearCompleted } = useTaskStore();
  return (
    <Button {...buttonStyles} onClick={() => clearCompleted()}>
      Clear all completed
    </Button>
  );
}
