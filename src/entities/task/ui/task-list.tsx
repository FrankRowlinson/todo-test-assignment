import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { ClearCompletedButton } from "../../../features/clear-completed";
import { TaskTab } from "./task-tab";

export function TaskList() {
  return (
    <Tabs isFitted variant='soft-rounded'>
      <TabPanels>
        <TabPanel>
          <TaskTab />
        </TabPanel>
        <TabPanel>
          <TaskTab status='active' />
        </TabPanel>
        <TabPanel>
          <TaskTab status='completed' />
        </TabPanel>
      </TabPanels>
      <Flex alignItems='center'>
        <TabList>
          <Tab>All</Tab>
          <Tab>Active</Tab>
          <Tab>Completed</Tab>
        </TabList>
        <ClearCompletedButton />
      </Flex>
    </Tabs>
  );
}
