import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
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
        <GridItem overflowY={'auto'} area={'weapons'} minH={'140px'}>
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
        <GridItem area={'hit'}>
          <AttackBonus
            abilityScoreModifiers={character.abilityScoreModifiers}
            attackBonusDetails={character.attackBonusDetails}
          />
        </GridItem>
        <GridItem area={'equipment'}>
          <StatContainer
            header="Equipment"
            bodyContent={
              <Flex justifyContent={'center'} alignItems={'center'} h={50}>
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
    </Box>
  );
}
