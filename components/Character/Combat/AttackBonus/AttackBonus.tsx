import { Grid, GridItem } from '@chakra-ui/react';
import React, { useContext } from 'react';
import AttackBonusRow from './AttackBonusRow';
import AttackBonusRowHeader from './AttackBonusRowHeader';
import {
  AbilityScoreModifiersObject,
  AttackBonusDetailsObject,
} from '../../../../types/character';
import StatContainer from '../../StatContainer';
import { CharacterContext } from '../../../../context/CharacterContext';

export default function AttackBonus({
  attackBonusDetails,
  abilityScoreModifiers,
}: {
  attackBonusDetails: AttackBonusDetailsObject;
  abilityScoreModifiers: AbilityScoreModifiersObject;
}) {
  const [_, dispatch] = useContext(CharacterContext);

  const totalMeleeAttack =
    (attackBonusDetails.baseAttackBonus || 0) +
    abilityScoreModifiers.strMod +
    attackBonusDetails.meleeMisc;
  const totalRangedAttack =
    (attackBonusDetails.baseAttackBonus || 0) +
    abilityScoreModifiers.dexMod +
    attackBonusDetails.rangedMisc;
  const totalThrownAttack =
    (attackBonusDetails.baseAttackBonus || 0) +
    abilityScoreModifiers.strMod +
    attackBonusDetails.thrownMisc;

  const updateAttackBonus = (attackBonusDetails: AttackBonusDetailsObject) => {
    dispatch({
      type: 'UPDATE_CHARACTER',
      payload: { attackBonusDetails },
    });
  };

  return (
    <StatContainer
      header="Attack Bonus"
      headerContent={
        <AttackBonusRowHeader
          firstColumnContent={'Total'}
          secondColumnContent={'Base'}
          thirdColumnContent={'Misc'}
        />
      }
      bodyContent={
        <Grid
          templateAreas={`"melee" "ranged" "thrown"`}
          color="blackAlpha.700"
          fontWeight="bold"
          rowGap={0.5}
        >
          <GridItem area={'melee'}>
            <AttackBonusRow
              total={totalMeleeAttack.toString()}
              baseAttackBonus={attackBonusDetails.baseAttackBonus.toString()}
              miscAttackBonus={attackBonusDetails.meleeMisc.toString()}
              name={'Melee'}
              onBonusChange={(bonus) =>
                updateAttackBonus({
                  ...attackBonusDetails,
                  baseAttackBonus: bonus,
                })
              }
            />
          </GridItem>
          <GridItem area={'ranged'}>
            <AttackBonusRow
              total={totalRangedAttack.toString()}
              baseAttackBonus={attackBonusDetails.baseAttackBonus.toString()}
              miscAttackBonus={attackBonusDetails.rangedMisc.toString()}
              name={'Ranged'}
              onBonusChange={(bonus) =>
                updateAttackBonus({
                  ...attackBonusDetails,
                  baseAttackBonus: bonus,
                })
              }
            />
          </GridItem>
          <GridItem area={'thrown'}>
            <AttackBonusRow
              total={totalThrownAttack.toString()}
              baseAttackBonus={attackBonusDetails.baseAttackBonus.toString()}
              miscAttackBonus={attackBonusDetails.thrownMisc.toString()}
              name={'Thrown'}
              onBonusChange={(bonus) =>
                updateAttackBonus({
                  ...attackBonusDetails,
                  baseAttackBonus: bonus,
                })
              }
            />
          </GridItem>
        </Grid>
      }
    ></StatContainer>
  );
}
