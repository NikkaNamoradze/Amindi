import React from "react";
import { useAppSelector } from "../hooks/hooks";

type IProps = {
  value: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  theme: boolean;
};

export const Input: React.FC<IProps> = ({ theme, value, onChangeInput }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChangeInput}
      className={`w-full p-2 text-lg ${
        theme ? "dark" : "white"
      } text-gray-800 rounded border border-gray-300 focus:outline-none focus:border-blue-500`}
      placeholder="Enter location..."
    />
  );
};
