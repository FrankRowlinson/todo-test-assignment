import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { ClearCompletedButton } from "../../../features/clear-completed";
import { TaskTab } from "./task-tab";
import { useTaskListStyles } from "./styles";
import { getCompletionCounter } from "../store/selectors";
import { useTaskStore } from "..";

export function TaskList() {
  const count = useTaskStore(getCompletionCounter());
  const { flexStyles, tabsStyles, tabPanelsStyles } = useTaskListStyles();
  return (
    <Tabs {...tabsStyles}>
      <TabList>
        <Tab>All</Tab>
        <Tab>Active</Tab>
        <Tab>Completed</Tab>
      </TabList>
      <TabPanels {...tabPanelsStyles}>
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
      <Flex {...flexStyles}>
        <Text>{count} completed</Text>
        <ClearCompletedButton />
      </Flex>
    </Tabs>
  );
}
