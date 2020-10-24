import React from 'react';
import NumberFormat from 'react-number-format';

interface PriceNumberFormatProps {
  inputRef: (instance: NumberFormat | null) => void;
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
