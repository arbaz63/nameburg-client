import { useState } from "react";

function CountrySelector() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const countries = [
    "United States",
    "Australia",
    "United Kingdom",
    "Egypt",
    "India",
    "Ireland",
    "Saudi Arabia",
    "United Arab Emirates",
    // Add more countries here
  ];

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div>
      <div className="text-black ml-[25px] lg:ml-[70px] mt-[20px] font-montserrat font-bold">
        Select a Country
      </div>
      <select
        id="country"
        name="country"
        value={selectedCountry}
        onChange={handleCountryChange}
        className="ml-[25px] w-[310px] lg:w-[460px] lg:pl-[20px] mr-[25px] lg:ml-[70px] lg:mr-[70px] mt-2 h-[40px] border border-gray-300"
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

export default CountrySelector;
