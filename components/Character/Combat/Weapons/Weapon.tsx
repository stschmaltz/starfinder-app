import React from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/react';
import WeaponRow from './WeaponRow';
import { WeaponObject } from '../../../../types/character';

export default function Weapon({
  hit,
  name,
  special,
  type,
  damage,
  range,
  ammoUsage,
  critical,
}: WeaponObject) {
  return (
    <Accordion defaultIndex={undefined} allowMultiple borderRadius={7} px={2}>
      <AccordionItem
        border={'1px solid'}
        borderColor={'accent1.900'}
        outline={'1px solid'}
        outlineColor={'accent1.900'}
        borderRadius={7}
        p={1}
        py={0.5}
        overflow={'hidden'}
      >
        <AccordionButton p={0}>
          <WeaponRow
            isMainRow
            firstColumn={{
              content: name,
              title: 'name',
            }}
            secondColumn={
              damage
                ? {
                    content: damage,
                    title: 'damage',
                  }
                : undefined
            }
            thirdColumn={
              hit
                ? {
                    content: `${hit > 0 ? '+' : ''}${hit}`,
                    title: 'hit',
                  }
                : undefined
            }
            fourthColumn={
              range
                ? {
                    content: range.toString(),
                    title: 'range',
                  }
                : undefined
            }
          />
          <AccordionIcon fontSize={'xs'} />
        </AccordionButton>

        <AccordionPanel p={0} pr={3}>
          <WeaponRow
            firstColumn={{
              content: type,
              title: 'type',
            }}
            secondColumn={
              ammoUsage
                ? {
                    content: ammoUsage,
                    title: 'ammo',
                  }
                : undefined
            }
            thirdColumn={
              critical
                ? {
                    content: critical,
                    title: 'critical',
                  }
                : undefined
            }
            fourthColumn={
              special
                ? {
                    content: special,
                    title: 'special',
                  }
                : undefined
            }
          />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
