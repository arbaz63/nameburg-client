import React, { useState, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CircularProgress from "@mui/material/CircularProgress";
import axiosInstance from '../axios-config'; // Import the Axios instance

function CountrySelector({ selectedCountry, setSelectedCountry, setError }) {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the list of countries when the component mounts
    axiosInstance
      .get("https://restcountries.com/v2/all")
      .then((response) => {
        const countryNames = response.data.map((country) => country.name);
        setCountries(countryNames);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        setError("Error fetching countries. Please try again.");
        console.error("Error fetching countries:", error);
        setLoading(false); // Set loading to false on error
      });
  }, [setError]);

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
          <MenuItem disabled>
            {loading ? (
              <CircularProgress
                color="primary"
                size={20}
                thickness={6}
                className="mr-2"
              />
            ) : null}
            Select a country
          </MenuItem>
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
