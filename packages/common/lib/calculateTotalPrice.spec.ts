import { calculateGrandPrice } from "./calculateGrandPrice";
import { calculateTotalPrice } from "./calculateTotalPrice";

describe("calculateGrandPrice", () => {
  describe("calculate grand total price have to be correct", () => {
    it("calculate empty cart", async () => {
      const totalPrice = calculateTotalPrice([]);
      const grandPrice = calculateGrandPrice({
        totalPrice,
        discount: 150,
      });
      expect(grandPrice).toEqual(0);
    });

    it("discount is more than price", async () => {
      const totalPrice = calculateTotalPrice([
        {
          photo: "",
          amount: 1,
          price: 150,
          title: "",
        },
      ]);
      const grandPrice = calculateGrandPrice({
        totalPrice,
        discount: 200,
      });
      expect(grandPrice).toEqual(0);
    });

    it("discount is more than price with multiple car with random amount including negative value", async () => {
      // calculateTotalPrice will ignore only cart item that price or amount is negative
      const totalPrice = calculateTotalPrice([
        {
          photo: "",
          amount: -3,
          price: 320,
          title: "",
        },
        {
          photo: "",
          amount: 2,
          price: -100,
          title: "",
        },
        {
          photo: "",
          amount: 9,
          price: 120,
          title: "",
        },
      ]);
      const grandPrice = calculateGrandPrice({
        totalPrice,
        discount: 350,
      });
      expect(grandPrice).toEqual(9 * 120 - 350);
    });
  });
});
