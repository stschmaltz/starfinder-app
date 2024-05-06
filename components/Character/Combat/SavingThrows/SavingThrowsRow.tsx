import React from 'react';
import {
  Grid,
  GridItem,
  NumberInput,
  NumberInputField,
  Text,
} from '@chakra-ui/react';

export default function SavingThrowsRow({
  total,
  name,
  baseBonus,
  miscBonus,
  onBonusChange,
  onMiscChange,
}: {
  name: string;
  total: string;
  baseBonus: string;
  miscBonus: string;
  onBonusChange: (valueAsNumber: number) => void;
  onMiscChange: (valueAsNumber: number) => void;
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
          min={0}
          defaultValue={baseBonus}
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
          min={0}
          defaultValue={miscBonus}
          max={10000}
          onChange={(_, valueAsNumber) => {
            onMiscChange(valueAsNumber);
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
