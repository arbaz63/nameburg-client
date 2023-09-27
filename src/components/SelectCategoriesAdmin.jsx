import * as React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function SelectCategoriesAdmin(props) {

  const handleCountryChange = (event) => {
    props.setSelectedCategory(event.target.value);
  };

  console.log(props.selectedCategory)

  return (
    <FormControl
      sx={{
        m: 1,
        minWidth: "400px",
        border: "none", // Remove the border
      }}
      size="small"
      className="bg-gray-100"
    >
      <InputLabel id="">Select Category</InputLabel>
      <Select
        labelId="sort-by-label"
        id="sort-by-select"
        value={props.selectedCategory}
        label="Select Category"
        onChange={handleCountryChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {props.categories &&
          props.categories.map((category) => (
            <MenuItem key={category._id} value={category._id}>
              {category.name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}

export default SelectCategoriesAdmin;
