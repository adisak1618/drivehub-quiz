import { CarType } from "..";

export interface CarDataResponse {
  items: {
    fields: CarType;
  }[];
  total: number;
}
