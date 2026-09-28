import {
  Field,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { categories } from "../../data";
import type { ICategory } from "../../interfaces";

interface IProps {
  selected: ICategory;
  setSelected: (category: ICategory) => void;
}

const SelectCat = ({ selected, setSelected }: IProps) => {
  return (
    <div className="w-full max-w-md">
      <Field>
        <Label className="text-sm/6 font-medium text-white">Category</Label>

        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-3">
            {/* Button */}
            <ListboxButton
              className={clsx(
                "relative w-full cursor-default rounded-lg",
                "bg-white/5 py-1.5 pl-3 pr-10",
                "text-left text-sm/6 text-white",
                "outline-none",
                "focus:outline-2 focus:-outline-offset-2 focus:outline-white/25",
              )}
            >
              <div className="flex items-center gap-3">
                <img
                  src={selected.imageURL}
                  alt={selected.name}
                  className="size-8 rounded-md object-cover"
                />

                <span className="block truncate">{selected.name}</span>
              </div>

              <ChevronDownIcon
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute right-3 top-1/2
                  size-5
                  -translate-y-1/2
                  fill-white/60
                "
              />
            </ListboxButton>

            {/* Options */}
            <ListboxOptions
              anchor="bottom"
              className="
                z-10 mt-1
                w-[var(--button-width)]
                rounded-lg
                bg-gray-800
                py-1
                text-sm/6
                shadow-lg
                ring-1 ring-white/10
                focus:outline-none
              "
            >
              {categories.map((category) => (
                <ListboxOption
                  key={category.id}
                  value={category}
                  className={clsx(
                    "group relative cursor-default select-none",
                    "py-2 pl-3 pr-10",
                    "text-white",
                    "data-[focus]:bg-white/10",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={category.imageURL}
                      alt={category.name}
                      className="size-8 rounded-md object-cover"
                    />

                    <span className="block truncate group-data-[selected]:font-semibold">
                      {category.name}
                    </span>
                  </div>

                  <CheckIcon
                    aria-hidden="true"
                    className="
                      absolute right-3 top-1/2
                      size-5
                      -translate-y-1/2
                      fill-white
                      group-not-data-selected:hidden
                    "
                  />
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
      </Field>
    </div>
  );
};

export default SelectCat;
