import { Container, Heading } from "@chakra-ui/react";
import { CreateTaskInput } from "./features/create-task/";
import { TaskList } from "./entities/task";
import { useAppStyles } from "./styles";

function App() {
  const { headingStyles, containerStyles } = useAppStyles();
  return (
    <Container {...containerStyles}>
      <Heading as='h1' {...headingStyles}>
        TODOS
      </Heading>
      <CreateTaskInput />
      <TaskList />
    </Container>
  );
}

export default App;
