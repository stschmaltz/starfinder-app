import React from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from '@chakra-ui/react';
import Image from 'next/image';
import { AbilityType } from '../../../../types/character';

const abilityTypeToColor = (type: AbilityType) => {
  switch (type) {
    case AbilityType.PHOTON:
      return 'orange.50';
    case AbilityType.GRAVITON:
      return 'purple.100';
    default:
      return 'gray.100';
  }
};

export default function AbilityModal({
  isOpen,
  onClose,
  type,
  url,
  name,
}: {
  isOpen: boolean;
  onClose: () => void;
  type: AbilityType;
  url: string;
  name: string;
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        outlineColor={abilityTypeToColor(type)}
        outline={'12px solid'}
        mt={'40%'}
      >
        <ModalCloseButton />
        <ModalBody>
          <Image src={url} alt={name} width={400} height={400} />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="brandPrimary" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
