import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
// import WeaponRow from './WeaponRow';
import Weapon from './Weapon';
import {
  AbilityScoreModifiersObject,
  WeaponObject,
} from '../../../../types/character';
import StatContainer from '../../StatContainer';

export default function WeaponsList({
  abilityScoreModifiers,
  weapons,
}: {
  abilityScoreModifiers: AbilityScoreModifiersObject;
  weapons: WeaponObject[];
}) {
  console.log({ abilityScoreModifiers, weapons });

  return (
    <StatContainer
      header="WeaponsList"
      bodyContent={
        <Grid
          gridTemplateRows={`repeat(${weapons.length}, 1fr)`}
          rowGap="1.5"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          {weapons.map((weapon) => {
            return (
              <GridItem key={weapon.name}>
                <Weapon
                  name={weapon.name}
                  damage={weapon.damage}
                  range={weapon.range}
                  special={weapon.special}
                  ammoUsage={weapon.ammoUsage}
                  critical={weapon.critical}
                  type={weapon.type}
                  hit={weapon.hit.toString()}
                />
              </GridItem>
            );
          })}
        </Grid>
      }
    ></StatContainer>
  );
}
