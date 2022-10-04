import {
  calculateGrandPrice,
  calculateTotalPrice,
  CartType,
  DiscountType,
  numberWithCommas,
} from "common";
import React, { useState } from "react";
import { Button, CarCard, FieldArray, FormikNumberInput, useField } from "ui";

import { DiscountModal } from "./discountModal";

export const Cart = () => {
  const [isOpenModalDiscount, setIsOpenModalDiscount] = useState(false);
  const [{ value: cart }] = useField<CartType[]>("cart");
  const [{ value: discount }, , discountHelper] = useField<DiscountType | null>(
    "discount"
  );

  const totalPrice = calculateTotalPrice(cart);
  return (
    <div className="border border-gray-3 rounded-lg">
      <div className="border-b border-gray-3 p-3 bg-gray-2">
        <p className="text-gray-9 text-body3 font-bold">รายการรถ</p>
      </div>
      <div className="p-3 flex flex-col gap-4">
        {cart.length === 0 && (
          <div className="text-center text-body6 text-gray-5 py-4">
            Please select your cars
          </div>
        )}
        <FieldArray
          name="cart"
          render={({ remove }) => (
            <>
              {cart.map((cart, index) => (
                <CarCard
                  key={cart.title}
                  title={cart.title}
                  price={cart.price}
                  cover={cart.photo}
                  button={
                    <div className="flex flex-col items-center py-2 pr-2 gap-2">
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
      </div>
      <div className="border-t border-gray-3 p-4 flex">
        <p className="text-gray-9 text-body4 font-semibold flex-1">Total</p>
        <p className="text-gray-8 text-body4 font-semibold">
          ฿ {numberWithCommas(totalPrice)}
        </p>
      </div>
      <div className="border-t border-gray-3 p-4 flex">
        <p className="text-gray-9 text-body4 font-semibold flex-1">Discount</p>
        {discount && (
          <div className="flex gap-1 items-center">
            <p className="text-gray-8 text-body4">
              <span className="font-semibold text-primary">
                ฿ {numberWithCommas(discount.amount)}
              </span>{" "}
              discount from code{" "}
              <span className="font-semibold text-primary">
                {discount.code}
              </span>
            </p>
            <Button onClick={() => discountHelper.setValue(null)}>ลบ</Button>
          </div>
        )}
        {!discount && (
          <Button onClick={() => setIsOpenModalDiscount(true)}>
            Add Your Code
          </Button>
        )}
        <DiscountModal
          isOpen={isOpenModalDiscount}
          onClose={() => setIsOpenModalDiscount(false)}
        />
      </div>
      <div className="border-t border-gray-3 p-4 flex">
        <p className="text-gray-9 text-body4 font-semibold flex-1">
          Grand Total
        </p>
        <p className="text-gray-8 text-body4 font-semibold">
          ฿{" "}
          {numberWithCommas(
            calculateGrandPrice({ totalPrice, discount: discount?.amount || 0 })
          )}
        </p>
      </div>
    </div>
  );
};
