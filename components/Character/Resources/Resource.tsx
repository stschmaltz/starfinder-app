import { Button, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useState } from 'react';
import ResourceModal from './ResourceModal';
import { ResourceObject } from '../../../types/character';

export default function Resource({ resource }: { resource: ResourceObject }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ResourceModal
        url={resource.url}
        name={resource.name}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      />
      <Flex w={'80%'} justifyContent={'space-between'}>
        <Text fontWeight={'bold'} flex={1} fontSize={'md'}>
          {resource.name}
        </Text>
        <Text flex={2} fontSize="xs">
          {resource.description}
        </Text>
        <Button
          p={0}
          width={'100%'}
          height={'100%'}
          variant={'unstyled'}
          flex={0.4}
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          <Image
            src={resource.url}
            alt={resource.name}
            width={100}
            height={100}
          />
        </Button>
      </Flex>
    </>
  );
}
