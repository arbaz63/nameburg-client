// NotFound.js
import React from "react";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-semibold text-red-500">
        404 - Page Not Found
      </h1>
      <p className="mt-2 text-gray-600">The requested page does not exist.</p>
    </div>
  );
}

export default NotFound;
