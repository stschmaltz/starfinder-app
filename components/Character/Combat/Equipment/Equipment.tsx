import React from 'react';
import { EquipmentObject } from '../../../../types/character';

export default function Equipment(props: { equipment: EquipmentObject }) {
  const { equipment } = props;

  return <div>{equipment.name}</div>;
}
