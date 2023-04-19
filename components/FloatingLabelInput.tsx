import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

function FloatingLabelInput(props: {
  value: string;
  placeholder: string;
  variant: string;
  colorScheme: string;
  id: string;
  formLabel?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <FormControl variant="floating" id="first-name">
      <Input
        colorScheme={props.colorScheme}
        variant={props.variant}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      {/* It is important that the Label comes after the Control due to css selectors */}
      {props.formLabel && <FormLabel>{props.formLabel}</FormLabel>}
    </FormControl>
  );
}

export default FloatingLabelInput;
