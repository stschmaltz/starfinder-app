import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import SavingThrowsRow from './SavingThrowsRow';
import {
  AbilityScoreModifiersObject,
  SavingThrowsDetailsObject,
} from '../../../../types/character';
import StatContainer from '../../StatContainer';

export default function SavingThrows({
  savingThrowsDetails,
  abilityScoreModifiers,
}: {
  savingThrowsDetails: SavingThrowsDetailsObject;
  abilityScoreModifiers: AbilityScoreModifiersObject;
}) {
  const totalFortitude =
    savingThrowsDetails.fortitudeBaseSave +
    abilityScoreModifiers.conMod +
    savingThrowsDetails.fortitudeMisc;
  const totalReflex =
    savingThrowsDetails.reflexBaseSave +
    abilityScoreModifiers.dexMod +
    savingThrowsDetails.reflexMisc;
  const totalWill =
    savingThrowsDetails.willBaseSave +
    abilityScoreModifiers.wisMod +
    savingThrowsDetails.willMisc;

  return (
    <StatContainer
      header="Saving Throws"
      headerContent={
        <SavingThrowsRow
          isHeader
          firstColumnContent={'Total'}
          secondColumnContent={'Base'}
          thirdColumnContent={'Misc'}
          headerTitle={''}
        />
      }
      bodyContent={
        <Grid
          templateAreas={`"header" "fortitude" "reflex" "will"`}
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <GridItem key={'header'} area={'header'}></GridItem>
          <GridItem area={'fortitude'}>
            <SavingThrowsRow
              firstColumnContent={totalFortitude.toString()}
              secondColumnContent={savingThrowsDetails.fortitudeBaseSave.toString()}
              thirdColumnContent={savingThrowsDetails.fortitudeMisc.toString()}
              headerTitle={'Fortitude'}
            />
          </GridItem>
          <GridItem area={'reflex'}>
            <SavingThrowsRow
              firstColumnContent={totalReflex.toString()}
              secondColumnContent={savingThrowsDetails.reflexBaseSave.toString()}
              thirdColumnContent={savingThrowsDetails.reflexMisc.toString()}
              headerTitle={'Reflex'}
            />
          </GridItem>
          <GridItem area={'will'}>
            <SavingThrowsRow
              firstColumnContent={totalWill.toString()}
              secondColumnContent={savingThrowsDetails.willBaseSave.toString()}
              thirdColumnContent={savingThrowsDetails.willMisc.toString()}
              headerTitle={'Will'}
            />
          </GridItem>
        </Grid>
      }
    ></StatContainer>
  );
}
