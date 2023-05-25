import React from 'react';
import { Grid, GridItem, Text } from '@chakra-ui/react';

export default function AttackBonusRowHeader({
  firstColumnContent,
  secondColumnContent,
  thirdColumnContent,
}: {
  firstColumnContent: string;
  secondColumnContent: string;
  thirdColumnContent: string;
}) {
  return (
    <Grid alignItems={'end'} templateColumns="1fr 1fr 1fr 1fr">
      <GridItem alignSelf={'center'}></GridItem>
      <GridItem>
        <Text fontWeight={'normal'} textAlign={'center'} fontSize={'xs'}>
          {firstColumnContent}
        </Text>
      </GridItem>
      <GridItem>
        <Text fontWeight={'normal'} textAlign={'center'} fontSize={'xs'}>
          {secondColumnContent}
        </Text>
      </GridItem>
      <GridItem>
        <Text fontWeight={'normal'} textAlign={'center'} fontSize={'xs'}>
          {thirdColumnContent}
        </Text>
      </GridItem>
    </Grid>
  );
}
