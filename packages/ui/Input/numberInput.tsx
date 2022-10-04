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
    <div className="flex w-full gap-6">
      <div>
        <div
          onClick={() => {
            Number(value) > 0 && onChange((Number(value) - 1).toString());
            onDecrease?.((Number(value) - 1).toString());
          }}
          className="flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full border border-gray-4 bg-white hover:border-gray-5 hover:shadow-sm"
        >
          -
        </div>
      </div>
      <input
        type="number"
        className="h-[44px] w-full rounded-full border border-gray-4 px-4 text-center"
        onChange={numberOnChange}
        value={value}
        min="0"
      />
      <div>
        <div
          onClick={() => {
            onChange((Number(value) + 1).toString());
            onIncrease?.((Number(value) + 1).toString());
          }}
          className="flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full border border-gray-4 bg-white hover:border-gray-5 hover:shadow-sm"
        >
          +
        </div>
      </div>
    </div>
  );
};
