import React from 'react';
import { Grid, GridItem, Text } from '@chakra-ui/react';
import { titleCase } from 'title-case';

interface Column {
  content: string;
  title?: string;
}

export default function WeaponRow({
  isMainRow,
  firstColumn,
  fourthColumn,
  secondColumn,
  thirdColumn,
}: {
  isMainRow?: boolean;
  firstColumn: Column;
  secondColumn?: Column;
  thirdColumn?: Column;
  fourthColumn?: Column;
}) {
  return (
    <Grid
      w={'100%'}
      alignItems={'center'}
      templateColumns="2fr 2fr 1fr 1fr"
      templateRows="1fr"
    >
      <GridItem alignSelf={'center'} mb={0.5}>
        {firstColumn.title && (
          <Text
            fontWeight={'medium'}
            textAlign={'center'}
            fontSize={'xx-small'}
          >
            {titleCase(firstColumn.title)}
          </Text>
        )}
        <Text
          fontWeight={isMainRow ? 'semibold' : 'normal'}
          textAlign={'left'}
          fontSize={'sm'}
          lineHeight={1}
        >
          {titleCase(firstColumn.content)}
        </Text>
      </GridItem>
      {secondColumn?.content && (
        <GridItem>
          {secondColumn.title && (
            <Text
              fontWeight={'medium'}
              textAlign={'center'}
              fontSize={'xx-small'}
            >
              {titleCase(secondColumn.title)}
            </Text>
          )}
          <Text fontWeight={'normal'} textAlign={'center'} fontSize={'sm'}>
            {titleCase(secondColumn?.content)}
          </Text>
        </GridItem>
      )}
      {thirdColumn?.content && (
        <GridItem>
          {thirdColumn.title && (
            <Text
              fontWeight={'medium'}
              textAlign={'center'}
              fontSize={'xx-small'}
            >
              {titleCase(thirdColumn.title)}
            </Text>
          )}
          <Text fontWeight={'normal'} textAlign={'center'} fontSize={'sm'}>
            {titleCase(thirdColumn?.content)}
          </Text>
        </GridItem>
      )}
      {fourthColumn?.content && (
        <GridItem>
          {fourthColumn.title && (
            <Text
              fontWeight={'medium'}
              textAlign={'center'}
              fontSize={'xx-small'}
            >
              {titleCase(fourthColumn.title)}
            </Text>
          )}
          <Text fontWeight={'normal'} textAlign={'center'} fontSize={'sm'}>
            {titleCase(fourthColumn?.content)}
          </Text>
        </GridItem>
      )}
    </Grid>
  );
}
