import { Grid, GridItem, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import SavingThrowsRow from './SavingThrowsRow';
import SavingThrowsRowHeader from './SavingThrowsRowHeader';
import {
  AbilityScoreModifiersObject,
  SavingThrowsDetailsObject,
} from '../../../../types/character';
import StatContainer from '../../StatContainer';
import { CharacterContext } from '../../../../context/CharacterContext';
import {
  AttunementMode,
  useAttunement,
} from '../../../../context/AttunementContext';

export default function SavingThrows({
  savingThrowsDetails,
  abilityScoreModifiers,
}: {
  savingThrowsDetails: SavingThrowsDetailsObject;
  abilityScoreModifiers: AbilityScoreModifiersObject;
}) {
  const [_, dispatch] = useContext(CharacterContext);
  const { currentAttunement } = useAttunement();

  const totalFortitude =
    (savingThrowsDetails.fortitudeBaseSave || 0) +
    abilityScoreModifiers.conMod +
    savingThrowsDetails.fortitudeMisc;

  const totalWill =
    (savingThrowsDetails.willBaseSave || 0) +
    abilityScoreModifiers.wisMod +
    savingThrowsDetails.willMisc;

  const reflexAttunementBonus =
    currentAttunement.attunementMode === AttunementMode.PHOTON ? 1 : 0;

  const totalReflex =
    (savingThrowsDetails.reflexBaseSave || 0) +
    abilityScoreModifiers.dexMod +
    savingThrowsDetails.reflexMisc +
    reflexAttunementBonus;

  const updateSavingThrowValues = (
    savingThrowsDetails: SavingThrowsDetailsObject
  ) => {
    dispatch({
      type: 'UPDATE_CHARACTER',
      payload: { savingThrowsDetails },
    });
  };

  return (
    <StatContainer
      header="Saving Throws"
      headerContent={
        <SavingThrowsRowHeader
          firstColumnContent={'Total'}
          secondColumnContent={'Base'}
          thirdColumnContent={'Misc'}
        />
      }
      bodyContent={
        <Grid
          templateAreas={`"header" "fortitude" "reflex" "will"`}
          color="blackAlpha.700"
          fontWeight="bold"
          rowGap={0.5}
          overflowY={'hidden'}
        >
          <GridItem key={'header'} area={'header'}></GridItem>
          <GridItem area={'fortitude'}>
            <SavingThrowsRow
              total={totalFortitude.toString()}
              baseBonus={savingThrowsDetails.fortitudeBaseSave.toString()}
              miscBonus={savingThrowsDetails.fortitudeMisc.toString()}
              name={'Fortitude'}
              onBonusChange={(newBonus) =>
                updateSavingThrowValues({
                  ...savingThrowsDetails,
                  fortitudeBaseSave: newBonus,
                })
              }
              onMiscChange={(newBonus) =>
                updateSavingThrowValues({
                  ...savingThrowsDetails,
                  fortitudeMisc: newBonus,
                })
              }
            />
          </GridItem>
          <GridItem area={'reflex'}>
            <SavingThrowsRow
              total={totalReflex.toString()}
              baseBonus={savingThrowsDetails.reflexBaseSave.toString()}
              miscBonus={savingThrowsDetails.reflexMisc.toString()}
              name={'Reflex'}
              onBonusChange={(newBonus) =>
                updateSavingThrowValues({
                  ...savingThrowsDetails,
                  reflexBaseSave: newBonus,
                })
              }
              onMiscChange={(newBonus) =>
                updateSavingThrowValues({
                  ...savingThrowsDetails,
                  reflexMisc: newBonus,
                })
              }
            />
          </GridItem>
          <GridItem area={'will'}>
            <SavingThrowsRow
              total={totalWill.toString()}
              baseBonus={savingThrowsDetails.willBaseSave.toString()}
              miscBonus={savingThrowsDetails.willMisc.toString()}
              name={'Will'}
              onBonusChange={(newBonus) =>
                updateSavingThrowValues({
                  ...savingThrowsDetails,
                  willBaseSave: newBonus,
                })
              }
              onMiscChange={(newBonus) =>
                updateSavingThrowValues({
                  ...savingThrowsDetails,
                  willMisc: newBonus,
                })
              }
            />
          </GridItem>
          <Text mb={-1} ml={'7.5rem'} fontSize={'xs'}>
            +2 to fear saves
          </Text>
        </Grid>
      }
    ></StatContainer>
  );
}
