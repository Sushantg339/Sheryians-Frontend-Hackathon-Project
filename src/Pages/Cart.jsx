import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../context/UserContext";

const Cart = () => {
  const { users } = useContext(userContext);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Check and load the cart from localStorage per user
    if (currentUser?.email) {
      const storedCart = JSON.parse(localStorage.getItem(`cart_${currentUser.email}`)) || [];
      setCartItems(storedCart);
    }
  }, []);

  const removeItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem(`cart_${currentUser.email}`, JSON.stringify(updatedCart));
  };

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-5 min-h-[50vh]">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li key={index} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
                <div>
                    <img className="h-50 w-45" src={item.image} alt="" />
                </div>
                <div className="flex gap-20 items-between">
                    <div>
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-gray-500">₹{item.price}</p>
                    </div>
                <button
                  onClick={() => removeItem(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                >
                  Remove
                </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-right">
            <h3 className="text-xl font-bold">Total: ₹{totalAmount}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
