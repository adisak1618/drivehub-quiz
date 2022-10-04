import {
  calculateTotalPrice,
  CartType,
  DiscountType,
  numberWithCommas,
} from "common";
import { useState } from "react";
import { Button, Formik, Modal } from "ui";

import { CarListing } from "../container/booking/carListing";
import { Cart } from "../container/booking/cart";

export interface CartProps {
  cart: CartType[];
  discount: DiscountType | null;
}

export default function Web() {
  const [isCartModalOpen, setIsCardModalOpen] = useState(false);
  return (
    <Formik<CartProps>
      initialValues={{
        cart: [],
        discount: null,
      }}
      onSubmit={() => {}}
    >
      {({ values }) => (
        <div className="container p-4 mx-auto">
          <h1 className="text-center font-mono text-3xl font-bold pt-10">
            Drivehub
          </h1>
          <div className="grid md:grid-cols-2 mt-4 gap-4">
            <CarListing />
            <div className="hidden md:block self-start">
              <Cart />
            </div>
          </div>
          <div className="fixed border-t border-gray-3 bg-white md:hidden w-full p-4 left-0 bottom-0">
            <div className="flex">
              <div className="flex-1">{values.cart.length} cars select</div>
              <div className="text-body4">
                <span className="text-gray-9">Total Price </span>
                <span className="text-primary font-bold">
                  ฿ {numberWithCommas(calculateTotalPrice(values.cart))}
                </span>
              </div>
            </div>
            <Button
              className="mt-2"
              fullWidth
              border="rounded"
              color="primary"
              size="md"
              onClick={() => setIsCardModalOpen(true)}
            >
              View Cart Detail
            </Button>
            <Modal
              isOpen={isCartModalOpen}
              title="Cart Detail"
              onClose={() => setIsCardModalOpen(false)}
            >
              <Cart />
            </Modal>
          </div>
        </div>
      )}
    </Formik>
  );
}
