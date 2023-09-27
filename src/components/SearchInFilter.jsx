// import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import React, { useEffect, useState } from "react";
import axiosInstance from '../axios-config'; // Import the Axios instance

function SearchInFilter(props) {
  const [categories, setCategories] = useState();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get(
          "/categories"
        );
        setCategories(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching categories 123. Please try again.");
      }
    };

    fetchCategories();
    // eslint-disable-next-line
  }, []);

  const handleSearchInChange = (event) => {
    props.setcategory(event.target.value);
  };

  const getCategoryNameById = (categoryId) => {
    if (props.category !== "All") {
      const category =
        categories && categories.find((cat) => cat._id === categoryId);
      return category ? category.name : props.category;
    }
    return props.category;
  };

  return (
    <div className="w-full">
      <div className="pt-2 w-full">
        <FormControl fullWidth variant="outlined">
          <Select
            value={props.category}
            onChange={handleSearchInChange}
            className="mt-2 max-h-[40px] overflow-scroll"
            renderValue={(selected) => (
              <div>{getCategoryNameById(selected)}</div>
            )}
          >
            {categories &&
              categories.map(
                (category) =>
                  category._id && (
                    <MenuItem key={category._id} value={category._id}>
                      {category.name && category.name}
                    </MenuItem>
                  )
              )}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default SearchInFilter;
