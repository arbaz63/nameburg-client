import React from "react";

function Button({ text }) {
  return (
    <div>
      <button className=" w-72 h-11 shadow-md p-3 rounded-xl ">{text}</button>
    </div>
  );
}

export default Button;
