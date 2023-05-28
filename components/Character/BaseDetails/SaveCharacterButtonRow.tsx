import React from 'react';
import { Button, Flex } from '@chakra-ui/react';

function SaveCharacterButtonRow({
  isDirty,
  saveCharacter,
}: {
  isDirty: boolean;
  saveCharacter: () => void;
}) {
  return (
    <Flex>
      <Button
        size={'md'}
        fontSize={'lg'}
        w={120}
        colorScheme={'accent1'}
        isDisabled={!isDirty}
        onClick={saveCharacter}
        border={'2px'}
        borderColor={'accent1.900'}
      >
        Save
      </Button>
      {/* <Button
        ml={2}
        mb={2}
        colorScheme={'brandSecondary'}
        isDisabled={!isDirty}
        onClick={saveCharacter}
      >
        Reset
      </Button> */}
    </Flex>
  );
}

export default SaveCharacterButtonRow;
