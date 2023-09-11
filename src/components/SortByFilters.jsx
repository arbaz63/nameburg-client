import { useState } from "react";

function SortByFilter() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const countries = [
    "Dummy Data 1",
    "Dummy Data 2",
    "Dummy Data 3",
    "Dummy Data 4",
    // Add more countries here
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
        className=" w-[275px] bg-white  mt-2 h-[30px] border border-gray-300"
      >
        <option value="">Select...</option>
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
