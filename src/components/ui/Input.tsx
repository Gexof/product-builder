import type { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: IProps) => {
  return (
    <input
      className="
    w-full
    rounded-lg
    border border-gray-700
    bg-gray-800
    px-3
    py-2.5
    text-sm
    text-white
    shadow-sm
    placeholder:text-gray-500
    transition-colors
    duration-200
    focus:border-indigo-500
    focus:outline-none
    focus:ring-2
    focus:ring-indigo-500/20
    disabled:cursor-not-allowed
    disabled:opacity-50
  "
      {...rest}
    />
  );
};

export default Input;
