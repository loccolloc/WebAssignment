import React, { useState } from 'react';
export default function CartItem() {
    const [quantity, setQuantity] = useState(1);
  
    const decreaseQuantity = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
  
    const increaseQuantity = () => {
      setQuantity(quantity + 1);
    };
  
    return (
      <div className="flex justify-center w-2/5">
        <button
          className="px-4 py-2 font-bold bg-slate-400 hover:bg-slate-500 focus:outline-none transition duration-300 rounded-md"
          onClick={decreaseQuantity}
        >
          -
        </button>
        <input
          className="mx-2 border text-center w-8"
          type="text"
          value={quantity}
          readOnly
        />
        <button
          className="px-4 py-2 font-bold bg-slate-400 hover:bg-slate-500 focus:outline-none transition duration-300 rounded-md"
          onClick={increaseQuantity}
        >
          +
        </button>
      </div>
    );
  }
  