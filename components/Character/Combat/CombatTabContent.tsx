import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';
import ArmorClass from './ArmorClass/ArmorClass';
import AttunementTracker from './Attunement/AttunementTracker';
import SavingThrows from './SavingThrows/SavingThrows';
import AttackBonus from './AttackBonus/AttackBonus';
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
        <GridItem overflowY={'auto'} minH={'150px'} area={'weapons'}>
          <StatContainer
            header="Weapons"
            content={
              <>
                <Text>hey</Text>
                <Text>hey</Text>
                <Text>hey</Text>
                <Text>hey</Text>
                <Text>hey</Text>
              </>
            }
          ></StatContainer>
        </GridItem>
        <GridItem area={'abilities'}>
          <StatContainer header="Abilities" content={<></>}></StatContainer>
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
          <StatContainer header="Equipment" content={<></>}></StatContainer>
        </GridItem>
      </Grid>
    </Box>
  );
}
