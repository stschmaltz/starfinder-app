import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { EquipmentObject } from '../../../../types/character';
import StatContainer from '../../StatContainer';

export default function Equipment(props: { equipment: EquipmentObject[] }) {
  const { equipment } = props;

  return (
    <StatContainer
      header="Equipment"
      bodyContent={
        <Flex justifyContent={'center'} alignItems={'center'} h={45}>
          <Text textAlign={'center'} fontSize={'md'} as="i" color={'gray.600'}>
            You have no equipment
          </Text>
          <div>
            {equipment?.map((equipment) => (
              <span key={equipment.name}>{equipment.name}</span>
            ))}
          </div>
        </Flex>
      }
    ></StatContainer>
  );
}
