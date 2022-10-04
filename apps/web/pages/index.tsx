import { Button, Formik } from "ui";

import { CarListing, CartType, CarType } from "../container/booking/carListing";
import { Cart } from "../container/booking/cart";

export interface CartProps {
  cart: CartType[];
}

export default function Web() {
  return (
    <Formik<CartProps>
      initialValues={{
        cart: [],
      }}
      onSubmit={() => {}}
    >
      <div className="container p-4 mx-auto">
        <h1 className="text-center font-mono text-3xl font-bold pt-10">
          Drivehub
        </h1>
        <div className="grid md:grid-cols-5 mt-4 gap-4">
          <CarListing />
          <Cart />
        </div>
      </div>
    </Formik>
  );
}
