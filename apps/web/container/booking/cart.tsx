import React from "react";
import { Button, CarCard, FieldArray, FormikNumberInput, useField } from "ui";

import { CartType } from "./carListing";

interface carListDataResponse {
  items: {
    fields: {
      title: string;
      photo: string;
      price: number;
    };
  }[];
  total: number;
}

export const Cart = () => {
  const [{ value }, _, helper] = useField<CartType[]>("cart");

  return (
    <div className="border border-gray-3 rounded-lg col-span-2 self-start">
      <div className="border-b border-gray-3 p-3 bg-gray-2">
        <p className="text-gray-9 text-body3 font-bold">รายการรถ</p>
      </div>
      <div className="p-3 flex flex-col gap-4">
        <FieldArray
          name="cart"
          render={({ remove }) => (
            <>
              {value.map((cart, index) => (
                <CarCard
                  key={cart.title}
                  title={cart.title}
                  price={cart.price}
                  cover={cart.photo}
                  button={
                    <div className="flex items-center pr-4 gap-2">
                      <FormikNumberInput name={`cart.${index}.amount`} />
                      <Button
                        color="danger"
                        size="sm"
                        onClick={() => remove(index)}
                      >
                        ลบ
                      </Button>
                    </div>
                  }
                />
              ))}
            </>
          )}
        />
        {/* {carListData?.items.map(({ fields: { photo, price, title } }) => (
          <CarCard
            key={title}
            title={title}
            price={price}
            cover={photo}
            button={
              <div className="flex items-center pr-4">
                <FormikNumberInput name="test" />
              </div>
            }
          />
        ))} */}
      </div>
      <div className="border-t border-gray-3 p-4 flex">
        <p className="text-gray-9 text-body4 font-semibold flex-1">Total</p>
        <p className="text-gray-8 text-body4 font-semibold">1200 THB</p>
      </div>
      <div className="border-t border-gray-3 p-4 flex">
        <p className="text-gray-9 text-body4 font-semibold flex-1">Discount</p>
        <p className="text-gray-8 text-body4 font-semibold">1200 THB</p>
      </div>
      <div className="border-t border-gray-3 p-4 flex">
        <p className="text-gray-9 text-body4 font-semibold flex-1">
          Grand Total
        </p>
        <p className="text-gray-8 text-body4 font-semibold">1200 THB</p>
      </div>
    </div>
  );
};