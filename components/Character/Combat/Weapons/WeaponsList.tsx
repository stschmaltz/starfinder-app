import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
// import WeaponRow from './WeaponRow';
import Weapon from './Weapon';
import AddWeaponButton from './AddWeapon';
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
  return (
    <StatContainer
      header="Weapons"
      actionContent={<AddWeaponButton />}
      bodyContent={
        <Grid
          gridTemplateRows={`repeat(${weapons.length})`}
          rowGap="0"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          {weapons.map((weapon) => {
            return (
              <GridItem key={weapon.name} mb={1}>
                <Weapon
                  damageBonusStat={weapon.damageBonusStat}
                  level={weapon.level}
                  name={weapon.name}
                  damage={
                    weapon.damageBonusStat
                      ? `${weapon.damage}+${
                          weapon.damageBonusStat
                            ? abilityScoreModifiers[weapon.damageBonusStat]
                            : 0
                        }`
                      : weapon.damage
                  }
                  range={weapon.range}
                  special={weapon.special}
                  ammoUsage={weapon.ammoUsage}
                  critical={weapon.critical}
                  type={weapon.type}
                  hit={weapon.hit}
                />
              </GridItem>
            );
          })}
        </Grid>
      }
    ></StatContainer>
  );
}
