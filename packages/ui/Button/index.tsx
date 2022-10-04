import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface ButtonStyleProps {
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
  color?: "default" | "primary" | "danger";
  disabled?: boolean;
  border?: "rounded" | "default";
  fullWidth?: boolean;
  className?: string;
}

interface ButtonProps extends ButtonStyleProps {
  children?: JSX.Element | JSX.Element[] | string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: "button" | "submit" | "reset";
}

const ButtonWrapper = styled.button<ButtonStyleProps>(
  ({ color, border, size, disabled, fullWidth }) => [
    // default style
    tw`text-white hover:shadow-sm cursor-pointer`,
    // fullWidth options
    fullWidth && tw`w-full`,
    // default style
    color === "default" &&
      disabled === false &&
      tw`bg-gray-3 hover:bg-gray-4 text-gray-9`,
    color === "default" &&
      disabled === true &&
      tw`bg-gray-2 text-gray-4 cursor-auto`,

    // color primary

    color === "primary" && disabled === false && tw`bg-primary`,
    color === "primary" &&
      disabled === true &&
      tw`bg-gray-3 text-white cursor-auto`,
    color === "danger" && disabled === false && tw`bg-red-500`,
    color === "danger" &&
      disabled === true &&
      tw`bg-red-300 text-white cursor-auto`,
    // variant style

    // border style
    border === "default" && tw`rounded-lg`,
    border === "rounded" && tw`rounded-full`,
    // size style
    size === "sm" && tw`px-3 py-[5px] text-body5`,
    size === "md" && tw`px-[22px] py-2 text-body3`,
    size === "lg" && tw`px-6 py-2 text-body2`,
    size === "xl" && tw`px-[26px] py-2.5 text-body1`,
    size === "xxl" && tw`px-7 py-[13px] text-body1`,
  ]
);

export const Button = ({
  children,
  size = "sm",
  color = "default",
  border = "default",
  disabled = false,
  fullWidth = false,
  className,
  onClick,
  type,
}: ButtonProps) => (
  <ButtonWrapper
    type={type}
    onClick={onClick}
    className={className}
    size={size}
    color={color}
    border={border}
    disabled={disabled}
    fullWidth={fullWidth}
  >
    <div className="flex w-full items-center justify-center gap-1 text-center">
      {children}
    </div>
  </ButtonWrapper>
);
