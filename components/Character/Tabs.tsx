import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react';
import CombatTabContent from './CombatTabContent';

function CharacterTabs() {
  return (
    <Tabs isFitted variant="solid-rounded" colorScheme="brandPrimary">
      <TabList>
        <Tab>Role Play</Tab>
        <Tab>Combat</Tab>
        <Tab>Resources</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <CombatTabContent />
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default CharacterTabs;
