import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Button, CarCard } from "ui";

interface carListDataResponse {
  items: {
    fields: {
      title: string;
      photo: string;
      price: number;
    };
  }[];
  total: number;
}

export const CarListing = () => {
  const { data: carListData, isLoading } = useQuery<carListDataResponse>(
    ["car_listing"],
    async () => {
      const { data } = await axios.get(
        "https://cdn.contentful.com/spaces/vveq832fsd73/entries?content_type=car&access_token=VPmo2U661gTnhMVx0pc0-CtahNg_aqS5DuneLtYfO1o"
      );
      return data;
    }
  );

  return (
    <div className="border border-gray-3 rounded-lg col-span-3">
      <div className="border-b border-gray-3 p-3 bg-gray-2">
        <p className="text-gray-9 text-body3 font-bold">รายการรถ</p>
      </div>
      <div className="p-3 flex flex-col gap-4">
        {carListData?.items.map(({ fields: { photo, price, title } }) => (
          <CarCard
            key={title}
            title={title}
            price={price}
            cover={photo}
            button={
              <div className="flex items-center p-4">
                <Button>Add To Cart</Button>
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
};
