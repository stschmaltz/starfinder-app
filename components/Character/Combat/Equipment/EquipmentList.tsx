import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import AddEquipment from './AddEquipment';
import Equipment from './Equipment';
import { EquipmentObject } from '../../../../types/character';
import StatContainer from '../../StatContainer';

export default function EquipmentList(props: { equipment: EquipmentObject[] }) {
  const { equipment } = props;

  const renderEquipment = () => {
    if (!equipment || equipment.length === 0) {
      return (
        <Text textAlign={'center'} fontSize={'md'} as="i" color={'gray.600'}>
          You have no equipment
        </Text>
      );
    } else {
      return equipment?.map((equipment) => (
        <Equipment key={equipment.name} equipment={equipment} />
      ));
    }
  };

  return (
    <StatContainer
      header="Equipment"
      actionContent={<AddEquipment />}
      bodyContent={
        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'column'}
          maxHeight={'200px'}
        >
          {renderEquipment()}
        </Flex>
      }
    ></StatContainer>
  );
}
