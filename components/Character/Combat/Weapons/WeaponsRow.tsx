import React from 'react';
import { Grid, GridItem, Text } from '@chakra-ui/react';
import { titleCase } from 'title-case';

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
      templateColumns="2fr 2fr 1fr 1fr"
      templateRows="1fr"
    >
      <GridItem alignSelf={'center'}>
        <Text
          fontWeight={'bold'}
          textAlign={'left'}
          fontSize={isHeader ? 'xs' : 'md'}
          lineHeight={1}
        >
          {titleCase(headerTitle)}
        </Text>
      </GridItem>
      <GridItem>
        <Text
          fontWeight={isHeader ? 'normal' : 'normal'}
          textAlign={'center'}
          fontSize={isHeader ? 'xs' : 'md'}
        >
          {titleCase(firstColumnContent)}
        </Text>
      </GridItem>
      <GridItem>
        <Text
          fontWeight={isHeader ? 'normal' : 'normal'}
          textAlign={'center'}
          fontSize={isHeader ? 'xs' : 'md'}
        >
          {titleCase(secondColumnContent)}
        </Text>
      </GridItem>
      <GridItem>
        <Text
          fontWeight={isHeader ? 'normal' : 'normal'}
          textAlign={'center'}
          fontSize={isHeader ? 'xs' : 'md'}
        >
          {titleCase(thirdColumnContent)}
        </Text>
      </GridItem>
    </Grid>
  );
}
