import ProductCard from "./components/ProductCard";
import { productList } from "./data";

function App() {
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 dark:bg-gray-950">
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
    </main>
  );
}

export default App;
