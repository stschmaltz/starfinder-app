import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import AttackBonusRow from './AttackBonusRow';
import {
  AbilityScoreModifiersObject,
  AttackBonusDetailsObject,
} from '../../../../types/character';
import StatContainer from '../../StatContainer';

export default function AttackBonus({
  attackBonusDetails,
  abilityScoreModifiers,
}: {
  attackBonusDetails: AttackBonusDetailsObject;
  abilityScoreModifiers: AbilityScoreModifiersObject;
}) {
  const totalMeleeAttack =
    attackBonusDetails.baseAttackBonus +
    abilityScoreModifiers.strMod +
    attackBonusDetails.meleeMisc;
  const totalRangedAttack =
    attackBonusDetails.baseAttackBonus +
    abilityScoreModifiers.dexMod +
    attackBonusDetails.rangedMisc;
  const totalThrownAttack =
    attackBonusDetails.baseAttackBonus +
    abilityScoreModifiers.strMod +
    attackBonusDetails.thrownMisc;

  return (
    <StatContainer
      header="Attack Bonus"
      headerContent={
        <AttackBonusRow
          isHeader
          firstColumnContent={'Total'}
          secondColumnContent={'Base'}
          thirdColumnContent={'Misc'}
          headerTitle={''}
        />
      }
      bodyContent={
        <Grid
          templateAreas={`"melee" "ranged" "thrown"`}
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <GridItem area={'melee'}>
            <AttackBonusRow
              firstColumnContent={totalMeleeAttack.toString()}
              secondColumnContent={attackBonusDetails.baseAttackBonus.toString()}
              thirdColumnContent={attackBonusDetails.meleeMisc.toString()}
              headerTitle={'Melee'}
            />
          </GridItem>
          <GridItem area={'ranged'}>
            <AttackBonusRow
              firstColumnContent={totalRangedAttack.toString()}
              secondColumnContent={attackBonusDetails.baseAttackBonus.toString()}
              thirdColumnContent={attackBonusDetails.rangedMisc.toString()}
              headerTitle={'Ranged'}
            />
          </GridItem>
          <GridItem area={'thrown'}>
            <AttackBonusRow
              firstColumnContent={totalThrownAttack.toString()}
              secondColumnContent={attackBonusDetails.baseAttackBonus.toString()}
              thirdColumnContent={attackBonusDetails.thrownMisc.toString()}
              headerTitle={'Thrown'}
            />
          </GridItem>
        </Grid>
      }
    ></StatContainer>
  );
}
