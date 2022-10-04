import { Button } from "ui";

import { CarListing } from "../container/booking/carListing";

export default function Web() {
  return (
    <div className="container p-4 mx-auto">
      <h1 className="text-center font-mono text-3xl font-bold pt-10">Web</h1>
      <Button>Button</Button>
      <div className="grid md:grid-cols-5 mt-4 gap-4">
        <CarListing />
        <div className="border border-gray-3 rounded-lg col-span-2">
          <div className="border-b border-gray-3 p-3 bg-gray-2">
            <p className="text-gray-9 text-body3 font-bold">ตะกร้าสินค้า</p>
          </div>
          <div className="p-3">body</div>
        </div>
      </div>
    </div>
  );
}
