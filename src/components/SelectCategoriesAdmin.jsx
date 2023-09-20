import { useState } from "react";

function SortByFilter() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const countries = [
    "Sports Domain",
    "HouseHold Domain",
    "Furniture Domain",
    "Pharma Domains",
  ];

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div>
      <select
        id="country"
        name="country"
        value={selectedCountry}
        onChange={handleCountryChange}
        className="pl-4 bg-gray-100 text-sm pr-3 text-black ml-4 py-2 rounded-md mt-4 w-[400px] border border-gray-100"
      >
        <option value="">
          <span className="text-xs">Select</span>
        </option>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SortByFilter;
