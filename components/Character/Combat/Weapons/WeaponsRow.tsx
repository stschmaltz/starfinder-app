import React from 'react';
import { Grid, GridItem, Text } from '@chakra-ui/react';

export default function WeaponsRow({
  firstColumnContent,
  headerTitle,
  secondColumnContent,
  thirdColumnContent,
  isHeader = false,
}: {
  isHeader?: boolean;
  headerTitle: string;
  firstColumnContent: string;
  secondColumnContent: string;
  thirdColumnContent: string;
}) {
  return (
    <Grid
      alignItems={isHeader ? 'end' : 'center'}
      templateColumns="1fr 1fr 1fr 1fr"
      templateRows="1fr 1fr"
    >
      <GridItem alignSelf={'center'}>
        <Text
          fontWeight={'bold'}
          textAlign={'left'}
          fontSize={isHeader ? '' : 'md'}
          lineHeight={1}
        >
          {headerTitle}
        </Text>
      </GridItem>
      <GridItem>
        <Text
          fontWeight={isHeader ? 'normal' : 'bold'}
          textAlign={'center'}
          fontSize={isHeader ? 'xs' : 'lg'}
        >
          {firstColumnContent}
        </Text>
      </GridItem>
      <GridItem>
        <Text
          fontWeight={isHeader ? 'normal' : 'normal'}
          lineHeight={isHeader ? 1 : 1.6}
          textAlign={'center'}
          fontSize={isHeader ? 'xs' : 'md'}
        >
          {secondColumnContent}
        </Text>
      </GridItem>
      <GridItem>
        <Text
          fontWeight={isHeader ? 'normal' : 'normal'}
          textAlign={'center'}
          fontSize={isHeader ? 'xs' : 'md'}
        >
          {thirdColumnContent}
        </Text>
      </GridItem>
    </Grid>
  );
}
