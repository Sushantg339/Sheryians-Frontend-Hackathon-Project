import { useContext, useState } from "react";
import ProductCard from "../components/ProductCard";

import BlurText from "../React bits components/BlurText";
import { productContext } from "../Context/ProductContext";

const categories = [
  "All",
  "T-shirts",
  "Hoodies",
  "Funky Mugs",
];

const BBMerchandise = () => {
  const { products } = useContext(productContext);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const PRODUCTS_PER_PAGE = 9;

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1); 
  };

  return (
    <div className="min-h-screen px-4 md:px-10 py-10">
      <div className="flex justify-center w-full text-center ">
        <BlurText
            text="The Official BB Merchandise"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-6xl mb-8"
        />
      </div>

      <div className="flex gap-15 mt-10">
        <aside className="lg:w-1/5  rounded-lg py-10 bg-[#fafafa] sticky top-24 h-fit mb-10 lg:mb-0 px-4">
          <h2 className="text-2xl font-semibold mb-10 text-zinc-800">
            Categories
          </h2>
          <ul className="space-y-2">
            {categories.map((cat, index) => (
              <li
                key={index}
                onClick={() => handleCategoryChange(cat)}
                className={`text-gray-600 hover:text-black transition cursor-pointer hover:translate-x-5 duration-300 mb-5 ${
                  selectedCategory === cat
                    ? "font-bold text-black translate-x-5"
                    : ""
                }`}
              >
                • {cat}
              </li>
            ))}
          </ul>
        </aside>

        <div className="lg:w-4/5 w-4/ flex flex-col items-center gap-6">
          <div className="w-full flex flex-wrap justify-center gap-3">
            {currentProducts.length > 0 ? (
              currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="text-center text-zinc-600 text-lg">
                No products found in this category.
              </p>
            )}
          </div>

          
          {totalPages > 1 && (
            <div className="flex gap-2 mt-6">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-zinc-200 hover:bg-zinc-300 rounded disabled:opacity-50"
              >
                Prev
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === i + 1
                      ? "bg-black text-white"
                      : "bg-zinc-100 hover:bg-zinc-200"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-zinc-200 hover:bg-zinc-300 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BBMerchandise;
