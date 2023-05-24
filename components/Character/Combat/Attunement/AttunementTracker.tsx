import { Box, Flex, IconButton, Progress } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

import React from 'react';
import AttunementButton from './AttunementButton';

import StatContainer from '../../StatContainer';
import BasicLoader from '../../../BasicLoader';
import {
  defaultAttunementTrackerProps,
  useAttunement,
} from '../../../../context/AttunementContext';

export default function AttunementTracker() {
  const { currentAttunement, setCurrentAttunement } = useAttunement();

  return (
    <StatContainer
      header="Attunement Tracker"
      bodyContent={
        currentAttunement ? (
          <Flex
            h={'100%'}
            width={'100%'}
            maxWidth="100%"
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Box mt={3}>
              <AttunementButton
                colorScheme="purple"
                text={'G'}
                currentValue={currentAttunement.currentGraviton}
                maxValue={currentAttunement.maxGraviton}
                setCurrentValue={() =>
                  setCurrentAttunement({
                    ...currentAttunement,
                    currentPhoton: 0,
                    currentGraviton: Math.min(
                      currentAttunement.currentGraviton + 1,
                      currentAttunement.maxGraviton
                    ),
                  })
                }
              />
            </Box>
            <Box w="100%">
              <Flex
                w="100%"
                flexDir={'column'}
                h="100%"
                justifyContent={'center'}
              >
                <Progress
                  backgroundColor={'whiteAlpha'}
                  transform={'scaleX(-1)'}
                  colorScheme="purple"
                  size="lg"
                  max={currentAttunement.maxGraviton}
                  value={currentAttunement.currentGraviton}
                />
              </Flex>
            </Box>
            <Box>
              <IconButton
                borderRadius={'3xl'}
                size="md"
                colorScheme="blackAlpha"
                aria-label="Reset Attunement"
                icon={<CloseIcon color={'white'} />}
                onClick={() => {
                  setCurrentAttunement(defaultAttunementTrackerProps);
                }}
              />
            </Box>
            <Box w="100%">
              <Flex
                w="100%"
                flexDir={'column'}
                h="100%"
                justifyContent={'center'}
              >
                <Progress
                  backgroundColor={'whiteAlpha'}
                  colorScheme="orange"
                  size="lg"
                  max={currentAttunement.maxPhoton}
                  value={currentAttunement.currentPhoton}
                ></Progress>
              </Flex>
            </Box>
            <Box>
              <AttunementButton
                colorScheme="orange"
                text={'P'}
                currentValue={currentAttunement.currentPhoton}
                maxValue={currentAttunement.maxPhoton}
                setCurrentValue={() =>
                  setCurrentAttunement({
                    ...currentAttunement,
                    currentGraviton: 0,
                    currentPhoton: Math.min(
                      currentAttunement.currentPhoton + 1,
                      currentAttunement.maxPhoton
                    ),
                  })
                }
              />
            </Box>
          </Flex>
        ) : (
          <BasicLoader />
        )
      }
    />
  );
}
