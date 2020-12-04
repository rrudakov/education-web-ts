import React from 'react';
import NumberFormat from 'react-number-format';

interface SizeNumberFormatProps {
  inputRef: (instance: NumberFormat | null) => void;
  onChange: (e: { target: { name: string; value: string } }) => void;
  name: string;
}

export const SizeNumberFormatComponent: React.FC<SizeNumberFormatProps> = ({
  inputRef,
  onChange,
  name,
  ...other
}: SizeNumberFormatProps) => {
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
      decimalSeparator={false}
    />
  );
};
