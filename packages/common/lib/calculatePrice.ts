import { CartType } from "../types/cart";

export const calculateTotalPrice = (input: CartType[]) => {
  const totalPrice = input.reduce((total, val) => {
    return total + val.amount * val.price;
  }, 0);
  return totalPrice;
};
