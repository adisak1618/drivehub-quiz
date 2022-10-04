import axios from "axios";
import { DiscountDataResponse, DiscountType } from "common";
import React from "react";
import { useQuery } from "react-query";
import { Button, Form, Formik, FormikInput, Modal, useField } from "ui";

interface DiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiscountModal = ({ isOpen, onClose }: DiscountModalProps) => {
  const [, , discountHelper] = useField<DiscountType | null>("discount");
  const { data: discountListData } = useQuery<DiscountDataResponse>(
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
      <Formik
        initialValues={{
          code: "",
        }}
        onSubmit={(values, helper) => {
          const discount = discountListData?.items.find(
            (item) => item.fields.code === values.code
          );
          if (!discount) {
            helper.setErrors({
              code: "Your code is invalid",
            });
            return;
          }
          discountHelper.setValue({
            amount: discount.fields.amount,
            code: discount.fields.code,
          });
          onClose();
        }}
      >
        <Form>
          <FormikInput name="code" />
          <div className="flex justify-center mt-4">
            <Button size="md" color="primary" type="submit">
              Apply
            </Button>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
};
