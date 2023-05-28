import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react';
import CombatTabContent from './Combat/CombatTabContent';
import RolePlayTabContent from './RolePlay/RolePlayTabContent';
import ResourceTabContent from './Resources/ResourceTabContent';
import { CharacterObject } from '../../types/character';

function CharacterTabs({ character }: { character: CharacterObject }) {
  return (
    <Tabs
      isFitted
      variant="solid-rounded"
      colorScheme="brandSecondary"
      defaultIndex={1}
    >
      <TabList
        mt={2.5}
        borderRadius={'md'}
        boxShadow={'xl'}
        bg="brandPrimary.50"
        border="5px solid"
        borderColor="brandPrimary.900"
        mb={-1.5}
      >
        <Tab borderRadius={'md'} key="RP">
          Role Play
        </Tab>
        <Tab borderRadius={'md'} key="C">
          Combat
        </Tab>
        <Tab borderRadius={'md'} key="R">
          Resources
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel px={0} h={'100%'}>
          <RolePlayTabContent character={character} />
        </TabPanel>
        <TabPanel px={0} h={'100%'}>
          <CombatTabContent character={character} />
        </TabPanel>
        <TabPanel px={0} h={'100%'}>
          <ResourceTabContent character={character} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default CharacterTabs;
