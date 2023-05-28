import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

import Skills from './Skills/Skills';
import Languages from './Languages/Languages';
import CarryContainer from './CarryContainer/CarryContainer';
import CharacterNotes from './CharacterNotes/CharacterNotes';
import RolePlayAbilities from './Abilities/RolePlayAbilities';
import { CharacterObject } from '../../../types/character';

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
        gridTemplateRows={'1fr 1fr 0.3fr 0.3fr'}
        gridTemplateColumns={'1fr 1fr'}
        h="63.8vh"
        rowGap="2.5"
        columnGap="2.5"
        color="blackAlpha.700"
      >
        <GridItem area={'skills'}>
          <Skills
            skills={character.skills}
            abilityScoreModifiersObject={character.abilityScoreModifiers}
          />
        </GridItem>
        <GridItem area={'carry'}>
          <CarryContainer
            maxCarry={character.carry.maxCarry}
            currentCarry={character.carry.currentCarry}
            credits={character.carry.credits}
          />
        </GridItem>
        <GridItem area={'abilities'} maxH={60}>
          <RolePlayAbilities
            abilities={character.abilities.filter(
              (ability) => ability.type === 'NEUTRAL'
            )}
          />
        </GridItem>
        <GridItem area={'characterNotes'}>
          <CharacterNotes notes={character.notes} />
        </GridItem>
        <GridItem area={'languages'}>
          <Languages languages={character.languages} />
        </GridItem>
      </Grid>
    </Box>
  );
}
