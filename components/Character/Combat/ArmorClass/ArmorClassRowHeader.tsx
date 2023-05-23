import React from 'react';
import { Grid, GridItem, Text } from '@chakra-ui/react';

export default function ArmorClassRowHeader({
  firstColumnContent,
  secondColumnContent,
  thirdColumnContent,
}: {
  firstColumnContent: string;
  secondColumnContent: string;
  thirdColumnContent: string;
}) {
  return (
    <Grid alignItems={'end'} templateColumns="2fr 1fr 1fr 1fr">
      <GridItem></GridItem>
      <GridItem>
        <Text fontWeight={'normal'} textAlign={'center'} fontSize={'xs'}>
          {firstColumnContent}
        </Text>
      </GridItem>
      <GridItem>
        <Text
          fontWeight={'normal'}
          lineHeight={1}
          textAlign={'center'}
          fontSize={'xs'}
        >
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
