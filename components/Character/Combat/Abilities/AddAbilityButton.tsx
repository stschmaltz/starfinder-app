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
import { AbilityObject, AbilityType } from '../../../../types/character';
import FormInputField from '../../../Inputs/FormInputField';
import FormSelectInputField from '../../../Inputs/FormSelectInputField';

export default function AddAbilityButton() {
  const toast = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [abilityName, setAbilityName] = useState('');
  const [abilityDescription, setAbilityDescription] = useState('');
  const [abilityType, setAbilityType] = useState(AbilityType.NEUTRAL);
  const [, dispatch] = useContext(CharacterContext);

  const onClose = () => {
    setIsOpen(false);
  };

  const onAdd = () => {
    if (!abilityName || !abilityDescription || !abilityType) {
      toast({
        title: 'Submission Error.',
        description: 'All fields are required!',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });

      return;
    }

    const newAbility: AbilityObject = {
      name: abilityName,
      description: abilityDescription,
      type: abilityType,
    };

    dispatch({
      type: 'UPDATE_CHARACTER',
      payload: {
        abilities: [newAbility],
      },
    });

    setAbilityName('');
    setAbilityDescription('');
    setAbilityType(AbilityType.NEUTRAL);
    setIsOpen(false);
  };

  const emptyRequiredFields = () => {
    return !abilityName || !abilityDescription || !abilityType;
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
          aria-label="add ability"
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
          <ModalHeader ml={5}>Add Ability</ModalHeader>

          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <FormInputField
                value={abilityName}
                onChange={(e) => setAbilityName(e.target.value)}
                placeholder="Ability Name"
                required
              />
              <FormInputField
                value={abilityDescription}
                onChange={(e) => setAbilityDescription(e.target.value)}
                placeholder="Ability Description"
                required
              />
              <FormSelectInputField
                value={abilityType}
                onChange={(e) => setAbilityType(e.target.value as AbilityType)}
                isRequired
                placeholder="Ability Type"
                options={Object.values(AbilityType).map((abilityType) => ({
                  label: abilityType,
                  value: abilityType,
                }))}
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
