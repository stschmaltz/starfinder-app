import { AddIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';

export default function AddAbilityButton({
  addAbilityFn,
}: {
  addAbilityFn: () => void;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const onAdd = () => {
    addAbilityFn();
    setIsOpen(false);
  };

  return (
    <>
      <Flex alignItems={'center'}>
        <Button
          colorScheme={'brandPrimary'}
          bgColor={'brandPrimary.100'}
          color={'black'}
          variant={'solid'}
          size={'xs'}
          aria-label="add ability"
          rightIcon={<AddIcon w={2} h={2} fontSize={'xs'} />}
          onClick={() => setIsOpen(true)}
        >
          Add
        </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          outlineColor={'brandPrimary.100'}
          outline={'12px solid'}
          mt={'40%'}
        >
          <ModalHeader ml={5}>Add Ability</ModalHeader>

          <ModalCloseButton />
          <ModalBody>
            <Flex mx={'auto'} mb={4} flexDir={'column'} maxWidth={'90%'}>
              <Input placeholder="Ability Name" />
              <Input placeholder="Ability Description" />
              <Input placeholder="Ability Image" />
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="brandSecondary" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="brandPrimary" mr={3} onClick={onAdd}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
