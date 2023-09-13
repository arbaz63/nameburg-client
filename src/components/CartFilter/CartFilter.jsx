import React from "react";
import CartIcon from "../../Images/cartIcon.png";
import ClosedFilters from "../../Images/CloseFilters.png";
import closeCartDrawer from "../../Images/closeCartDrawer.png";

function CartFilter(props) {
  const handleFilterClose = () => {
    props.onClose();
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
      <div className=" px-2 flex justify-between items-center w-[277px] mt-4 bg-white h-10 text-sm font-Montserrat ">
        <div className="pl-2">zylo.com</div>
        <div className="flex items-center gap-2">
          <div>$1000</div>
          <div>
            <img src={closeCartDrawer} alt="" />
          </div>
        </div>
      </div>
      <div className=" px-2 flex justify-between items-center w-[277px] mt-4 bg-white h-10 text-sm font-Montserrat ">
        <div className="pl-2">zylo.me</div>
        <div className="flex items-center gap-2">
          <div>$1000</div>
          <div>
            <img src={closeCartDrawer} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartFilter;
