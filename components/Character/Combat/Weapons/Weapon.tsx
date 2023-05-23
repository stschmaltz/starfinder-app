import React from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/react';
import WeaponRow from './WeaponRow';

export default function Weapon({
  hit,
  name,
  special,
  type,
  damage,
  range,
  ammoUsage,
  critical,
}: {
  special?: string;
  name: string;
  damage?: string;
  range?: string;
  ammoUsage?: string;
  critical?: string;
  type: string;
  hit: string;
}) {
  return (
    <Accordion defaultIndex={undefined} allowMultiple>
      <AccordionItem
        py={0.5}
        px={2}
        borderRadius={7}
        overflow={'hidden'}
        border={'1px'}
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
                    content: `${Number(hit) > 0 ? '+' : ''}${hit}`,
                    title: 'hit',
                  }
                : undefined
            }
            fourthColumn={
              range
                ? {
                    content: range,
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
