import { numberWithCommas } from "./numberWithCommas";

describe("numberWithCommas", () => {
  it("format 0 price number", async () => {
    expect(numberWithCommas(0)).toEqual("0");
  });

  it("format 0 price string", async () => {
    expect(numberWithCommas("0")).toEqual("0");
  });

  it("format 300 price number", async () => {
    expect(numberWithCommas(300)).toEqual("300");
  });

  it("format 300 price string", async () => {
    expect(numberWithCommas("300")).toEqual("300");
  });

  it("format 123456 price number", async () => {
    expect(numberWithCommas(123456)).toEqual("123,456");
  });

  it("format 123456 price string", async () => {
    expect(numberWithCommas("123456")).toEqual("123,456");
  });
});
