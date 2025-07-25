import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../context/UserContext";

const Cart = () => {
  const { users } = useContext(userContext);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    if (currentUser?.email) {
      const storedCart =
        JSON.parse(localStorage.getItem(`cart_${currentUser.email}`)) || [];
      setCartItems(storedCart);
    }
  }, []);

  // Save updated cart to localStorage
  const updateCartStorage = (items) => {
    setCartItems(items);
    localStorage.setItem(`cart_${currentUser.email}`, JSON.stringify(items));
  };

  // Remove item from cart
  const removeItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    updateCartStorage(updatedCart);
  };

  // Increase quantity
  const increaseQty = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1;
    updateCartStorage(updatedCart);
  };

  // Decrease quantity
  const decreaseQty = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      updateCartStorage(updatedCart);
    }
  };

  // Calculate total
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-5 min-h-[50vh]">
      <h1 className="text-5xl font-bold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">
          Your cart is missing something interesting.
        </p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center gap-4"
              >
                <div>
                  <img className="h-28 w-24 object-cover rounded" src={item.image} alt={item.name} />
                </div>

                <div className="flex-1 flex flex-col md:flex-row justify-between items-center gap-4 w-full">
                  <div className="flex flex-col items-center md:items-start">
                    <h2 className="font-semibold text-lg">{item.name}</h2>
                    <p className="text-gray-500">₹{item.price}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decreaseQty(index)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      −
                    </button>
                    <span className="font-medium">{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(index)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
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
