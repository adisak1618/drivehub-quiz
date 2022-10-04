import axios from "axios";
import { DiscountDataResponse } from "common";
import React from "react";
import { useQuery } from "react-query";
import { Modal } from "ui";

interface DiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiscountModal = ({ isOpen, onClose }: DiscountModalProps) => {
  const { data: discountListData, isLoading } = useQuery<DiscountDataResponse>(
    ["discount_listing"],
    async () => {
      const { data } = await axios.get(
        "https://cdn.contentful.com/spaces/vveq832fsd73/entries?content_type=discount&access_token=VPmo2U661gTnhMVx0pc0-CtahNg_aqS5DuneLtYfO1o"
      );
      return data;
    }
  );

  return (
    <Modal title="Add Your Discount Code" isOpen={isOpen} onClose={onClose}>
      <div>discount</div>
    </Modal>
  );
};
