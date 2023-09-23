import React, { useEffect } from "react";
import thank from "../../Images/ThankYou.svg";
import tick from "../../Images/tick.svg";
import ClosedFilters from "../../Images/blackCross.svg";
import Oops from "../../Images/Oops.svg";
import CrossRed from "../../Images/CrossRed.svg";

export const PaymentModel = (props) => {
  console.log(props);

  useEffect(() => {
    if (props.success) {
      localStorage.removeItem("cart");
    }
  }, [props.success]);

  return (
    <div className="w-full h-full">
      <div
        className="flex justify-end mx-3 pt-2 cursor-pointer"
        onClick={props.onClose}
      >
        {/*  eslint-disable-next-line */}
        <img src={ClosedFilters} />
      </div>
      {props.success ? (
        <div className="flex flex-col pt-5 items-center w-full">
          <div className="mb-8">
            {/* eslint-disable-next-line */}
            <img src={tick} />
          </div>
          <div className="mb-8">
            {/* eslint-disable-next-line */}
            <img src={thank} />
          </div>
          <div className="flex justify-between px-10 lg:px-36 w-full mb-4">
            <div>Domains</div>
            <div>Amount</div>
          </div>
          <div className="px-10 lg:px-36 w-full mb-4">
            <hr className="border-b border-gray-300 w-full" />
          </div>
          <div className="flex flex-col justify-between px-10 lg:px-36 w-full mb-4 min-h-[50px] h-[50px] max-h-[50px] overflow-y-scroll">
            {props.domains.map((domain, index) => (
              <div key={index} className="flex justify-between w-full h-full">
                <div>{domain}</div>
                <div>${props.prices[index]}</div>
              </div>
            ))}
          </div>
          <div className="px-10 lg:px-36 w-full mb-4">
            <hr className="border-b border-gray-300 w-full" />
          </div>
          <div className="flex justify-between px-10 lg:px-36 w-full ">
            <div>Total Amount Paid</div>
            <div>${props.totalPrice}</div>
          </div>
          <button
            className="bg-bgOne h-[50px] w-fit mt-10 rounded text-white border border-gray-100 font-Montserrat text-base font-semibold px-6"
            onClick={props.continueShopping}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="flex flex-col pt-5 items-center w-full">
          <div className="mb-8">
            {/* eslint-disable-next-line */}
            <img src={CrossRed} />
          </div>
          <div className="mb-8">
            {/* eslint-disable-next-line */}
            <img src={Oops} />
          </div>
          <div className="flex justify-center px-2 lg:px-36 w-full ">
            <div>Could not process payment</div>
          </div>
          <div className="flex lg:flex-row flex-col items-center justify-between w-full px-2 lg:px-24 mt-10">
            <button
              className="border border-purple-500 bg-white text-purple-500 h-[50px] w-[250px] mt-10 rounded font-Montserrat text-base font-semibold px-6"
              onClick={props.continueShopping}
            >
              Continue Shopping
            </button>
            <button
              className="bg-bgOne h-[50px] w-[250px] mt-10 rounded text-white border border-gray-100 font-Montserrat text-base font-semibold px-6"
              onClick={props.retry}
            >
              Retry
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
