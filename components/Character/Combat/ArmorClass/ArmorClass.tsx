import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import ArmorClassRow from './ArmorClassRow';
import {
  AbilityScoreModifiersObject,
  ArmorClassDetailsObject,
} from '../../../../types/character';
import StatContainer from '../../StatContainer';

export default function ArmorClass({
  abilityScoreModifiers,
  armorClassDetails,
}: {
  abilityScoreModifiers: AbilityScoreModifiersObject;
  armorClassDetails: ArmorClassDetailsObject;
}) {
  const totalEnergyAC =
    10 +
    armorClassDetails.eacBonus +
    abilityScoreModifiers.dexMod +
    armorClassDetails.eacMisc;

  const totalKineticAC =
    10 +
    armorClassDetails.kacBonus +
    abilityScoreModifiers.dexMod +
    armorClassDetails.kacMisc;

  const totalCombatManeuvers = 8 + totalEnergyAC;

  return (
    <StatContainer
      header="Armor Class"
      headerContent={
        <ArmorClassRow
          isHeader
          firstColumnContent={'Total'}
          secondColumnContent={'Armor Bonus'}
          thirdColumnContent={'Misc'}
          headerTitle={''}
        />
      }
      bodyContent={
        <Grid
          templateAreas={`"energyAC" "kineticAC" "combatManeuvers"`}
          rowGap="0.5"
          color="blackAlpha.700"
          fontWeight="bold"
          overflowY={'clip'}
        >
          <GridItem area={'energyAC'}>
            <ArmorClassRow
              firstColumnContent={totalEnergyAC.toString()}
              secondColumnContent={armorClassDetails.eacBonus.toString()}
              thirdColumnContent={armorClassDetails.eacMisc.toString()}
              headerTitle={'Energy AC'}
            />
          </GridItem>
          <GridItem area={'kineticAC'}>
            <ArmorClassRow
              firstColumnContent={totalKineticAC.toString()}
              secondColumnContent={armorClassDetails.kacBonus.toString()}
              thirdColumnContent={armorClassDetails.kacMisc.toString()}
              headerTitle={'Kinetic AC'}
            />
          </GridItem>
          <GridItem area={'combatManeuvers'}>
            <ArmorClassRow
              firstColumnContent={totalCombatManeuvers.toString()}
              secondColumnContent={''}
              thirdColumnContent={''}
              headerTitle={'Combat Maneuvers'}
            />
          </GridItem>
        </Grid>
      }
    ></StatContainer>
  );
}
