import { FormControl, Input } from "@chakra-ui/react";
import { useForm, FieldValues } from "react-hook-form";
import { useTaskStore } from "../../../entities/task";

export function CreateTaskInput() {
  const { register, handleSubmit, reset } = useForm();
  const { addTask } = useTaskStore();

  const onSubmit = (formData: FieldValues) => {
    addTask({
      id: crypto.randomUUID(),
      status: "active",
      text: formData.newTask,
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <Input
          placeholder='What to do?'
          {...register("newTask", { required: true })}
        />
      </FormControl>
    </form>
  );
}
