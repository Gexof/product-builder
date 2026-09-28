interface IProps {
  color: string;
}

const CircleColor = ({ color }: IProps) => {
  return (
    <span
      className=" block w-5 h-5 rounded-full cursor-pointer border border-gray-300 dark:border-gray-500 hover:scale-110 transition-transform"
      style={{ backgroundColor: color }}
    ></span>
  );
};

export default CircleColor;
