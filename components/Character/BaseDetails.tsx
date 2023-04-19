import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { displayCase } from '../../lib/string-helpers';
import { theme } from '../../styles/theme';
import { BaseCharacterDetails } from '../../types/character';

function BaseDetails({ baseDetails }: { baseDetails: BaseCharacterDetails }) {
  return (
    <Box p={4} bgColor={theme.colors.brandPrimary['50']}>
      <Text as="b" fontSize="2xl">
        {baseDetails.name}
      </Text>
      <Flex justifyContent={'space-between'}>
        <Text fontSize="lg">
          Level {baseDetails.level} {displayCase(baseDetails.race)}{' '}
          {displayCase(baseDetails.class)}
        </Text>
        <Box>
          <Text fontSize="lg">
            Speed: <b>{baseDetails.speed}ft </b>
          </Text>
          <Text fontSize="lg">
            Size: <b>{displayCase(baseDetails.size)}</b>
          </Text>
          <Text fontSize="lg">
            Home World: <b>{baseDetails.homeWorld}</b>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

BaseDetails.propTypes = {};

export default BaseDetails;
