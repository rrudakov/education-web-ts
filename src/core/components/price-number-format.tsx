import React from 'react';
import {default as NumberFormat} from 'react-number-format';

interface PriceNumberFormatProps {
  inputRef: (instance: NumberFormat<any> | null) => void;
  onChange: (e: { target: { name: string; value: string } }) => void;
  name: string;
}

export const PriceNumberFormatComponent: React.FC<PriceNumberFormatProps> = (
  props: PriceNumberFormatProps
) => {
  const { inputRef, onChange, name, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: name,
            value: values.value,
          },
        });
      }}
      isNumericString
      prefix="€ "
    />
  );
};
