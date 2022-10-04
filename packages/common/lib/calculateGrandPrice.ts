interface GrandPriceProps {
  totalPrice: number;
  discount: number;
}

export const calculateGrandPrice = ({
  discount,
  totalPrice,
}: GrandPriceProps) => {
  const grandPrice = totalPrice - discount;
  if (grandPrice < 0) return 0;
  return grandPrice;
};
