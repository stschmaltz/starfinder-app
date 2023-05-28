import { Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';

export default function AttunementButton(props: {
  currentValue: number;
  maxValue: number;
  text: string;
  setCurrentValue: () => void;
  colorScheme: string;
}) {
  const { currentValue, maxValue, setCurrentValue, text, colorScheme } = props;

  return (
    <Button
      border={'1px'}
      colorScheme={colorScheme}
      bgColor={`${colorScheme}.200`}
      borderColor={`${colorScheme}.600`}
      onClick={setCurrentValue}
      borderRadius={'2xl'}
      size="md"
      h={50}
    >
      <Flex flexDir={'column'}>
        <Text as="b" fontSize={'md'}>
          {text}
        </Text>
        <Text as="b" fontSize={'md'}>
          {currentValue}/{maxValue}
        </Text>
      </Flex>
    </Button>
  );
}
