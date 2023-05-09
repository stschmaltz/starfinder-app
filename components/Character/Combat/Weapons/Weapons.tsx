import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import WeaponsRow from './WeaponsRow';
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
      headerContent={
        <WeaponsRow
          isHeader
          headerTitle="name"
          firstColumnContent="damage"
          secondColumnContent="range"
          thirdColumnContent="ammo"
        />
      }
      bodyContent={
        <Grid
          gridTemplateRows={`repeat(${weapons.length}, 1fr)`}
          rowGap="1.5"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <GridItem key={'1'}>
            <WeaponsRow
              headerTitle="Comet Flail"
              firstColumnContent="1d8+6"
              secondColumnContent="10"
              thirdColumnContent="0"
            />
          </GridItem>
          <GridItem key={'2'}>
            <WeaponsRow
              headerTitle="test1"
              firstColumnContent="1d6+5"
              secondColumnContent="75ft"
              thirdColumnContent="20(1)"
            />
          </GridItem>
          <GridItem key={'3'}>
            <WeaponsRow
              headerTitle="test1"
              firstColumnContent="1d6+5"
              secondColumnContent="75ft"
              thirdColumnContent="20(1)"
            />
          </GridItem>
        </Grid>
      }
    ></StatContainer>
  );
}
