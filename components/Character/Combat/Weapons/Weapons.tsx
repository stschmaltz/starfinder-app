import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import {
  AbilityScoreModifiersObject,
  WeaponObject,
} from '../../../../types/character';
import StatContainer from '../../StatContainer';

export default function Weapons({
  abilityScoreModifiers,
  weapons,
}: {
  abilityScoreModifiers: AbilityScoreModifiersObject;
  weapons: WeaponObject[];
}) {
  console.log({ abilityScoreModifiers, weapons });

  return (
    <StatContainer
      header="Weapons"
      content={
        <Grid
          templateAreas={`"header" "energyAC" "kineticAC" "combatManeuvers"`}
          rowGap="2"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <GridItem key={'header'} area={'header'}></GridItem>
        </Grid>
      }
    ></StatContainer>
  );
}
