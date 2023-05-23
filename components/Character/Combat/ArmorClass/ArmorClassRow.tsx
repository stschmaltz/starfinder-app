import React from 'react';
import {
  Grid,
  GridItem,
  NumberInput,
  NumberInputField,
  Text,
} from '@chakra-ui/react';

export default function ArmorClassRow({
  total,
  name,
  armorBonus,
  miscBonus,
  onBonusChange,
}: {
  name: string;
  total: string;
  armorBonus: string;
  miscBonus: string;
  onBonusChange: (value: number) => void;
}) {
  return (
    <Grid alignItems={'center'} templateColumns="2fr 1fr 1fr 1fr">
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
      <GridItem m={'auto'}>
        <NumberInput
          variant="unstyled"
          size="lg"
          min={0}
          defaultValue={armorBonus}
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
            p={1}
          />
        </NumberInput>
      </GridItem>
      <GridItem m={'auto'}>
        <NumberInput
          variant="unstyled"
          size="lg"
          min={0}
          defaultValue={miscBonus}
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
            p={1}
          />
        </NumberInput>
      </GridItem>
    </Grid>
  );
}
