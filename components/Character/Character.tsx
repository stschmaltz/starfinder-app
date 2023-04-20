import React from 'react';
import BaseDetails from './BaseDetails';
import AbilityScores from './AbilityScores';
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
      <AbilityScores abilityScores={props.abilityScores} />
    </>
  );
}

export default Character;
