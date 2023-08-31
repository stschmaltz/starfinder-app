import { Flex, Grid, GridItem, Text } from '@chakra-ui/react';
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
        <GridItem key={equipment.name} mb={1}>
          <Equipment equipment={equipment} />
        </GridItem>
      ));
    }
  };

  return (
    <StatContainer
      header="Weapons"
      actionContent={<AddEquipment />}
      bodyContent={
        <Grid
          gridTemplateRows={`repeat(${equipment.length})`}
          rowGap="0"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <Flex justifyContent={'center'} alignItems={'center'} h={45}>
            {renderEquipment()}
          </Flex>
        </Grid>
      }
    ></StatContainer>
  );
}
