import {
  Box,
  Flex,
  NumberInput,
  NumberInputField,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useCallback, useContext } from 'react';
import HealthDetailRow from './HealthDetailRow';
import SaveCharacterButtonRow from './SaveCharacterButtonRow';
import { displayCase } from '../../../lib/string-helpers';
import { BaseCharacterDetails, HealthStats } from '../../../types/character';
import { CharacterContext } from '../../../context/CharacterContext';

function BaseDetails({
  baseDetails,
  healthStats,
  isCharacterDirty,
  saveCharacter,
}: {
  baseDetails: BaseCharacterDetails;
  healthStats: HealthStats;
  isCharacterDirty: boolean;
  saveCharacter: () => void;
}) {
  const [_characterState, dispatch] = useContext(CharacterContext);

  const updateHealthStats = useCallback(
    (healthStats: HealthStats) => {
      dispatch({
        type: 'UPDATE_CHARACTER',
        payload: { healthStats },
      });
    },
    [dispatch]
  );

  const updateExpEarned = useCallback(
    (expEarned: number) => {
      dispatch({
        type: 'UPDATE_CHARACTER',
        payload: { baseDetails: { ...baseDetails, expEarned } },
      });
    },
    [dispatch, baseDetails]
  );

  const updateLevel = useCallback(
    (level: number) => {
      dispatch({
        type: 'UPDATE_CHARACTER',
        payload: { baseDetails: { ...baseDetails, level } },
      });
    },
    [dispatch, baseDetails]
  );

  return (
    <Box
      p={4}
      borderRadius={'md'}
      boxShadow={'xl'}
      bg="brandPrimary.50"
      border="3px solid"
      borderColor="brandPrimary.900"
      h="18vh"
      mb={2.5}
    >
      <Flex justifyContent={'space-between'}>
        <Flex
          px={3}
          pr={10}
          pb={3}
          borderBottomRightRadius={'md'}
          borderRight={'4px'}
          borderBottom={'4px'}
          borderColor={'brandPrimary.400'}
          bgColor={'brandPrimary.300'}
          fontWeight="bold"
          fontSize={'lg'}
          flexDir={'column'}
          mb={2}
          ml={-4}
          mt={-4}
        >
          <Text as="b" fontSize="2xl">
            {baseDetails.name}
          </Text>
          <Text mt={-2} fontWeight={'medium'} fontSize="lg">
            {displayCase(baseDetails.race)} {displayCase(baseDetails.class)}
          </Text>
        </Flex>
        <SaveCharacterButtonRow
          saveCharacter={saveCharacter}
          isDirty={isCharacterDirty}
        ></SaveCharacterButtonRow>
      </Flex>
      <Flex justifyContent={'space-between'}>
        <Flex flexDir={'column'}>
          <Flex alignItems={'center'}>
            <Text fontWeight={'medium'} mr={1} fontSize="lg">
              Level:
            </Text>
            <NumberInput
              variant="unstyled"
              min={0}
              defaultValue={baseDetails.level}
              max={10000}
              onChange={(_, valueAsNumber) => {
                updateLevel(valueAsNumber);
              }}
              w={4}
            >
              <NumberInputField
                fontWeight={'bold'}
                textAlign={'center'}
                fontSize={'lg'}
                p={0.5}
              />
            </NumberInput>
          </Flex>

          <Flex justifyContent={'flex-start'} alignItems={'center'}>
            <Text fontSize="md">
              <b> Exp Earned:</b>
            </Text>
            <NumberInput
              variant="unstyled"
              size="md"
              min={0}
              defaultValue={baseDetails.expEarned}
              max={100000}
              onChange={(_, valueAsNumber) => {
                updateExpEarned(valueAsNumber);
              }}
              w={14}
            >
              <NumberInputField textAlign={'center'} p={1} />
            </NumberInput>
          </Flex>
        </Flex>
        <Box>
          <Text fontSize="md">
            Speed: <b>{baseDetails.speed}ft </b>
          </Text>
          <Text fontSize="md">
            Size: <b>{displayCase(baseDetails.size)}</b>
          </Text>
          {/* TODO: Add deity to base details */}
          <Text fontSize="md">
            Deity: <b>{'Desna'}</b>
          </Text>
          <Text fontSize="md">
            Home World: <b>{baseDetails.homeWorld}</b>
          </Text>
        </Box>
        <VStack
          spacing={0}
          mt={-3}
          maxW={'250px'}
          borderRadius={4}
          p={2}
          bgColor={'brandPrimary.300'}
        >
          <HealthDetailRow
            title={'Stamina'}
            currentValue={healthStats.currentStamina}
            maxValue={healthStats.maxStamina}
            onCurrentChange={(_, valueAsNumber) => {
              updateHealthStats({
                ...healthStats,
                currentStamina: valueAsNumber,
              });
            }}
            onMaxChange={(_, valueAsNumber) => {
              updateHealthStats({
                ...healthStats,
                maxStamina: valueAsNumber,
              });
            }}
          />
          <HealthDetailRow
            title={'Health'}
            currentValue={healthStats.currentHp}
            maxValue={healthStats.maxHp}
            onCurrentChange={(_, valueAsNumber) => {
              updateHealthStats({
                ...healthStats,
                currentHp: valueAsNumber,
              });
            }}
            onMaxChange={(_, valueAsNumber) => {
              updateHealthStats({
                ...healthStats,
                maxHp: valueAsNumber,
              });
            }}
          />
          <HealthDetailRow
            title={'Resolve'}
            currentValue={healthStats.currentResolve}
            maxValue={healthStats.maxResolve}
            onCurrentChange={(_, valueAsNumber) => {
              updateHealthStats({
                ...healthStats,
                currentResolve: valueAsNumber,
              });
            }}
            onMaxChange={(_, valueAsNumber) => {
              updateHealthStats({
                ...healthStats,
                maxResolve: valueAsNumber,
              });
            }}
          />
        </VStack>
      </Flex>
    </Box>
  );
}

export default BaseDetails;
