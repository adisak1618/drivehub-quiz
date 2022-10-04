import React from "react";

export interface NumberInputProps {
  onChange: (value: string) => void;
  value: string;
  onIncrease?: (value: string) => void;
  onDecrease?: (value: string) => void;
}

export const NumberInput = ({
  onChange,
  onIncrease,
  onDecrease,
  value,
}: NumberInputProps) => {
  const numberOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reg = /^$|^[0-9]+$/;
    const newValue = e.target.value;
    if (reg.test(newValue) && Number(newValue) >= 0) {
      onChange(newValue);
    }
  };

  return (
    <div className="flex w-full gap-1">
      <div>
        <div
          onClick={() => {
            Number(value) > 0 && onChange((Number(value) - 1).toString());
            onDecrease?.((Number(value) - 1).toString());
          }}
          className="flex h-[28px] w-[28px] cursor-pointer items-center justify-center rounded-md border border-gray-4 bg-white hover:border-gray-5 hover:shadow-sm"
        >
          -
        </div>
      </div>
      <div className="flex text-center items-center px-2">{value}</div>
      <div>
        <div
          onClick={() => {
            onChange((Number(value) + 1).toString());
            onIncrease?.((Number(value) + 1).toString());
          }}
          className="flex h-[28px] w-[28px] cursor-pointer items-center justify-center rounded-md border border-gray-4 bg-white hover:border-gray-5 hover:shadow-sm"
        >
          +
        </div>
      </div>
    </div>
  );
};
