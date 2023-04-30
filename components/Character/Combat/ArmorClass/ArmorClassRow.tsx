import React from 'react';
import { Grid, GridItem, Text } from '@chakra-ui/react';

export default function ArmorClassRow({
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
      templateColumns="2fr 1fr 1fr 1fr"
    >
      <GridItem alignSelf={'center'}>
        <Text
          fontWeight={'bold'}
          textAlign={'left'}
          fontSize={isHeader ? 'xs' : 'lg'}
          lineHeight={1}
        >
          {headerTitle}
        </Text>
      </GridItem>
      <GridItem>
        <Text
          fontWeight={isHeader ? 'normal' : 'bold'}
          textAlign={'center'}
          fontSize={isHeader ? 'sm' : 'xl'}
        >
          {firstColumnContent}
        </Text>
      </GridItem>
      <GridItem>
        <Text
          fontWeight={isHeader ? 'normal' : 'bold'}
          lineHeight={isHeader ? 1 : 1.6}
          textAlign={'center'}
          fontSize={isHeader ? 'sm' : 'lg'}
        >
          {secondColumnContent}
        </Text>
      </GridItem>
      <GridItem>
        <Text
          fontWeight={isHeader ? 'normal' : 'bold'}
          textAlign={'center'}
          fontSize={isHeader ? 'sm' : 'lg'}
        >
          {thirdColumnContent}
        </Text>
      </GridItem>
    </Grid>
  );
}
