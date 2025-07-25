import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productContext } from "../Context/ProductContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useContext(productContext);
  const product = products.find((p) => p.id === Number(id));
  const  user  = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate()

  const [qty, setQty] = useState(1);
  const [mainImage, setMainImage] = useState(product?.image);

  const AddToCartHandler = () => {
  if (user) {
    const userEmail = user.email;
    const cartKey = `cart_${userEmail}`;

    const existingCart = JSON.parse(localStorage.getItem(cartKey)) || [];

    const itemToAdd = {
      ...product,
      quantity: qty
    };

    const existingIndex = existingCart.findIndex((item) => item.id === product.id);
    if (existingIndex !== -1) {
      
      existingCart[existingIndex].quantity += qty;
    } else {
      
      existingCart.push(itemToAdd);
    }

    localStorage.setItem(cartKey, JSON.stringify(existingCart));

    alert("Added to cart ✅");
  } else {
    navigate('/login');
  }
};


  if (!product) return <p className="p-10 text-center">Product not found!</p>;

  return (
  <div className="min-h-[80vh] px-4 sm:px-6 md:px-10 lg:px-20 py-10">
    <nav className="text-sm text-gray-600 mb-6">
      Home &gt; {product.name}
    </nav>

    <div className="flex flex-col lg:flex-row gap-10">
      {/* IMAGE SECTION */}
      <div className="lg:w-1/2 flex flex-col items-center lg:items-start space-y-6">
        <div className="w-full sm:w-[80%] md:w-[70%] lg:w-full rounded-lg overflow-hidden">
          <img
            src={mainImage}
            alt={product.name}
            className="w-full max-h-[80vh] object-contain rounded-lg"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => setMainImage(product.image)}
            className="w-20 h-20 border rounded hover:border-black"
          >
            <img
              src={product.image}
              alt="main-thumbnail"
              className="w-full h-full object-cover"
            />
          </button>

          {product.hoverImage && (
            <button
              onClick={() => setMainImage(product.hoverImage)}
              className="w-20 h-20 border rounded hover:border-black"
            >
              <img
                src={product.hoverImage}
                alt="hover-thumbnail"
                className="w-full h-full object-cover"
              />
            </button>
          )}
        </div>
      </div>

      {/* DETAILS SECTION */}
      <div className="lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-3xl font-semibold text-zinc-900">{product.name}</h1>

        <div className="flex items-center gap-4 text-xl sm:text-2xl">
          <span className="font-bold text-red-600">Rs. {product.price}</span>
          <span className="line-through text-gray-400 text-base sm:text-lg">
            Rs. {Math.floor(product.price * 1.15)}
          </span>
        </div>

        {/* Delivery Info */}
        <div className="p-4 border rounded-md space-y-2 text-gray-700 text-sm sm:text-base">
          <p><strong>Estimated delivery:</strong> 7–8 working days</p>
          <p><strong>Returns:</strong> Within 7 days</p>
        </div>

        {/* Quantity */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setQty((q) => Math.max(q - 1, 1))}
            className="px-4 py-2 bg-gray-200 rounded cursor-pointer"
          >
            −
          </button>
          <span className="text-lg font-medium">{qty}</span>
          <button
            onClick={() => setQty((q) => q + 1)}
            className="px-4 py-2 bg-gray-200 rounded cursor-pointer"
          >
            +
          </button>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={AddToCartHandler}
            className="flex-1 bg-black cursor-pointer text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition"
          >
            Add To Cart
          </button>
          <button className="flex-1 bg-red-600 cursor-pointer text-white py-3 rounded-full font-semibold hover:bg-red-700 transition">
            Buy It Now
          </button>
        </div>

        {/* Description */}
        <details className="p-4 border rounded-md text-sm sm:text-base">
          <summary className="cursor-pointer font-medium">Description</summary>
          <p className="mt-2 text-gray-700">{product.description}</p>
          <p className="mt-2"><strong>Material:</strong> Ceramic / Cotton</p>
          <p className="mt-2">
            <strong>Volume:</strong>{" "}
            {product.category === "Funky Mugs" ? "325 ml" : "–"}
          </p>
        </details>
      </div>
    </div>
  </div>
);

};

export default ProductDetail;
