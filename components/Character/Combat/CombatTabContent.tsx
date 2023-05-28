import { Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';
import ArmorClass from './ArmorClass/ArmorClass';
import AttunementTracker from './Attunement/AttunementTracker';
import SavingThrows from './SavingThrows/SavingThrows';
import AttackBonus from './AttackBonus/AttackBonus';
import WeaponsList from './Weapons/WeaponsList';
import Abilities from './Abilities/Abilities';
import StatContainer from '../StatContainer';
import { CharacterObject } from '../../../types/character';

export default function CombatTabContent({
  character,
}: {
  character: CharacterObject;
}) {
  return (
    <Grid
      templateAreas={`"attunement savingThrows"
                  "abilities armorClass"
                  "abilities weapons"
                  "abilities weapons"
                  "equipment attackBonus"`}
      gridTemplateRows={'0.5fr 0.8fr 0.8fr 0.2fr 0.8fr'}
      gridTemplateColumns={'1fr 1fr'}
      rowGap="2.5"
      columnGap="2.5"
      color="blackAlpha.700"
    >
      <GridItem area={'attunement'}>
        <AttunementTracker />
      </GridItem>
      <GridItem area={'armorClass'}>
        <ArmorClass abilityScoreModifiers={character.abilityScoreModifiers} />
      </GridItem>
      <GridItem area={'weapons'} h={'210px'}>
        <WeaponsList
          weapons={character.weapons}
          abilityScoreModifiers={character.abilityScoreModifiers}
        />
      </GridItem>
      <GridItem area={'abilities'}>
        <Abilities abilities={character.abilities} />
      </GridItem>
      <GridItem area={'savingThrows'}>
        <SavingThrows
          abilityScoreModifiers={character.abilityScoreModifiers}
          savingThrowsDetails={character.savingThrowsDetails}
        />
      </GridItem>
      <GridItem area={'attackBonus'}>
        <AttackBonus
          abilityScoreModifiers={character.abilityScoreModifiers}
          attackBonusDetails={character.attackBonusDetails}
        />
      </GridItem>
      <GridItem area={'equipment'}>
        <StatContainer
          header="Equipment"
          bodyContent={
            <Flex justifyContent={'center'} alignItems={'center'} h={45}>
              <Text
                textAlign={'center'}
                fontSize={'md'}
                as="i"
                color={'gray.600'}
              >
                You have no equipment
              </Text>
            </Flex>
          }
        ></StatContainer>
      </GridItem>
    </Grid>
  );
}
