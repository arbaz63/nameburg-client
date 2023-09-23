import React, { useState, useEffect } from "react";
import CartIcon from "../../Images/cartIcon.svg";
import ClosedFilters from "../../Images/blackCross.svg";
import closeCartDrawer from "../../Images/purpleCross.svg";
import { useNavigate } from "react-router-dom";

function CartFilter(props) {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // Function to retrieve cart data from local storage
  const getCartFromLocalStorage = () => {
    const existingCart = localStorage.getItem("cart");
    const cartArray = existingCart ? JSON.parse(existingCart) : [];
    setCart(cartArray);
  };

  // Call the function when the component mounts
  useEffect(() => {
    getCartFromLocalStorage();
  }, []);

  const handleFilterClose = () => {
    props.onClose();
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleCheckoutClick = () => {
    props.onClose();
    navigate("/PaymentDetails");
  };

  return (
    <div className="px-3 py-3 ">
      <div className="flex justify-between">
        <button onClick={handleFilterClose}>
          <img src={ClosedFilters} alt="" />
        </button>
        <div className="flex items-center gap-1">
          <img src={CartIcon} alt="" />
          <div className="text-base font-medium font-Montserrat ">Cart</div>
        </div>
      </div>
      <div className="text-black text-base font-bold font-Montserrat mt-4">
        Domain Names :
      </div>
      {cart.map((item, index) => (
        <div key={index} className="pl-2">
          <div className=" px-2 flex justify-between items-center rounded-md mt-4 bg-white h-10 text-sm font-Montserrat ">
            <div className="pl-2"> {item.name}</div>
            <div className="flex items-center gap-2">
              <div>{item.price}</div>
              <div
                onClick={() => removeFromCart(item.id)}
                className="cursor-pointer"
              >
                <img src={closeCartDrawer} alt="" />
              </div>
            </div>
          </div>
        </div>
      ))}
      {cart.length > 0 && (
        <div className="w-full flex justify-center mt-10">
          <button
            className="bg-bgOne h-[40px] w-fit rounded text-white border border-gray-100 font-Montserrat text-base font-semibold py-1 px-6"
            onClick={handleCheckoutClick}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default CartFilter;
