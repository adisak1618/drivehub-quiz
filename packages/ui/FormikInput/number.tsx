import { useField } from "formik";

import { NumberInput, NumberInputProps } from "../Input/numberInput";

interface FormikNumberInputProps {
  name: string;
  onChange?: (value: string) => void;
  onIncrease?: (value: string) => void;
  onDecrease?: (value: string) => void;
}

export const FormikNumberInput = (props: FormikNumberInputProps) => {
  const { name, onChange, onIncrease, onDecrease, ...otherProps } = props;
  const [{ value }, , helper] = useField<string>(name);
  return (
    <NumberInput
      {...otherProps}
      value={value}
      onChange={(value) => {
        helper.setValue(value);
        onChange?.(value);
      }}
      onDecrease={onDecrease}
      onIncrease={onIncrease}
    />
  );
};
