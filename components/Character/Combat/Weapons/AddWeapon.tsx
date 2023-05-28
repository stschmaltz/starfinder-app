import React, { useContext, useState } from 'react';
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

import { AddIcon } from '@chakra-ui/icons';
import { CharacterContext } from '../../../../context/CharacterContext';
import {
  AbilityScoreModifiersObject,
  WeaponObject,
} from '../../../../types/character';
import FormInputField from '../../../Inputs/FormInputField';
import FormNumberInputField from '../../../Inputs/FormNumberInputField';
import FormSelectInputField from '../../../Inputs/FormSelectInputField';

export default function AddWeaponButton() {
  const [{ character }, dispatch] = useContext(CharacterContext);
  const [weapon, setWeapon] = useState<Partial<WeaponObject>>({});
  const toast = useToast();
  const [isOpen, setIsOpen] = useState(false);

  const addWeapon = (weapon: Partial<WeaponObject>) => {
    if (isWeaponObject(weapon)) {
      dispatch({
        type: 'UPDATE_CHARACTER',
        payload: {
          weapons: [...character.weapons, weapon],
        },
      });
    } else {
      console.error('Invalid weapon object:', weapon);
    }
  };

  const isWeaponObject = (
    weapon: Partial<WeaponObject>
  ): weapon is WeaponObject => {
    return (
      !!weapon &&
      !!weapon.name &&
      !!weapon.level &&
      !!weapon.type &&
      (!!weapon.hit || weapon.hit === 0) &&
      !!weapon.damage
    );
  };

  const emptyRequiredFields = () => {
    return (
      !weapon.name ||
      !weapon.level ||
      !weapon.type ||
      (!weapon.hit && weapon.hit !== 0) ||
      !weapon.damage
    );
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = () => {
    if (emptyRequiredFields()) {
      toast({
        title: 'Empty Fields',
        description: 'All fields must be filled to submit.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } else {
      addWeapon(weapon);
      setIsOpen(false);
    }
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
          aria-label="add weapon"
          icon={<AddIcon />}
        />
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          outlineColor="brandPrimary.50"
          outline="12px solid"
          m={'auto'}
        >
          <ModalHeader ml={5}>Add Weapon</ModalHeader>

          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <FormInputField
                value={weapon.name}
                onChange={(e) => setWeapon({ ...weapon, name: e.target.value })}
                placeholder="Name"
                required
              />
              <FormNumberInputField
                max={25}
                min={1}
                value={weapon.level}
                onChange={(value) =>
                  setWeapon({ ...weapon, level: Number(value) })
                }
                placeholder="Level"
                required
              />
              <FormInputField
                value={weapon.type}
                onChange={(e) => setWeapon({ ...weapon, type: e.target.value })}
                placeholder="Type"
                required
              />
              <FormNumberInputField
                max={200}
                min={0}
                value={weapon.hit}
                onChange={(_, value) =>
                  setWeapon({ ...weapon, hit: Number(value) })
                }
                placeholder="Hit"
                required
              />
              <FormInputField
                value={weapon.damage}
                onChange={(e) =>
                  setWeapon({ ...weapon, damage: e.target.value })
                }
                placeholder="Damage"
                required
              />
              <FormSelectInputField
                placeholder="Damage Bonus Stat"
                value={weapon.damageBonusStat}
                onChange={(e) =>
                  setWeapon({
                    ...weapon,
                    damageBonusStat:
                      (e.target.value as keyof AbilityScoreModifiersObject) ||
                      undefined,
                  })
                }
                options={[
                  { value: 'strMod', label: 'Strength' },
                  {
                    value: 'dexMod',
                    label: 'Dexterity',
                  },
                  {
                    value: 'conMod',
                    label: 'Constitution',
                  },
                  {
                    value: 'intMod',
                    label: 'Intelligence',
                  },
                  {
                    value: 'wisMod',
                    label: 'Wisdom',
                  },
                  {
                    value: 'chaMod',
                    label: 'Charisma',
                  },
                ]}
              />
              <FormInputField
                value={weapon.ammoUsage}
                onChange={(e) =>
                  setWeapon({ ...weapon, ammoUsage: e.target.value })
                }
                placeholder="Ammo Usage"
              />
              <FormInputField
                value={weapon.critical}
                onChange={(e) =>
                  setWeapon({ ...weapon, critical: e.target.value })
                }
                placeholder="Critical"
              />
              <FormNumberInputField
                max={500}
                min={0}
                value={weapon.range}
                onChange={(value) =>
                  setWeapon({ ...weapon, range: Number(value) })
                }
                placeholder="Range"
              />
              <FormInputField
                value={weapon.special}
                onChange={(e) =>
                  setWeapon({ ...weapon, special: e.target.value })
                }
                placeholder="Special"
              />
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="brandSecondary" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="brandPrimary"
              mr={3}
              onClick={handleSubmit}
              disabled={emptyRequiredFields()}
            >
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
