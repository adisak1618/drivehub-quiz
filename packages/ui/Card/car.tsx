import { numberWithCommas } from "common";
import React from "react";

import { BgImg } from "../BgImg";

interface CarCardProps {
  title: string;
  cover: string;
  price: number;
  button?: JSX.Element;
}

export const CarCard = ({ title, cover, price, button }: CarCardProps) => {
  return (
    <div className="flex gap-4 rounded-lg border border-gray-3 overflow-hidden">
      <BgImg className="w-[100px] h-[90px] bg-center bg-cover" src={cover} />
      <div className="flex flex-col justify-center gap-2 flex-1">
        <p className="text-body4 font-semibold text-gray-9 line-clamp-2">
          {title}
        </p>
        <p className="text-body5 text-gray-7 line-clamp-1">
          {numberWithCommas(price)} / Day
        </p>
      </div>
      {button}
    </div>
  );
};
