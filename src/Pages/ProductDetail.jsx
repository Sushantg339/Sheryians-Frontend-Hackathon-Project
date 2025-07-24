import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productContext } from "../Context/ProductContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useContext(productContext);
  const product = products.find((p) => p.id === Number(id));
  const  user  = JSON.parse(localStorage.getItem("currentUser"));
  console.log(user)

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

    // Optional: check if product already in cart
    const existingIndex = existingCart.findIndex((item) => item.id === product.id);
    if (existingIndex !== -1) {
      // If already exists, update quantity
      existingCart[existingIndex].quantity += qty;
    } else {
      // Add new item
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
    <div className="min-h-[80vh] px-4 sm:px-10 md:px-20 py-10">
      <nav className="text-sm text-gray-600 mb-6">Home &gt; {product.name}</nav>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2 space-y-4">
          <div className="w-[95%] h-[90vh] lg:h-fit lg:w-[60%] aspect-w-1 aspect-h-1  rounded-lg overflow-hidden">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-[90vh] lg:h-[60vh] object-cover"
            />
          </div>
          <div className="flex gap-4">
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
        
        <div className="lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-3xl font-semibold text-zinc-900">
            {product.name}
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-red-600">
              Rs. {product.price}
            </span>
            <span className="line-through text-gray-400">
              Rs. {Math.floor(product.price * 1.15)}
            </span>
          </div>

          <div className=" p-4 border rounded-md space-y-2 text-gray-700">
            <p>
              <strong>Estimated delivery:</strong> 7–8 working days
            </p>
            <p>
              <strong>Returns:</strong> Within 7 days
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setQty((q) => Math.max(q - 1, 1))}
              className="px-4 py-2 bg-gray-200 rounded cursor-pointer"
            >
              −
            </button>
            <span>{qty}</span>
            <button
              onClick={() => setQty((q) => q + 1)}
              className="px-4 py-2 bg-gray-200 rounded cursor-pointer"
            >
              +
            </button>
          </div>

          <div className="flex gap-4">
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

          <details className=" p-4 border rounded-md">
            <summary className="cursor-pointer font-medium">
              Description
            </summary>
            <p className="mt-2 text-gray-700">{product.description}</p>
            <p className="mt-2">
              <strong>Material:</strong> Ceramic / Cotton
            </p>
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
