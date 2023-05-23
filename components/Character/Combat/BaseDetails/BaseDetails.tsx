import {
  Box,
  Flex,
  NumberInput,
  NumberInputField,
  Text,
} from '@chakra-ui/react';
import React, { useCallback, useContext } from 'react';
import HealthDetailRow from './HealthDetailRow';
import { displayCase } from '../../../../lib/string-helpers';
import { theme } from '../../../../styles/theme';
import { BaseCharacterDetails, HealthStats } from '../../../../types/character';
import { CharacterContext } from '../../../../context/CharacterContext';

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

  return (
    <Box borderRadius={12} p={4} bgColor={theme.colors.brandPrimary['50']}>
      <Text as="b" fontSize="2xl">
        {baseDetails.name}
      </Text>
      <Flex justifyContent={'space-between'}>
        <Flex flexDir={'column'}>
          <Text fontSize="lg">
            {displayCase(baseDetails.race)} {displayCase(baseDetails.class)}
          </Text>
          <Text mr={1} as="b" fontSize="md">
            Level {baseDetails.level}
          </Text>

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
          <Text fontSize="lg">
            Speed: <b>{baseDetails.speed}ft </b>
          </Text>
          <Text fontSize="lg">
            Size: <b>{displayCase(baseDetails.size)}</b>
          </Text>
          <Text fontSize="lg">
            Home World: <b>{baseDetails.homeWorld}</b>
          </Text>
        </Box>
        <Box maxW={'250px'} border={'2px'} borderRadius={4} p={2}>
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
