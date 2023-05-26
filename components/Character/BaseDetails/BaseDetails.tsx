import {
  Box,
  Flex,
  NumberInput,
  NumberInputField,
  Text,
} from '@chakra-ui/react';
import React, { useCallback, useContext } from 'react';
import HealthDetailRow from './HealthDetailRow';
import { displayCase } from '../../../lib/string-helpers';
import { theme } from '../../../styles/theme';
import { BaseCharacterDetails, HealthStats } from '../../../types/character';
import { CharacterContext } from '../../../context/CharacterContext';

function BaseDetails({
  baseDetails,
  healthStats,
}: {
  baseDetails: BaseCharacterDetails;
  healthStats: HealthStats;
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
    <Box borderRadius={12} p={4} bgColor={theme.colors.brandPrimary['50']}>
      <Flex flexDir={'column'} mb={2}>
        <Text as="b" fontSize="2xl">
          {baseDetails.name}
        </Text>
        <Text mt={-2} fontWeight={'medium'} fontSize="lg">
          {displayCase(baseDetails.race)} {displayCase(baseDetails.class)}
        </Text>
      </Flex>
      <Flex justifyContent={'space-between'}>
        <Flex flexDir={'column'}>
          <Flex alignItems={'center'}>
            <Text fontWeight={'medium'} mr={1} fontSize="md">
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
                fontSize={'md'}
                p={0.5}
              />
            </NumberInput>
          </Flex>

          <Flex justifyContent={'center'} alignItems={'center'}>
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
        <Box mt={-3} maxW={'250px'} border={'2px'} borderRadius={4} p={2}>
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
        </Box>
      </Flex>
    </Box>
  );
}

export default BaseDetails;