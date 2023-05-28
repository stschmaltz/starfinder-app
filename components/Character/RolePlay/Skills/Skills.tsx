import { Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import SkillRow from './SkillRow';
import {
  AbilityScoreModifiersObject,
  SkillObject,
} from '../../../../types/character';
import StatContainer from '../../StatContainer';
import { CharacterContext } from '../../../../context/CharacterContext';

export default function Skills({
  skills,
  abilityScoreModifiersObject,
}: {
  skills: SkillObject[];
  abilityScoreModifiersObject: AbilityScoreModifiersObject;
}) {
  const [characterState, dispatch] = useContext(CharacterContext);

  const updateSkills = (skills: SkillObject[]) => {
    dispatch({
      type: 'UPDATE_CHARACTER',
      payload: { skills },
    });
  };

  return (
    <StatContainer
      header="Skills"
      bodyContent={
        <>
          <Grid
            overflowY={'hidden'}
            h={5}
            rowGap={0}
            alignItems={'center'}
            templateColumns="2fr 1fr 1fr 1fr 1fr"
          >
            <GridItem>
              <Text fontSize={'xs'}>Name</Text>
            </GridItem>
            <GridItem textAlign={'center'}>
              <Text fontSize={'xs'}>Total</Text>
            </GridItem>
            <GridItem textAlign={'center'}>
              <Text fontSize={'xs'}>Ranks</Text>
            </GridItem>
            <GridItem textAlign={'center'}>
              <Text fontSize={'xs'}>Ability</Text>
            </GridItem>
            <GridItem textAlign={'center'}>
              <Text fontSize={'xs'}>Misc Mod</Text>
            </GridItem>
          </Grid>
          <Flex maxH={'55vh'} flexDir={'column'} rowGap={'3.7px'}>
            {skills &&
              skills.map((skill) => (
                <SkillRow
                  key={skill.name}
                  skill={skill}
                  abilityScoreModifiersObject={abilityScoreModifiersObject}
                  onSkillChange={(skill) => {
                    const newSkills = characterState.character.skills.map(
                      (s) => {
                        if (s.name === skill.name) {
                          return { ...skill, skillTotal: undefined };
                        }

                        return s;
                      }
                    );
                    updateSkills(newSkills);
                  }}
                />
              ))}
          </Flex>
        </>
      }
    />
  );
}
