import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function SortByFilter(props) {
  const countries = ["High To Low", "Low To High"];

  const handleSortFilterChange = (event) => {
    if (event.target.value === "High To Low") {
      props.setSelectedSortFilter("high-low");
    }
    if (event.target.value === "Low To High") {
      props.setSelectedSortFilter("low-high");
    }
  };

  return (
    <div className="w-full">
      <div className="pt-2 w-full">
        <FormControl fullWidth variant="outlined">
          <Select
            value={props.selectedSortFilter}
            onChange={handleSortFilterChange}
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

export default SortByFilter;
