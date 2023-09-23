import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function SearchTypeFilter(props) {
  const countries = [
    "Dummy Data 1",
    "Dummy Data 2",
    "Dummy Data 3",
    "Dummy Data 4",
  ];

  const handleSearchTypeChange = (event) => {
    props.setSelectedSearchType(event.target.value);
  };

  return (
    <div className="w-full">
      <div className="pt-2 w-full">
        <FormControl fullWidth variant="outlined">
          <Select
            value={props.selectedSearchType}
            onChange={handleSearchTypeChange}
            className="mt-2 h-[40px]"
            renderValue={(selected) => <div>{selected}</div>}
          >
            {countries.map((country, index) => (
              <MenuItem key={index} value={country}>
                {country}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default SearchTypeFilter;
