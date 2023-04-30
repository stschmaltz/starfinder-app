import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import ArmorClass from './ArmorClass/ArmorClass';
import AttunementTracker from './Attunement/AttunementTracker';
import SavingThrows from './SavingThrows';
import StatContainer from '../StatContainer';
import { CharacterObject } from '../../../types/character';

export default function CombatTabContent({
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
                  "equipment attackBonus"`}
        gridTemplateRows={'115px 1fr 1fr 1fr'}
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
        <GridItem borderRadius={'2xl'} bg="brandPrimary.50" area={'armorClass'}>
          <ArmorClass
            abilityScoreModifiers={character.abilityScoreModifiers}
            armorClassDetails={character.armorClassDetails}
          />
        </GridItem>
        <GridItem borderRadius={'2xl'} bg="brandPrimary.50" area={'weapons'}>
          <StatContainer header="Weapons" content={<></>}></StatContainer>
        </GridItem>
        <GridItem borderRadius={'2xl'} bg="brandPrimary.50" area={'abilities'}>
          <StatContainer header="Abilities" content={<></>}></StatContainer>
        </GridItem>
        <GridItem
          borderRadius={'2xl'}
          bg="brandPrimary.50"
          area={'savingThrows'}
        >
          <SavingThrows />
        </GridItem>
        <GridItem
          borderRadius={'2xl'}
          bg="brandPrimary.50"
          area={'attackBonus'}
        >
          <StatContainer header="Attack Bonus" content={<></>}></StatContainer>
        </GridItem>
        <GridItem borderRadius={'2xl'} bg="brandPrimary.50" area={'equipment'}>
          <StatContainer header="Equipment" content={<></>}></StatContainer>
        </GridItem>
      </Grid>
    </Box>
  );
}
