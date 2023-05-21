import { Flex } from '@chakra-ui/react';
import React from 'react';
import { SkillObject } from '../../../../types/character';
import StatContainer from '../../StatContainer';

export default function Skills({ skills }: { skills: SkillObject[] }) {
  return (
    <StatContainer
      header="Skills"
      bodyContent={
        <Flex overflowY="auto" flexDir={'column'} rowGap={1}>
          {skills && skills.map((skill) => <>{skill.name}</>)}
        </Flex>
      }
    />
  );
}
