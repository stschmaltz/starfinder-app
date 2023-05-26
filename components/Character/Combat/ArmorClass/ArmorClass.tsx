import { Grid, GridItem } from '@chakra-ui/react';
import React, { useContext } from 'react';
import ArmorClassRow from './ArmorClassRow';
import ArmorClassRowHeader from './ArmorClassRowHeader';
import {
  AbilityScoreModifiersObject,
  ArmorClassDetailsObject,
} from '../../../../types/character';
import StatContainer from '../../StatContainer';
import { CharacterContext } from '../../../../context/CharacterContext';

export default function ArmorClass({
  abilityScoreModifiers,
}: {
  abilityScoreModifiers: AbilityScoreModifiersObject;
}) {
  const [characterState, dispatch] = useContext(CharacterContext);

  const { armorClassDetails } = characterState.character;

  const totalEnergyAC =
    10 +
    (armorClassDetails.eacBonus || 0) +
    abilityScoreModifiers.dexMod +
    armorClassDetails.eacMisc;

  const totalKineticAC =
    10 +
    (armorClassDetails.kacBonus || 0) +
    abilityScoreModifiers.dexMod +
    armorClassDetails.kacMisc;

  const totalCombatManeuvers = 8 + totalEnergyAC;

  const updateArmorClassDetails = (
    armorClassDetails: ArmorClassDetailsObject
  ) => {
    dispatch({
      type: 'UPDATE_CHARACTER',
      payload: { armorClassDetails },
    });
  };

  return (
    <StatContainer
      header="Armor Class"
      headerContent={
        <ArmorClassRowHeader
          firstColumnContent={'Total'}
          secondColumnContent={'Armor Bonus'}
          thirdColumnContent={'Misc'}
        />
      }
      bodyContent={
        <Grid
          templateAreas={`"energyAC" "kineticAC" "combatManeuvers"`}
          color="blackAlpha.700"
          fontWeight="bold"
          rowGap={1}
          overflowY="hidden"
        >
          <GridItem area={'energyAC'}>
            <ArmorClassRow
              total={totalEnergyAC.toString()}
              armorBonus={armorClassDetails.eacBonus.toString()}
              miscBonus={armorClassDetails.eacMisc.toString()}
              name={'Energy AC'}
              onBonusChange={(eacBonus) =>
                updateArmorClassDetails({
                  ...armorClassDetails,
                  eacBonus,
                })
              }
            />
          </GridItem>
          <GridItem area={'kineticAC'}>
            <ArmorClassRow
              total={totalKineticAC.toString()}
              armorBonus={armorClassDetails.kacBonus.toString()}
              miscBonus={armorClassDetails.kacMisc.toString()}
              name={'Kinetic AC'}
              onBonusChange={(kacBonus) =>
                updateArmorClassDetails({
                  ...armorClassDetails,
                  kacBonus,
                })
              }
            />
          </GridItem>
          <GridItem area={'combatManeuvers'}>
            <ArmorClassRow
              total={totalCombatManeuvers.toString()}
              armorBonus={''}
              miscBonus={''}
              name={'Combat Maneuvers'}
              onBonusChange={() => {
                return;
              }}
            />
          </GridItem>
        </Grid>
      }
    ></StatContainer>
  );
}
