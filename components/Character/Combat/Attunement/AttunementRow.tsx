import { Box, Flex, IconButton, Progress } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import React from 'react';

import AttunementButton from './AttunementButton';
import {
  AttunementTrackerProps,
  defaultAttunementTrackerProps,
} from '../../../../context/AttunementContext';

export default function AttunementRow({
  currentAttunement,
  setCurrentAttunement,
}: {
  currentAttunement: AttunementTrackerProps;
  setCurrentAttunement: (attunement: AttunementTrackerProps) => void;
}) {
  return (
    <Flex
      h={'100%'}
      width={'100%'}
      maxWidth="100%"
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Box>
        <AttunementButton
          colorScheme="graviton"
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
        <Flex w="100%" flexDir={'column'} h="100%" justifyContent={'center'}>
          <Progress
            border={'1px'}
            borderColor={'blackAlpha.300'}
            backgroundColor={'whiteAlpha'}
            transform={'scaleX(-1)'}
            colorScheme="graviton"
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
          border={'1px'}
          borderColor={'blackAlpha.500'}
          aria-label="Reset Attunement"
          icon={<CloseIcon color={'white'} />}
          onClick={() => {
            setCurrentAttunement(defaultAttunementTrackerProps);
          }}
        />
      </Box>
      <Box w="100%">
        <Flex w="100%" flexDir={'column'} h="100%" justifyContent={'center'}>
          <Progress
            border={'1px'}
            borderColor={'blackAlpha.300'}
            backgroundColor={'whiteAlpha'}
            colorScheme="photon"
            size="lg"
            max={currentAttunement.maxPhoton}
            value={currentAttunement.currentPhoton}
          ></Progress>
        </Flex>
      </Box>
      <Box>
        <AttunementButton
          colorScheme="photon"
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
  );
}
