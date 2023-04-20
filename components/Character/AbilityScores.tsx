import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { theme } from '../../styles/theme';
import { AbilityScoresObject } from '../../types/character';

function AbilityScores({
  abilityScores,
}: {
  abilityScores: AbilityScoresObject;
}) {
  const abilityScoreToModifierMap: Record<number, string> = {
    1: '-5',
    2: '-4',
    3: '-4',
    4: '-3',
    5: '-3',
    6: '-2',
    7: '-2',
    8: '-1',
    9: '-1',
    10: '0',
    11: '0',
    12: '+1',
    13: '+1',
    14: '+2',
    15: '+2',
    16: '+3',
    17: '+3',
    18: '+4',
    19: '+4',
    20: '+5',
    21: '+5',
    22: '+6',
    23: '+6',
    24: '+7',
    25: '+7',
    26: '+8',
  };

  return (
    <Box
      borderRadius={12}
      p={4}
      bgColor={theme.colors.brandPrimary['50']}
      mt={4}
    >
      <Text as="b" fontSize="md">
        Ability Scores
      </Text>
      <Flex justifyContent={'space-between'}>
        <Box>
          Str: {abilityScores.str} (
          {abilityScoreToModifierMap[abilityScores.str]})
        </Box>
        <Box>
          Dex: {abilityScores.dex} (
          {abilityScoreToModifierMap[abilityScores.dex]})
        </Box>
        <Box>
          Con: {abilityScores.con} (
          {abilityScoreToModifierMap[abilityScores.con]})
        </Box>
        <Box>
          Int: {abilityScores.int} (
          {abilityScoreToModifierMap[abilityScores.int]})
        </Box>
        <Box>
          Wis: {abilityScores.wis} (
          {abilityScoreToModifierMap[abilityScores.wis]})
        </Box>
        <Box>
          Cha: {abilityScores.cha} (
          {abilityScoreToModifierMap[abilityScores.cha]})
        </Box>
      </Flex>
    </Box>
  );
}

export default AbilityScores;
