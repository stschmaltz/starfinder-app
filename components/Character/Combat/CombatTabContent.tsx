import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import ArmorClass from './ArmorClass/ArmorClass';
import AttunementTracker from './Attunement/AttunementTracker';
import SavingThrows from './SavingThrows/SavingThrows';
import AttackBonus from './AttackBonus/AttackBonus';
import WeaponsList from './Weapons/WeaponsList';
import StatContainer from '../StatContainer';
import { CharacterObject } from '../../../types/character';

export default function CombatTabbodyContent({
  character,
}: {
  character: CharacterObject;
}) {
  return (
    <Box>
      <Grid
        templateAreas={`"attunement savingThrows"
                  "abilities armorClass"
                  "abilities weapons"
                  "equipment hit"`}
        gridTemplateRows={'0.5fr 1fr 1fr 1fr'}
        gridTemplateColumns={'1fr 1fr'}
        h="60vh"
        rowGap="3"
        columnGap="3"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem area={'attunement'}>
          <AttunementTracker />
        </GridItem>
        <GridItem area={'armorClass'}>
          <ArmorClass
            abilityScoreModifiers={character.abilityScoreModifiers}
            armorClassDetails={character.armorClassDetails}
          />
        </GridItem>
        <GridItem overflowY={'auto'} h={'150px'} area={'weapons'}>
          <WeaponsList
            weapons={character.weapons}
            abilityScoreModifiers={character.abilityScoreModifiers}
          />
        </GridItem>
        <GridItem area={'abilities'}>
          <StatContainer header="Abilities" bodyContent={<></>}></StatContainer>
        </GridItem>
        <GridItem area={'savingThrows'}>
          <SavingThrows
            abilityScoreModifiers={character.abilityScoreModifiers}
            savingThrowsDetails={character.savingThrowsDetails}
          />
        </GridItem>
        <GridItem area={'hit'}>
          <AttackBonus
            abilityScoreModifiers={character.abilityScoreModifiers}
            attackBonusDetails={character.attackBonusDetails}
          />
        </GridItem>
        <GridItem area={'equipment'}>
          <StatContainer header="Equipment" bodyContent={<></>}></StatContainer>
        </GridItem>
      </Grid>
    </Box>
  );
}
