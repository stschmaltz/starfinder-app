import { Flex, NumberInput, NumberInputField, Text } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { CharacterContext } from '../../../../context/CharacterContext';
import { CarryObject } from '../../../../types/character';
import StatContainer from '../../StatContainer';

export default function CarryContainer({
  maxCarry,
  credits,
  currentCarry,
}: CarryObject) {
  const [_, dispatch] = useContext(CharacterContext);
  const [carry, setCarryObject] = useState<CarryObject>({
    maxCarry,
    credits,
    currentCarry,
  });

  const updateCarryObject = (carryObject: CarryObject) => {
    dispatch({
      type: 'UPDATE_CHARACTER',
      payload: { carry: carryObject },
    });

    setCarryObject(carryObject);
  };

  return (
    <StatContainer
      header="Carry"
      bodyContent={
        <Flex px={8} justifyContent={'space-between'}>
          <Flex
            justifyContent={'center'}
            alignItems={'center'}
            flexDir={'column'}
          >
            <Text textAlign={'center'} fontWeight={'semibold'} fontSize={'xs'}>
              Capacity
            </Text>
            <Flex
              fontWeight={'bold'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <NumberInput
                variant="unstyled"
                size="lg"
                min={0}
                defaultValue={carry.currentCarry}
                max={10000}
                onChange={(_, valueAsNumber) => {
                  updateCarryObject({
                    ...carry,
                    currentCarry: valueAsNumber,
                  });
                }}
                w={10}
                mr={2}
              >
                <NumberInputField
                  fontWeight={'bold'}
                  textAlign={'center'}
                  fontSize={'xl'}
                  p={1}
                />
              </NumberInput>
              /
              <NumberInput
                variant="unstyled"
                size="lg"
                min={0}
                defaultValue={carry.maxCarry}
                max={10000}
                onChange={(_, valueAsNumber) => {
                  updateCarryObject({
                    ...carry,
                    maxCarry: valueAsNumber,
                  });
                }}
                w={10}
              >
                <NumberInputField
                  fontSize={'xl'}
                  fontWeight={'bold'}
                  textAlign={'center'}
                  p={1}
                />
              </NumberInput>
            </Flex>
          </Flex>
          <Flex justifyContent={'center'} flexDir={'column'}>
            <Text fontWeight={'semibold'} textAlign={'center'} fontSize={'xs'}>
              Credits
            </Text>
            <NumberInput
              variant="unstyled"
              size="lg"
              min={0}
              defaultValue={carry.credits}
              max={10000}
              onChange={(_, valueAsNumber) => {
                updateCarryObject({
                  ...carry,
                  credits: valueAsNumber,
                });
              }}
              w={12}
            >
              <NumberInputField
                fontWeight={'bold'}
                fontSize={'xl'}
                textAlign={'center'}
                p={1}
              />
            </NumberInput>
          </Flex>
        </Flex>
      }
    ></StatContainer>
  );
}
