import { Flex } from '@chakra-ui/react';

import React from 'react';

import AttunementRow from './AttunementRow';
import StatContainer from '../../StatContainer';
import BasicLoader from '../../../BasicLoader';
import { useAttunement } from '../../../../context/AttunementContext';

export default function AttunementTracker() {
  const { currentAttunement, setCurrentAttunement } = useAttunement();

  return (
    <StatContainer
      header="Attunement Tracker"
      bodyContent={
        currentAttunement ? (
          <Flex
            h={'120px'}
            flexDir={'column'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <AttunementRow
              currentAttunement={currentAttunement}
              setCurrentAttunement={setCurrentAttunement}
            />
            <Flex></Flex>
          </Flex>
        ) : (
          <BasicLoader />
        )
      }
    />
  );
}
