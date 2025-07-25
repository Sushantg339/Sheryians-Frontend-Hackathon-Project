import React, { useContext, useRef } from "react";
import ProductCard from "./ProductCard";
import { productContext } from "../Context/ProductContext";

const HomeProductSection = () => {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  const { products } = useContext(productContext);

  return (
    <div className="bg-zinc-400 rounded-4xl">
        <h1 className="relative text-5xl pt-10 px-10 w-full">Top Picks for you</h1>
      <section className="relative py-10 w-full">
        <button
          onClick={scrollLeft}
          className="hidden md:flex items-center justify-center absolute left-5 cursor-pointer top-1/2 -translate-y-1/2 z-10 text-3xl bg-white text-black w-12 h-12 rounded-full shadow-md hover:bg-black hover:text-white transition-all duration-300"
        >
          <i className="ri-arrow-left-s-line"></i>
        </button>

        <div
          ref={scrollRef}
          className="flex gap-5 md:gap-10 overflow-x-auto lg:overflow-x-hidden scroll-smooth px-4 md:px-10 py-4 no-scrollbar"
        >
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="hidden md:flex items-center cursor-pointer justify-center absolute right-5 top-1/2 -translate-y-1/2 z-10 text-3xl bg-white text-black w-12 h-12 rounded-full shadow-md hover:bg-black hover:text-white transition-all duration-300"
        >
          <i className="ri-arrow-right-s-line"></i>
        </button>
      </section>
    </div>
  );
};

export default HomeProductSection;
