import { Flex } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import AbilityScoreRow from './AbilityScoreRow';
import { CharacterContext } from '../../../context/CharacterContext';
import {
  AbilityScoreModifiersObject,
  AbilityScoresObject,
} from '../../../types/character';
import StatContainer from '../StatContainer';
import { TYPES } from '../../../container/types';
import { AbilityScoresProviderInterface } from '../../../providers/ability-scores.provider/ability-scores.provider.interface';
import { appContainer } from '../../../container/inversify.config';

function AbilityScores(props: {
  abilityScores: AbilityScoresObject;
  abilityScoreModifiers: AbilityScoreModifiersObject;
}) {
  const [_, dispatch] = useContext(CharacterContext);
  const [abilityScores, setAbilityScores] = useState(props.abilityScores);
  const [abilityScoreModifiers, setAbilityScoreModifiers] = useState(
    props.abilityScoreModifiers
  );
  const abilityScoresProvider =
    appContainer.get<AbilityScoresProviderInterface>(
      TYPES.AbilityScoresProvider
    );

  const updateAbilityScores = (abilityScores: AbilityScoresObject) => {
    const abilityScoreModifiers =
      abilityScoresProvider.getModifiers(abilityScores);
    dispatch({
      type: 'UPDATE_CHARACTER',
      payload: { abilityScores, abilityScoreModifiers },
    });

    setAbilityScores(abilityScores);
    setAbilityScoreModifiers(abilityScoreModifiers);
  };

  return (
    <StatContainer
      header="Ability Scores"
      bodyContent={
        <Flex h={'4vh'} justifyContent={'space-between'}>
          <AbilityScoreRow
            onChange={(_, valueAsNumber) => {
              updateAbilityScores({
                ...abilityScores,
                str: valueAsNumber,
              });
            }}
            abilityScoreTitle="Str"
            abilityScoreModifier={abilityScoreModifiers.strMod}
            abilityScoreValue={abilityScores.str}
          />
          <AbilityScoreRow
            onChange={(_, valueAsNumber) => {
              updateAbilityScores({
                ...abilityScores,
                dex: valueAsNumber,
              });
            }}
            abilityScoreTitle="Dex"
            abilityScoreModifier={abilityScoreModifiers.dexMod}
            abilityScoreValue={abilityScores.dex}
          />
          <AbilityScoreRow
            onChange={(_, valueAsNumber) => {
              updateAbilityScores({
                ...abilityScores,
                con: valueAsNumber,
              });
            }}
            abilityScoreTitle="Con"
            abilityScoreModifier={abilityScoreModifiers.conMod}
            abilityScoreValue={abilityScores.con}
          />
          <AbilityScoreRow
            onChange={(_, valueAsNumber) => {
              updateAbilityScores({
                ...abilityScores,
                int: valueAsNumber,
              });
            }}
            abilityScoreTitle="Int"
            abilityScoreModifier={abilityScoreModifiers.intMod}
            abilityScoreValue={abilityScores.int}
          />
          <AbilityScoreRow
            onChange={(_, valueAsNumber) => {
              updateAbilityScores({
                ...abilityScores,
                wis: valueAsNumber,
              });
            }}
            abilityScoreTitle="Wis"
            abilityScoreModifier={abilityScoreModifiers.wisMod}
            abilityScoreValue={abilityScores.wis}
          />
          <AbilityScoreRow
            onChange={(_, valueAsNumber) => {
              updateAbilityScores({
                ...abilityScores,
                cha: valueAsNumber,
              });
            }}
            abilityScoreTitle="Cha"
            abilityScoreModifier={abilityScoreModifiers.chaMod}
            abilityScoreValue={abilityScores.cha}
          />
        </Flex>
      }
    />
  );
}

export default AbilityScores;
