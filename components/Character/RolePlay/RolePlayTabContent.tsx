import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

import Skills from './Skills/Skills';
import Languages from './Languages/Languages';
import CarryContainer from './CarryContainer/CarryContainer';
import StatContainer from '../StatContainer';
import { CharacterObject } from '../../../types/character';
import Abilities from '../Combat/Abilities/Abilities';

export default function RolePlayTabContent({
  character,
}: {
  character: CharacterObject;
}) {
  console.log('Role Play Tab', character);

  return (
    <Box>
      <Grid
        templateAreas={`"skills abilities"
                  "skills characterNotes"
                  "skills languages"
                  "skills carry"`}
        gridTemplateRows={'1fr 1fr 0.4fr 0.4fr'}
        gridTemplateColumns={'1fr 1fr'}
        h="60vh"
        rowGap="3"
        columnGap="3"
        color="blackAlpha.700"
      >
        <GridItem area={'skills'}>
          <Skills
            skills={character.skills}
            abilityScoreModifiersObject={character.abilityScoreModifiers}
          />
        </GridItem>
        <GridItem area={'carry'}>
          <CarryContainer />
        </GridItem>
        <GridItem area={'abilities'} maxH={60}>
          <Abilities
            abilities={character.abilities.filter(
              (ability) => ability.type === 'NEUTRAL'
            )}
          />
        </GridItem>
        <GridItem area={'characterNotes'}>
          <StatContainer
            header="Character Notes"
            bodyContent={<></>}
          ></StatContainer>
        </GridItem>
        <GridItem area={'languages'}>
          <Languages languages={character.languages} />
        </GridItem>
      </Grid>
    </Box>
  );
}
