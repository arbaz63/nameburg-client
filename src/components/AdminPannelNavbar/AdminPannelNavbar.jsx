import React, { useState } from "react";
import logo from "../../Images/Nameburg-Logo.svg";
import windows from "../../Images/Dashboard.svg";
import createIcon from "../../Images/Add.svg";
import purchase from "../../Images/purchase.svg";

import purchaseWhite from "../../Images/purchaseWhite.svg";
import dashwhite from "../../Images/dashWhite.svg";
import settingWhite from "../../Images/settingsWhite.svg";
import createIconWhite from "../../Images/createWhite.svg";

import settings from "../../Images/Clip.svg";
import { useNavigate } from "react-router-dom";
function AdminPannelNavbar(props) {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(props.selectedItem);

  const handleNavigation = (path) => {
    navigate(path);
  };


  return (
    <div className="h-full border border-gray-100 shadow-xl py-6 px-3 bg-white">
      <div className="mt-3 mx-auto">
        <img src={logo} alt="" />
      </div>
      <div className="mx-auto mt-20">
        <button
          className={`${
            selectedItem === "AllDomains"
              ? "bg-bgOne text-white "
              : " text-admText "
          } flex flex-row justify-start gap-3 pl-3 w-[240px] h-[60px] items-center rounded-md py-2 cursor-pointer`}
          onClick={() => {
            setSelectedItem("AllDomains");
            handleNavigation("/AdminPannel-AllDomains");
          }}
        >
          <img
            src={selectedItem === "AllDomains" ? dashwhite : windows}
            alt=""
          />
          <span className="font-Montserrat  text-base font-bold">
            All Domains
          </span>
        </button>
      </div>
      <div className="mx-auto mt-7">
        <button
          className={`${
            selectedItem === "createDomain"
              ? "bg-bgOne text-white "
              : " text-admText "
          } flex flex-row justify-start gap-3 pl-3 w-[240px] h-[60px] items-center rounded-md py-2 cursor-pointer`}
          onClick={() => {
            setSelectedItem("createDomain");
            handleNavigation("/AdminPannel");
          }}
        >
          <img
            src={selectedItem === "createDomain" ? createIconWhite : createIcon}
            alt=""
          />
          <span className="font-Montserrat text-base font-bold">
            Create Domain
          </span>
        </button>
      </div>
      <div className="mx-auto mt-7">
        <button
          className={`${
            selectedItem === "AllPurchases"
              ? "bg-bgOne text-white "
              : " text-admText "
          } flex flex-row justify-start gap-3 pl-3 w-[240px] h-[60px] items-center rounded-md py-2 cursor-pointer`}
          onClick={() => {
            setSelectedItem("AllPurchases");
            handleNavigation("/AllPurchases");
          }}
        >
          <img
            src={selectedItem === "AllPurchases" ? purchaseWhite : purchase}
            alt=""
          />
          <span className="font-Montserrat text-base font-bold">
            All Purchases
          </span>
        </button>
      </div>
      <div className="mx-auto mt-7">
        <button
          className={`${
            selectedItem === "settings"
              ? "bg-bgOne text-white "
              : "text-admText "
          } flex flex-row justify-start gap-3 pl-3 w-[240px] h-[60px] items-center rounded-md py-2 cursor-pointer`}
          onClick={() => {
            setSelectedItem("settings");
            handleNavigation("/Settings");
          }}
        >
          <img
            src={selectedItem === "settings" ? settingWhite : settings}
            alt=""
          />
          <span className="font-Montserrat  text-base font-bold">Settings</span>
        </button>
      </div>
    </div>
  );
}

export default AdminPannelNavbar;
