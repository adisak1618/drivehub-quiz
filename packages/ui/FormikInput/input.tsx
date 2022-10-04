import { InputHTMLAttributes } from "react";
import { useField } from "ui";

import { Input } from "../Input/input";

interface FormikNumberInputProps {
  name: string;
}

export const FormikInput = (
  props: FormikNumberInputProps & InputHTMLAttributes<HTMLInputElement>
) => {
  const { name, ...otherProps } = props;
  const [{ value }, meta, helper] = useField<string>(name);
  return (
    <>
      <Input
        {...otherProps}
        value={value}
        onChange={(e) => {
          helper.setTouched(true);
          helper.setValue(e.target.value);
        }}
      />
      {meta.error && meta.touched && (
        <div className="mt-0.5 flex flex-wrap text-red-500">{meta.error}</div>
      )}
    </>
  );
};
