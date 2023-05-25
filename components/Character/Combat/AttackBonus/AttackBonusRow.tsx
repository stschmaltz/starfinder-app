import React from 'react';
import {
  Grid,
  GridItem,
  NumberInput,
  NumberInputField,
  Text,
} from '@chakra-ui/react';

export default function AttackBonusRow({
  total,
  name,
  baseAttackBonus,
  miscAttackBonus,
  onBonusChange,
}: {
  name: string;
  total: string;
  baseAttackBonus: string;
  miscAttackBonus: string;
  onBonusChange: (value: number) => void;
}) {
  return (
    <Grid alignItems={'center'} templateColumns="1fr 1fr 1fr 1fr">
      <GridItem alignSelf={'center'}>
        <Text
          fontWeight={'bold'}
          textAlign={'left'}
          fontSize={'md'}
          lineHeight={1}
        >
          {name}
        </Text>
      </GridItem>
      <GridItem>
        <Text fontWeight={'bold'} textAlign={'center'} fontSize={'lg'}>
          {total}
        </Text>
      </GridItem>
      <GridItem margin={'auto'}>
        <NumberInput
          variant="unstyled"
          size="lg"
          min={0}
          defaultValue={baseAttackBonus}
          max={10000}
          onChange={(_, valueAsNumber) => {
            onBonusChange(valueAsNumber);
          }}
          w={10}
          mr={2}
        >
          <NumberInputField
            fontWeight={'medium'}
            textAlign={'center'}
            fontSize={'md'}
            p={0}
          />
        </NumberInput>
      </GridItem>
      <GridItem margin={'auto'}>
        <NumberInput
          variant="unstyled"
          size="lg"
          min={0}
          defaultValue={miscAttackBonus}
          max={10000}
          onChange={(_, valueAsNumber) => {
            onBonusChange(valueAsNumber);
          }}
          w={10}
          mr={2}
        >
          <NumberInputField
            fontWeight={'medium'}
            textAlign={'center'}
            fontSize={'md'}
            p={0}
          />
        </NumberInput>
      </GridItem>
    </Grid>
  );
}
