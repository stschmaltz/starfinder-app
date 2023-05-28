import { Button, Divider, Flex, Text } from '@chakra-ui/react';
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
      <Flex mb={3} w={'85%'} justifyContent={'space-between'}>
        <Text fontWeight={'bold'} flex={1} fontSize={'md'}>
          {resource.name}
        </Text>
        <Text flex={2} fontSize="sm">
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
          ml={2}
        >
          <Image
            src={resource.url}
            alt={resource.name}
            width={100}
            height={100}
          />
        </Button>
      </Flex>
      <Divider
        opacity={0.6}
        borderColor={'brandPrimary.300'}
        mb={3}
        borderBottomWidth={2}
      />
    </>
  );
}
