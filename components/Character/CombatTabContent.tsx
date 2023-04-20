import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

export default function CombatTabContent() {
  return (
    <Box>
      <Grid
        templateAreas={`"attunement armorClass"
                  "abilities weapons"
                  "abilities attackBonus"
                  "equipment savingThrows"`}
        gridTemplateRows={'80px 1fr 1fr 1fr'}
        h="400px"
        rowGap="2"
        columnGap="4"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="orange.200" area={'attunement'}>
          attunement
        </GridItem>
        <GridItem pl="2" bg="pink.200" area={'armorClass'}>
          armorClass
        </GridItem>
        <GridItem pl="2" bg="green.200" area={'weapons'}>
          weapons
        </GridItem>
        <GridItem pl="2" bg="blue.200" area={'abilities'}>
          abilities
        </GridItem>
        <GridItem pl="2" bg="red.200" area={'savingThrows'}>
          savingThrows
        </GridItem>
        <GridItem pl="2" bg="yellow.200" area={'attackBonus'}>
          attackBonus
        </GridItem>
        <GridItem pl="2" bg="purple.200" area={'equipment'}>
          equipment
        </GridItem>
      </Grid>
    </Box>
  );
}
