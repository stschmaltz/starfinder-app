import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { displayCase } from '../../lib/string-helpers';
import { theme } from '../../styles/theme';
import { BaseCharacterDetails, HealthStats } from '../../types/character';

function BaseDetails({
  baseDetails,
  healthStats,
}: {
  baseDetails: BaseCharacterDetails;
  healthStats: HealthStats;
}) {
  return (
    <Box borderRadius={12} p={4} bgColor={theme.colors.brandPrimary['50']}>
      <Text as="b" fontSize="2xl">
        {baseDetails.name}
      </Text>
      <Flex justifyContent={'space-between'}>
        <Text fontSize="lg">
          Level {baseDetails.level} {displayCase(baseDetails.race)}{' '}
          {displayCase(baseDetails.class)}
        </Text>
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
        <Box border={'2px'} borderRadius={4} p={2}>
          <Text fontSize="lg">
            Stamina: {healthStats.currentStamina}/{healthStats.maxStamina}
          </Text>
          <Text fontSize="lg">
            Health: {healthStats.currentHp}/{healthStats.maxHp}
          </Text>
          <Text fontSize="lg">
            Resolve: {healthStats.currentResolve}/{healthStats.maxResolve}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default BaseDetails;
