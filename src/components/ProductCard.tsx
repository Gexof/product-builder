import type { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/functions";
import CircleColor from "./CircleColor";
import Image from "./Image";
import Button from "./ui/Button";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const { title, description, imageURL, price, category, colors } = product;

  /* ---------- RENDER ---------- */
  const renderProductColors = colors.map((color) => (
    <CircleColor key={color} color={color} />
  ));

  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <Image
          imgURL={imageURL}
          alt={title}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 shadow-sm backdrop-blur-sm dark:bg-gray-900/90">
          <Image
            imgURL={category.imageURL}
            alt={category.name}
            className="h-6 w-6 rounded-full object-cover"
          />

          <span className="text-xs font-medium text-gray-700 dark:text-gray-200">
            {category.name}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-3">
          <h3 className="truncate text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>

          <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
            {txtSlicer(description)}
          </p>
        </div>

        {/* Colors */}
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
            Colors:
          </span>

          {renderProductColors}
        </div>

        {/* Price */}
        <div className="mb-5 flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-800">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
              Price
            </p>

            <span className="text-xl font-bold text-gray-900 dark:text-white">
              ${price}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button className="flex-1 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700">
            Edit
          </Button>

          <Button className="flex-1 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-700">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
