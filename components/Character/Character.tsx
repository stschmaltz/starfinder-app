import React from 'react';
import BaseDetails from './BaseDetails';
import { CharacterObject } from '../../types/character';

function Character(props: CharacterObject) {
  return (
    <>
      <BaseDetails baseDetails={props.baseDetails} />
    </>
  );
}

export default Character;
