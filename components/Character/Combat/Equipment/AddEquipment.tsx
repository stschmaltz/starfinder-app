import { AddIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
  VStack,
} from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { CharacterContext } from '../../../../context/CharacterContext';
import FormInputField from '../../../Inputs/FormInputField';

export default function AddEquipment() {
  const toast = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [equipment, setEquipment] = useState('');

  const [characterState, dispatch] = useContext(CharacterContext);

  const onClose = () => {
    setIsOpen(false);
  };

  const onAdd = () => {
    if (!equipment) {
      toast({
        title: 'Submission Error.',
        description: 'Enter a equipment.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });

      return;
    }

    dispatch({
      type: 'UPDATE_CHARACTER',
      payload: {
        equipment: [
          ...characterState.character.equipment,
          {
            name: equipment,
            description: '',
            url: '',
          },
        ],
      },
    });

    setEquipment('');
    setIsOpen(false);
  };

  const emptyRequiredFields = () => {
    return !equipment;
  };

  return (
    <>
      <Flex alignItems="center">
        <IconButton
          colorScheme="brandSecondary"
          fontSize="sm"
          onClick={() => setIsOpen(true)}
          w={6}
          h={6}
          borderRadius="50%"
          size="xxs"
          aria-label="add equipment"
          icon={<AddIcon />}
        />
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          outlineColor="brandPrimary.50"
          outline="12px solid"
          mt="40%"
        >
          <ModalHeader ml={5}>Add Equipment</ModalHeader>

          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <FormInputField
                value={equipment}
                onChange={(e) => setEquipment(e.target.value)}
                placeholder="Equipment"
                required
              />
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="brandSecondary" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              disabled={emptyRequiredFields()}
              colorScheme="brandPrimary"
              mr={3}
              onClick={onAdd}
            >
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
