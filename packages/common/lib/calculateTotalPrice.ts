import { CartType } from "../types/cart";

export const calculateTotalPrice = (input: CartType[]) => {
  const totalPrice = input.reduce((total, val) => {
    const amount = val.amount < 0 ? 0 : val.amount;
    const price = val.price < 0 ? 0 : val.price;
    return total + amount * price;
  }, 0);
  return totalPrice;
};
