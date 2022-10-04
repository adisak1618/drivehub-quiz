import { CarType } from "..";

export interface carListDataResponse {
  items: {
    fields: CarType;
  }[];
  total: number;
}
