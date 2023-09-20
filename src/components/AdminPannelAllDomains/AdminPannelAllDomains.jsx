import AdminPannelNavbar from "../AdminPannelNavbar/AdminPannelNavbar";
import SearchIcon from "@mui/icons-material/Search";
import bell from "../../Images/bell.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Avatar from "../../Images/IconAvatar.png";
import zylo from "../../Images/minizylo.png";
import dustbin from "../../Images/admindustbin.png";
import pen from "../../Images/adminpen.png";
import Checkbox from "@mui/material/Checkbox";
import create from "../../Images/createiconwhiteadmin.png";
import logout from "../../Images/logouticon.png";
import profile from "../../Images/profileicondropdown.png";
import { useState } from "react";

function AdminPannelAllDomains() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <div className="fixed left-0 top-0 w-[21vw] h-[100vh]">
        <AdminPannelNavbar />
      </div>
      <div className="w-[79vw] ml-[21vw]">
        <div className="h-[70px] shadow-md border border-gray-100 flex flex-row justify-between">
          <div className="flex flex-row items-center justify-center">
            <div className="font-montserrat text-xl pl-4">
              Welcome,{" "}
              <span className="font-montserrat text-sm font-medium">
                {" "}
                Jhon Doe
              </span>
            </div>
            <div className="ml-12 h-[2px] mt-7 w-20 bg-bgOne "></div>
          </div>
          <div className="pr-14 flex flex-row gap-5 items-center">
            <div
              className="inline-flex items-center border border-gray-300 rounded-2xl
                     p-[1px]  h-[36px] w-[300px] py-2 pl-2  bg-gray-50"
            >
              <div className="py-2 pr-2 rounded">
                <SearchIcon className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search domain name"
                className="bg-gray-50"
              />
            </div>
            <div>
              <img src={bell} alt="" />
            </div>
            <div className="w-[1px] h-6 bg-gray-200 "></div>
            <div
              className="flex flex-row cursor-pointer"
              onClick={toggleDropdown}
            >
              <img src={Avatar} alt="" />
              <span>
                <ArrowDropDownIcon />
              </span>
              {isDropdownOpen && (
                <div className="absolute top-10 right-0 bg-white border border-gray-300 rounded-md shadow-md w-[150px] mr-5">
                  <ul>
                    <li className="font-montserrat flex flex-row ml-3 mt-2 items-center gap-2 text-admText text-xs">
                      {" "}
                      <img src={profile} alt="" /> Profile
                    </li>
                    <div className="h-[1px] w-full bg-bgOne my-3" />
                    <li className="font-montserrat flex flex-row ml-3 mt-2 items-center gap-2 text-admText text-xs">
                      {" "}
                      <img src={logout} alt="" /> Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <main className=" bg-adminBg h-screen pt-12 pl-4 pr-14 text-white">
          <div className="w-full flex justify-end">
            <div className="mb-5">
              <button className="bg-bgOne gap-2 flex flex-row items-center justify-center py-2 px-4 rounded-md text-white font-semibold font-montserrat ">
                <img src={create} alt="" />
                Create Domain
              </button>
            </div>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-black">
              <thead className="text-xs text-black uppercase bg-white">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center font-semibold"
                  >
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
                    <Checkbox color="secondary" />
                    <img
                      src={zylo}
                      alt=""
                      className="shadow-lg mr-1 rounded-md"
                    />
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
        </main>
      </div>
    </>
  );
}

export default AdminPannelAllDomains;
