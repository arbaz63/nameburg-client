import CloseFilters from "../../Images/blackCross.svg";
import SearchInFilter from "../SearchInFilter";
import SortByFilter from "../SortByFilters";
import OutlinedInput from "@mui/material/OutlinedInput";
import React, { useEffect, useState } from "react";
import axiosInstance from '../../axios-config'; // Import the Axios instance

function Filters(props) {
  const handleFilterClose = () => {
    props.onClose();
  };

  return (
    <div className="px-3 py-4">
      <div className="flex flex-row justify-between">
        <div>
          <div className="flex flex-row items-center gap-1">
            <button onClick={handleFilterClose}>
              <img src={CloseFilters} alt="" />
            </button>
            <div className="text-sm font-Fontserrat">Filters</div>
          </div>
        </div>
        <div
          className="underline font-Montserrat cursor-pointer"
          onClick={props.handleClearAllClick}
        >
          Clear All
        </div>
      </div>
      <div className=" text-black text-left font-Montserrat text-base font-bold pt-4">
        Search In:
      </div>
      <SearchInFilter
        category={props.category}
        setcategory={props.setcategory}
      />
      <div className="flex flex-row gap-5">
        <div>
          <div className=" text-black text-left font-Montserrat text-base font-bold pt-4">
            Min Price :
          </div>
          <div>
            <OutlinedInput
              type="number"
              name="No Min"
              value={props.minPrice !== 0 && props.minPrice}
              placeholder="No Min"
              onChange={props.handleMinPrice}
              className="mt-2 h-[40px]"
            />
          </div>
        </div>
        <div>
          <div className=" text-black text-left font-Montserrat  text-base font-bold pt-4">
            Max Price :
          </div>
          <div>
            <OutlinedInput
              type="number"
              name="No Max"
              value={props.maxPrice !== 0 && props.maxPrice}
              placeholder="No Max"
              onChange={props.handleMaxPrice}
              className="mt-2 h-[40px]"
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
            <OutlinedInput
              type="number"
              name="No Min"
              value={props.minLength !== 0 && props.minLength}
              placeholder="No Min"
              onChange={props.handleMinLength}
              className="mt-2 h-[40px]"
            />
          </div>
        </div>
        <div>
          <div className=" text-black text-left font-Montserrat  text-base font-bold pt-4">
            Max Length :
          </div>
          <div>
            <OutlinedInput
              type="number"
              name="No Min"
              value={props.maxLength !== 0 && props.maxLength}
              placeholder="No Min"
              onChange={props.handleMaxLength}
              className="mt-2 h-[40px]"
            />
          </div>
        </div>
      </div>
      <div className=" text-black text-left font-Montserrat text-base font-bold pt-4">
        Sort By:
      </div>
      <SortByFilter
        selectedSortFilter={props.selectedSortFilter}
        setSelectedSortFilter={props.setSelectedSortFilter}
      />
      <div className="flex justify-center items-center gap-5 mt-10">
        <div className="">
          <button
            onClick={handleFilterClose}
            className="bg-white h-[50px] w-[120px] rounded border border-gray-200 font-Montserrat text-base font-semibold py-1 px-6"
          >
            Cancel
          </button>
        </div>
        <div className="">
          <button
            className="bg-bgOne h-[50px] w-[120px] rounded text-white border border-gray-100 font-Montserrat text-base font-semibold py-1 px-6"
            onClick={props.handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filters;
