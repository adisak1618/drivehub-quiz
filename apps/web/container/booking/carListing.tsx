import axios from "axios";
import { CarDataResponse, CartType } from "common";
import React from "react";
import { useQuery } from "react-query";
import { Button, CarCard, useField } from "ui";

export const CarListing = () => {
  const [{ value }, _, helper] = useField<CartType[]>("cart");
  const { data: carListData, isLoading } = useQuery<CarDataResponse>(
    ["car_listing"],
    async () => {
      const { data } = await axios.get(
        "https://cdn.contentful.com/spaces/vveq832fsd73/entries?content_type=car&access_token=VPmo2U661gTnhMVx0pc0-CtahNg_aqS5DuneLtYfO1o"
      );
      return data;
    }
  );

  return (
    <div className="border border-gray-3 rounded-lg col-span-1 mb-[100px]">
      <div className="border-b border-gray-3 p-3 bg-gray-2">
        <p className="text-gray-9 text-body3 font-bold">Car List</p>
      </div>
      <div className="p-3 flex flex-col gap-4">
        {carListData?.items.map(({ fields: { photo, price, title } }) => (
          <CarCard
            key={title}
            title={title}
            price={price}
            cover={photo}
            button={
              <div className="flex items-center pr-4">
                <Button
                  onClick={() =>
                    helper.setValue([
                      ...value,
                      { photo, price, title, amount: 1 },
                    ])
                  }
                  disabled={value.map((item) => item.title).includes(title)}
                >
                  Add To Cart
                </Button>
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
};
