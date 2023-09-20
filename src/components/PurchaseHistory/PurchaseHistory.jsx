import React from "react";
import zylo from "../../Images/minizylo.png";
import download from "../../Images/download.png";
import dustbin from "../../Images/admindustbin.png";
import pen from "../../Images/adminpen.png";
import Checkbox from "@mui/material/Checkbox";

function PurchaseHistory() {
  return (
    <>
      <div class="text-3xl text-black font-extrabold ml-6 pt-10 font-Montserrat">
        Purhase History
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-black">
          <thead className="text-xs text-black uppercase bg-white">
            <tr>
              <th scope="col" className="px-6 py-3 text-center font-semibold">
                Domain name
              </th>
              <th scope="col" className="px-6 py-3 font-semibold">
                Date uploaded
              </th>
              <th scope="col" className="px-6 py-3 font-semibold">
                Category
              </th>
              <th scope="col" className="px-6 py-3 font-semibold">
                Price
              </th>
              <th scope="col" className="px-6 py-3 font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b hover:bg-green-50 cursor-pointer duration-500">
              <td
                scope="row"
                className="px-6 py-4 font-normal text-gray-900 whitespace-nowrap flex items-center justify-center"
              >
                <Checkbox />
                <img src={zylo} alt="" className="shadow-lg mr-1 rounded-md" />
                <p>Loremepsum.com</p>
              </td>
              <td className="px-6 py-4">12.02.2023</td>
              <td className="px-6 py-4">Sports</td>
              <td className="px-6 py-4">$1200</td>
              <td className="flex items-center px-6 py-4 space-x-3">
                <div>
                  <a
                    href="#"
                    className="font-medium text-white bg-yellow-400 px-2 py-[1px] rounded-sm text-xs mr-1"
                  >
                    Inactive
                  </a>
                  <a
                    href="#"
                    className="font-medium text-white bg-green-400 px-2 py-[1px] rounded-sm text-xs mr-1"
                  >
                    Solid
                  </a>
                  <a
                    href="#"
                    className="font-medium text-white bg-purple-400 px-2 py-[1px] rounded-sm text-xs mr-1"
                  >
                    View
                  </a>
                </div>
                <div class="flex items-center">
                  <img src={pen} alt="" />
                  <img src={dustbin} alt="" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PurchaseHistory;
