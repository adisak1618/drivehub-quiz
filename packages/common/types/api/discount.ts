import { DiscountType } from "..";

export interface DiscountDataResponse {
  items: {
    fields: DiscountType;
  }[];
  total: number;
}
