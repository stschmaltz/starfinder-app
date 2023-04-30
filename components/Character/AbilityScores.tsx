import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { theme } from '../../styles/theme';
import {
  AbilityScoreModifiersObject,
  AbilityScoresObject,
} from '../../types/character';

function AbilityScores({
  abilityScores,
  abilityScoreModifiers,
}: {
  abilityScores: AbilityScoresObject;
  abilityScoreModifiers: AbilityScoreModifiersObject;
}) {
  return (
    <Box borderRadius={12} p={4} bgColor={theme.colors.brandPrimary['50']}>
      <Text as="b" fontSize="md">
        Ability Scores
      </Text>
      <Flex justifyContent={'space-between'}>
        <Box>
          Str: {abilityScores.str} ({abilityScoreModifiers.strMod})
        </Box>
        <Box>
          Dex: {abilityScores.dex} ({abilityScoreModifiers.dexMod})
        </Box>
        <Box>
          Con: {abilityScores.con} ({abilityScoreModifiers.conMod})
        </Box>
        <Box>
          Int: {abilityScores.int} ({abilityScoreModifiers.intMod})
        </Box>
        <Box>
          Wis: {abilityScores.wis} ({abilityScoreModifiers.wisMod})
        </Box>
        <Box>
          Cha: {abilityScores.cha}({abilityScoreModifiers.chaMod})
        </Box>
      </Flex>
    </Box>
  );
}

export default AbilityScores;
