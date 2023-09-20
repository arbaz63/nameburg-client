import AdminPannelNavbarSettings from "../AdminPannelNavbarSettings/AdminPannelNavSet";
import SearchIcon from "@mui/icons-material/Search";
import bell from "../../Images/bell.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Avatar from "../../Images/IconAvatar.png";
import { useState } from "react";
import profile from "../../Images/profileicondropdown.png";
import logout from "../../Images/logouticon.png";

function AdminPannelAllDomains() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <div className="fixed left-0 top-0 w-[21vw] h-[100vh]">
        <AdminPannelNavbarSettings />
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
              className="flex flex-row cursor-pointer "
              onClick={toggleDropdown}
            >
              <img src={Avatar} alt="" />
              <span>
                <ArrowDropDownIcon />
              </span>
              {isDropdownOpen && (
                <div className="absolute top-10 right-0 bg-white border border-gray-300 rounded-md shadow-md w-[150px] mr-5">
                  <ul>
                    <li className="font-montserrat flex flex-row ml-3 mt-2 items-center gap-2 text-admText text-sm">
                      {" "}
                      <img src={profile} alt="" /> Profile
                    </li>
                    <div className="h-[1px] w-full bg-bgOne my-3" />
                    <li className="font-montserrat flex flex-row ml-3 mt-2 items-center gap-2 text-admText text-sm">
                      {" "}
                      <img src={logout} alt="" /> Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <main className="bg-adminBg pl-4 pt-7 pr-9 h-[800px]">
          <div className="font-montserrat text-2xl text-black font-extrabold">
            Account Settings
          </div>
          <div className="mt-4 w-[983px] h-[200px] rounded-lg  bg-white px-4 ">
            <div className="font-montserrat font-medium pt-3 ml-3 text-lg text-black">
              Name
            </div>
            <div className="font-montserrat text-base  pl-4 bg-gray-100 text-black ml-3 py-2 rounded-md mt-2 h-[40px] w-[400px] border border-gray-100">
              John Doe
            </div>
            <div className="font-montserrat font-medium ml-3 mt-4 text-lg text-black">
              Email
            </div>
            <div className="font-montserrat  text-base  pl-4 bg-gray-100 text-black ml-3 py-2 rounded-md mt-2 h-[40px] w-[400px] border border-gray-100">
              johndoe@gmail.com
            </div>
          </div>
          <div className="font-montserrat mt-5 text-2xl text-black font-extrabold">
            Change Password
          </div>
          <div className="mt-4 w-[983px] h-[270px] rounded-lg  bg-white px-4 ">
            <div className="font-montserrat font-medium pt-3 ml-3 text-lg text-black">
              New Password
            </div>
            <input
              placeholder="New Password"
              type="password"
              className="font-montserrat text-base  pl-4 bg-gray-100 text-black ml-3 py-2 rounded-md mt-2 h-[40px] w-[400px] border border-gray-100"
            />

            <div className="font-montserrat font-medium ml-3 mt-4 text-lg text-black">
              Confirm Password
            </div>
            <input
              placeholder="Confirm Password"
              type="password"
              className="font-montserrat mt-3 text-base  pl-4 bg-gray-100 text-black ml-3 py-2 rounded-md  h-[40px] w-[400px] border border-gray-100"
            />
            <div>
              <button className="mt-6 ml-3 font-montserrat rounded-md text-white bg-bgOne py-2 px-6">
                Save
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default AdminPannelAllDomains;
