import React from "react";

function Button(props) {
  return (
    <div>
      <button
        className=" w-72 h-13 border p-3 rounded-3xl hover:bg-gray-200"
        onClick={() => props.handleCategoryClick(props.id)}
      >
        {props.text}
      </button>
    </div>
  );
}

export default Button;
