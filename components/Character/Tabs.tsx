import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react';
import CombatTabContent from './Combat/CombatTabContent';
import { CharacterObject } from '../../types/character';

function CharacterTabs({ character }: { character: CharacterObject }) {
  return (
    <Tabs
      isFitted
      variant="solid-rounded"
      colorScheme="brandPrimary"
      defaultIndex={1}
    >
      <TabList>
        <Tab key="RP">Role Play</Tab>
        <Tab key="C">Combat</Tab>
        <Tab key="R">Resources</Tab>
      </TabList>

      <TabPanels>
        <TabPanel px={0}>
          <p>one!</p>
        </TabPanel>
        <TabPanel px={0}>
          <CombatTabContent character={character} />
        </TabPanel>
        <TabPanel px={0}>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default CharacterTabs;