import type { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement> {
  color: string;
}

const CircleColor = ({ color, ...rest }: IProps) => {
  return (
    <span
      className=" block w-5 h-5 rounded-full cursor-pointer border border-gray-300 dark:border-gray-500 hover:scale-110 transition-transform"
      style={{ backgroundColor: color }}
      {...rest}
    ></span>
  );
};

export default CircleColor;
