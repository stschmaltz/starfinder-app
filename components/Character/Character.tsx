import React from 'react';
import { Box } from '@chakra-ui/react';
import BaseDetails from './BaseDetails';
import AbilityScores from './AbilityScores';
import CharacterTabs from './Tabs';
import { CharacterObject } from '../../types/character';

function Character(props: CharacterObject) {
  if (!props) {
    return;
  }

  return (
    <>
      <BaseDetails
        baseDetails={props.baseDetails}
        healthStats={props.healthStats}
      />
      <Box mt={2}></Box>
      <AbilityScores abilityScores={props.abilityScores} />
      <Box mt={2}></Box>
      <CharacterTabs />
    </>
  );
}

export default Character;
