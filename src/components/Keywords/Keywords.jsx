import React from "react";

function Keywords({ text }) {
  return (
    <button className="bg-gray-300 text-black text-sm py-1 px-6 font-montserrat font-semibold rounded-xl mr-2 mt-3 ">
      {text}
    </button>
  );
}

export default Keywords;
