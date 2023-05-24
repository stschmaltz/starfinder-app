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
        outlineColor={type === AbilityType.PHOTON ? 'orange.50' : 'purple.100'}
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
