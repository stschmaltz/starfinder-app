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
  onSkillChange,
}: {
  skill: SkillObject;
  abilityScoreModifiersObject: AbilityScoreModifiersObject;
  onSkillChange: (skill: SkillObject) => void;
}) {
  const classBonus = 3;
  const abilityScoreModifierValue =
    abilityScoreModifiersObject[skill.abilityScoreModifiersObject];
  const classBonusValue = skill.ranks && skill.isProficient ? classBonus : 0;

  const calculateSkillTotal = (input: {
    skillRanks: number;
    miscBonus: number;
    abilityScoreModifierValue?: number;
  }) =>
    abilityScoreModifiersObject
      ? input.skillRanks +
        abilityScoreModifierValue +
        classBonusValue +
        input.miscBonus
      : 0;

  const skillTotal =
    skill &&
    calculateSkillTotal({
      skillRanks: skill.ranks,
      miscBonus: skill.miscBonus,
      abilityScoreModifierValue,
    });

  return (
    <Grid
      alignItems={'center'}
      justifyContent={'center'}
      overflowY={'hidden'}
      templateColumns="2fr 1fr 1fr 1fr 1fr"
    >
      <GridItem>
        <Text fontWeight={'medium'} fontSize={'15px'}>
          {skill.name} {skill.isProficient && '*'}
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
            const newSkill = {
              ...skill,
              ranks: valueAsNumber,
              skillTotal: calculateSkillTotal({
                skillRanks: valueAsNumber,
                miscBonus: skill.miscBonus,
                abilityScoreModifierValue,
              }),
            };
            onSkillChange(newSkill);
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
            const newSkill = {
              ...skill,
              miscBonus: valueAsNumber,
              skillTotal: calculateSkillTotal({
                skillRanks: skill.ranks,
                miscBonus: valueAsNumber,
                abilityScoreModifierValue,
              }),
            };
            onSkillChange(newSkill);
          }}
          w={8}
        >
          <NumberInputField textAlign={'center'} p={1} />
        </NumberInput>
      </GridItem>
    </Grid>
  );
}
