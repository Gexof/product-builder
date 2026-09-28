import { useState, type ChangeEvent, type SubmitEvent } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { formInputsList, productList } from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import type { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMsg from "./components/ui/ErrorMsg";

function App() {
  const defaultProductObj = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: { name: "", imageURL: "" },
  };

  /* ---------- STATE ---------- */
  const [product, setProduct] = useState<IProduct>(defaultProductObj);

  const [isOpen, setIsOpen] = useState(false);

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });

  /* ---------- HANDLER ---------- */
  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProduct({ ...product, [name]: value });

    setErrors({ ...errors, [name]: "" });
  };

  const submitHandler = (e: SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const { title, description, imageURL, price } = product;

    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
    });

    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");

    console.log(hasErrorMsg);
    console.log(errors);

    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }
  };

  const onCancel = () => {
    setProduct(defaultProductObj);
    closeModal();
  };

  /* ---------- RENDER ---------- */
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const renderFormInputList = formInputsList.map((input) => (
    <div className="flex flex-col mt-2" key={input.id}>
      <label
        htmlFor={input.label}
        className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        {input.label}
      </label>
      <Input
        type={input.type}
        name={input.name}
        id={input.id}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      <ErrorMsg msg={errors[input.name]} />
    </div>
  ));

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 dark:bg-gray-950">
      <Button
        className="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
        onClick={openModal}
      >
        Add
      </Button>

      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
            Our Products
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-400 md:text-base">
            Explore our collection and find the perfect product for you.
          </p>
        </div>

        <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {renderProductList}
        </div>
      </div>

      <Modal isOpen={isOpen} closeModal={closeModal} title="Add a new product">
        <form onSubmit={submitHandler}>
          {renderFormInputList}
          <div className="flex items-center space-x-3 mt-5">
            <Button className="bg-gray-500" onClick={onCancel}>
              Cancel
            </Button>
            <Button className="bg-indigo-700">Submit</Button>
          </div>
        </form>
      </Modal>
    </main>
  );
}

export default App;
