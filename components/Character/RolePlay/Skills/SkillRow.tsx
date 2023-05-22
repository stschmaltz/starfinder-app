import {
  Grid,
  GridItem,
  NumberInput,
  NumberInputField,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import {
  AbilityScoreModifiersObject,
  SkillObject,
} from '../../../../types/character';

export default function SkillRow({
  skill,
  abilityScoreModifiersObject,
}: {
  skill: SkillObject;
  abilityScoreModifiersObject: AbilityScoreModifiersObject;
}) {
  const classBonus = 3;
  const abilityScoreModifierValue =
    abilityScoreModifiersObject[skill.abilityScoreModifiersObject];
  const classBonusValue = skill.ranks && skill.isProficient ? classBonus : 0;

  const skillTotal =
    skill && abilityScoreModifiersObject
      ? skill.ranks +
        abilityScoreModifierValue +
        classBonusValue +
        skill.miscBonus
      : 0;

  return (
    <Grid
      alignItems={'center'}
      justifyContent={'center'}
      overflowY={'hidden'}
      h={7}
      templateColumns="2fr 1fr 1fr 1fr 1fr"
    >
      <GridItem>
        <Text fontWeight={'medium'} fontSize={'md'}>
          {skill.name}
        </Text>
      </GridItem>
      <GridItem fontWeight={'medium'} textAlign={'center'}>
        <Text as="span" textAlign={'center'} w={'32px'} fontSize={'md'}>
          {skillTotal > 0 ? '+' : ''}
          {skillTotal}
        </Text>
      </GridItem>
      <GridItem justifySelf={'center'}>
        <NumberInput
          variant="unstyled"
          size="md"
          min={0}
          defaultValue={skill.ranks}
          max={20}
          onChange={(_, valueAsNumber) => {
            skill.ranks = valueAsNumber;
          }}
          w={8}
        >
          <NumberInputField textAlign={'center'} p={1} />
        </NumberInput>
      </GridItem>
      <GridItem textAlign={'center'}>
        <Text as="span" textAlign={'center'} w={'32px'} fontSize={'sm'}>
          {abilityScoreModifierValue > 0 ? '+' : ''}
          {abilityScoreModifierValue}
        </Text>
      </GridItem>
      <GridItem alignSelf={'center'} justifySelf={'center'}>
        <NumberInput
          variant="unstyled"
          size="md"
          min={0}
          defaultValue={skill.miscBonus}
          max={20}
          onChange={(_, valueAsNumber) => {
            skill.miscBonus = valueAsNumber;
          }}
          w={8}
        >
          <NumberInputField textAlign={'center'} p={1} />
        </NumberInput>
      </GridItem>
    </Grid>
  );
}
