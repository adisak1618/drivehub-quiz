import { calculateTotalPrice } from "./calculateTotalPrice";

describe("calculateTotalPrice", () => {
  describe("calculate price have to be correct", () => {
    it("calculate empty cart", async () => {
      const totalPrice = calculateTotalPrice([]);
      expect(totalPrice).toEqual(0);
    });

    it("calculate cart with 1 car with amount = 1", async () => {
      const totalPrice = calculateTotalPrice([
        {
          photo: "",
          amount: 1,
          price: 150,
          title: "",
        },
      ]);
      expect(totalPrice).toEqual(150 * 1);
    });

    it("calculate cart with 1 car with amount = 3", async () => {
      const totalPrice = calculateTotalPrice([
        {
          photo: "",
          amount: 3,
          price: 120,
          title: "",
        },
      ]);
      expect(totalPrice).toEqual(120 * 3);
    });

    it("calculate multiple car with random amount", async () => {
      const totalPrice = calculateTotalPrice([
        {
          photo: "",
          amount: 3,
          price: 320,
          title: "",
        },
        {
          photo: "",
          amount: 2,
          price: 100,
          title: "",
        },
        {
          photo: "",
          amount: 9,
          price: 120,
          title: "",
        },
      ]);
      expect(totalPrice).toEqual(320 * 3 + 100 * 2 + 9 * 120);
    });

    it("calculate multiple car with random amount including negative value", async () => {
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
      expect(totalPrice).toEqual(9 * 120);
    });
  });
});
