import { Container, Heading } from "@chakra-ui/react";
import { CreateTaskInput } from "./features/create-task/";
import { TaskList } from "./entities/task";
import "./App.css";

function App() {
  return (
    <Container>
      <Heading as='h1' size='2xl'>
        TODOS
      </Heading>
      <CreateTaskInput />
      <TaskList />
    </Container>
  );
}

export default App;
