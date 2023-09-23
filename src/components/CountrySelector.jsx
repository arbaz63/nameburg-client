import React from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function CountrySelector({ selectedCountry, setSelectedCountry, setError }) {
  const countries = [
    "United States",
    "Australia",
    "United Kingdom",
    "Egypt",
    "India",
    "Ireland",
    "Saudi Arabia",
    "United Arab Emirates",
  ];

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setError("");
  };

  return (
    <div className="pt-2">
      <FormControl fullWidth variant="outlined">
        <Select
          value={selectedCountry}
          onChange={handleCountryChange}
          className="ml-[25px] mr-[25px] lg:ml-[70px] lg:mr-[70px] mt-2 h-[40px]"
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
  );
}

export default CountrySelector;
