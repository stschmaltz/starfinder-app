import { Flex, NumberInput, NumberInputField, Text } from '@chakra-ui/react';
import React from 'react';

export default function AbilityScoreRow({
  abilityScoreModifier,
  abilityScoreTitle,
  abilityScoreValue,
  onChange,
}: {
  abilityScoreTitle: string;
  abilityScoreValue: number;
  abilityScoreModifier: number;
  onChange: (valueAsString: string, valueAsNumber: number) => void;
}) {
  return (
    <Flex w={40} alignItems={'center'} flexDir={'column'}>
      <Flex alignItems={'center'}>
        <NumberInput
          variant="unstyled"
          size="14rem"
          min={0}
          defaultValue={abilityScoreValue}
          max={20}
          onChange={onChange}
          w={8}
        >
          <NumberInputField fontWeight={'medium'} textAlign={'center'} p={1} />
        </NumberInput>
        <Text fontWeight={'bold'} fontSize={'lg'}>
          ({abilityScoreModifier > 0 ? '+' : ''}
          {abilityScoreModifier})
        </Text>
      </Flex>

      <Text mt={-2} fontSize={'sm'}>
        {abilityScoreTitle}
      </Text>
    </Flex>
  );
}
