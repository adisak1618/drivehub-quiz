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
      <BgImg className="w-[100px] h-[75px] bg-center bg-cover" src={cover} />
      <div className="flex flex-col justify-around flex-1">
        <p className="text-body4 font-semibold text-gray-9">รุ่นรถ: {title}</p>
        <p className="text-body5 text-gray-7">ราคา:{price} / วัน</p>
      </div>
      {button}
    </div>
  );
};
