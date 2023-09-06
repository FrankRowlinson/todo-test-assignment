import { Button } from "@chakra-ui/react";
import { useTaskStore } from "../../../entities/task";

export function ClearCompletedButton() {
  const { clearCompleted } = useTaskStore();
  return (
    <Button variant='ghost' size='sm' onClick={() => clearCompleted()}>
      Clear all completed
    </Button>
  );
}
