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
      <AccordionItem overflow={'hidden'}>
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
              range
                ? {
                    content: range,
                    title: 'range',
                  }
                : undefined
            }
            fourthColumn={
              hit
                ? {
                    content: hit,
                    title: 'hit',
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
