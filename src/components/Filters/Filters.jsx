import { useState } from "react";
import CloseFilters from "../../Images/CloseFilters.png";
import SearchInFilter from "../SearchInFilter";
import SearchTypeFilter from "../SearchTypeFilter";
import SortByFilter from "../SortByFilters";

function Filters(props) {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const handleFilterClose = () => {
    props.onClose();
  };

  return (
    <div className=" px-3 py-4">
      <div className="flex flex-row justify-between">
        <div>
          <div className="flex flex-row items-center gap-1">
            <button onClick={handleFilterClose}>
              <img src={CloseFilters} alt="" />
            </button>
            <div className="text-sm font-Fontserrat">Filters</div>
          </div>
        </div>
        <div className="underline font-Montserrat">Clear All</div>
      </div>
      <div className=" text-black text-left font-Montserrat text-sm font-bold pt-4">
        Brand Type
      </div>
      <div className="flex justify-center pt-2 gap-3">
        <button
          onClick={() => handleButtonClick("Button 1")}
          className={`${
            selectedButton === "Button 1"
              ? "bg-bgOne text-white"
              : "bg-white text-black"
          }  w-[85px] py-1 rounded font-Montserrat border border-gray-100`}
        >
          All
        </button>
        <button
          onClick={() => handleButtonClick("Button 2")}
          className={`${
            selectedButton === "Button 2"
              ? "bg-bgOne text-white"
              : "bg-white text-black"
          }  w-[85px] py-1  rounded font-Montserrat border border-gray-100`}
        >
          Invented
        </button>
        <button
          onClick={() => handleButtonClick("Button 3")}
          className={`${
            selectedButton === "Button 3"
              ? "bg-bgOne text-white"
              : "bg-white text-black"
          } w-[85px] py-1  rounded font-Montserrat border border-gray-100`}
        >
          Keyword
        </button>
      </div>
      <div className=" text-black text-left font-Montserrat text-sm font-bold pt-4">
        TDL Extension
      </div>
      <div className="flex flex-row gap-4 pt-2">
        <button className="px-2 py-1 border border-gray-100 font-Montserrat text-xs rounded">
          All
        </button>
        <button className="px-2 py-1 border border-gray-100 font-Montserrat text-xs rounded">
          .Com
        </button>
        <button className="px-2 py-1 border border-gray-100 font-Montserrat text-xs rounded">
          .io
        </button>
        <button className="px-2 py-1 border border-gray-100 font-Montserrat text-xs rounded">
          Jy
        </button>
        <button className="px-2 py-1 border border-gray-100 font-Montserrat text-xs rounded">
          .me
        </button>
      </div>
      <div className=" text-black text-left font-Montserrat text-base font-bold pt-4">
        Search In:
      </div>
      <SearchInFilter />
      <div className=" text-black text-left font-Montserrat text-base font-bold pt-4">
        Search Type:
      </div>
      <SearchTypeFilter />
      <div className="flex flex-row gap-5">
        <div>
          <div className=" text-black text-left font-Montserrat text-base font-bold pt-4">
            Min Price :
          </div>
          <div>
            <input
              type="number"
              placeholder="No Min"
              value={props.minPrice}
              onChange={props.handleMinPrice}
              className="w-[120px] pl-3 bg-white  mt-2 h-[30px] border border-gray-300"
            />
          </div>
        </div>
        <div>
          <div className=" text-black text-left font-Montserrat  text-base font-bold pt-4">
            Max Price :
          </div>
          <div>
            <input
              type="number"
              placeholder="No Max"
              value={props.maxPrice}
              onChange={props.handleMaxPrice}
              className="w-[120px] pl-3  bg-white  mt-2 h-[30px] border border-gray-300"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-5">
        <div>
          <div className=" text-black text-left font-Montserrat text-base font-bold pt-4">
            Min Length :
          </div>
          <div>
            <input
              type="number"
              placeholder="No Min"
              value={props.minLength}
              onChange={props.handleMinLength}
              className="w-[120px] pl-3 bg-white  mt-2 h-[30px] border border-gray-300"
            />
          </div>
        </div>
        <div>
          <div className=" text-black text-left font-Montserrat  text-base font-bold pt-4">
            Max Length :
          </div>
          <div>
            <input
              type="number"
              placeholder="No Max"
              value={props.maxLength}
              onChange={props.handleMaxLength}
              className="w-[120px] pl-3  bg-white  mt-2 h-[30px] border border-gray-300"
            />
          </div>
        </div>
      </div>
      <div className=" text-black text-left font-Montserrat text-base font-bold pt-4">
        Sort By:
      </div>
      <SortByFilter />
      <div className="flex justify-center items-center gap-5 mt-3">
        <div className="">
          <button
            onClick={handleFilterClose}
            className="bg-white  rounded border border-gray-200 font-Montserrat text-base font-semibold py-1 px-6"
          >
            Cancel
          </button>
        </div>
        <div className="">
          <button className="bg-bgOne  rounded text-white border border-gray-100 font-Montserrat text-base font-semibold py-1 px-6">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filters;
