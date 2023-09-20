import AdminPannelNavbar from "../AdminPannelNavbar/AdminPannelNavbar";
import SearchIcon from "@mui/icons-material/Search";
import bell from "../../Images/bell.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Avatar from "../../Images/IconAvatar.png";
import * as S from "./AdminPannelViewDomStyled";
import Zylo from "../../Images/image 7.png";
import Show from "../../Images/ShowWhite.png";
import Line from "../../Images/Line 14.png";
import Keywords from "../Keywords/Keywords";
import profile from "../../Images/profileicondropdown.png";
import logout from "../../Images/logouticon.png";
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
      <div className="w-[78vw] ml-[21vw] overflow-x-hidden ">
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
        <main className=" text-white bg-gray-50 ">
          <>
            <div className=" mx-14 overflow-x-hidden ">
              <div className="flex flex-col items-center mt-14 lg:flex-row lg:justify-between">
                <div>
                  <S.main>
                    <div className="flex justify-between items-center bg-bgOne py-2 px-3 rounded-t-lg">
                      <div className="flex items-center text-white">
                        <img src={Show} alt="" className="w-3" />
                        <span className="text-[10px] ml-1">278</span>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="font-semibold text-sm text-white"
                        >
                          zylo.com
                        </a>
                      </div>
                      <div className="invisible lg:visible text-white">
                        <p className="font-semibold text-sm">$1000</p>
                        <p className="italic text-[10px] opacity-90">
                          This week price
                        </p>
                      </div>
                    </div>
                    <div className="py-14 ">
                      <img src={Zylo} alt="" />
                    </div>
                    <div className="hidden lg:flex justify-between items-center bg-bgOne py-2 px-3 rounded-b-lg text-white">
                      <div>
                        <p className="relative font-semibold text-sm after:content-[''] after:absolute after:top-1/2 after:left-0 after:w-3/4 after:h-[1.5px] after:bg-[#ff0808] after:rotate-6">
                          $1969
                        </p>
                        <p className="italic text-[10px] opacity-90">
                          Actual Price
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">-49%</p>
                        <p className="italic text-[10px] opacity-90">OFF</p>
                      </div>
                    </div>
                  </S.main>
                </div>
                <div className="rounded-lg w-[360px] ml-[10px] mr-[10px] mt-10 lg:ml-0 lg:mr-0 lg:mt-0 border border-gray-200 shadow-custom bg-white">
                  <div className="p-3  h-[360px]">
                    <div className="text-black text-xl font-montserrat font-extrabold text-center ">
                      Zylo.com
                    </div>

                    <div className="flex justify-between bg-gray-100 mt-8">
                      <span className="font-montserrat text-black">
                        Zylo.com
                      </span>
                      <span>
                        <span className="text-base text-black pr-3">$1000</span>
                        <span className="text-black">USD</span>
                      </span>
                    </div>
                    <div className="text-black text-xs font-bold font-montserrat pt-5">
                      What you get
                    </div>
                    <span className="text-xs font-montserrat text-black font-medium pt-4">
                      Domain name:
                      <span className=" font-montserrat text-xs w-full  text-bgOne">
                        Zylo.com
                      </span>
                    </span>
                    <div className="text-xs font-montserrat text-black font-medium pt-2">
                      Logo Design
                    </div>
                    <div className="text-xs font-montserrat text-black font-medium pt-2">
                      Ownership Gurantee
                    </div>
                    <div className="pt-2">
                      <img src={Line} alt="" />
                    </div>
                    <div className="flex justify-between pt-6">
                      <div className="text-base font-montserrat text-black">
                        Subtotal
                      </div>
                      <div>$1969</div>
                    </div>
                    <div className="flex justify-between pt-1">
                      <div className="text-base font-montserrat text-black">
                        Discount
                      </div>
                      <div>$969</div>
                    </div>
                    <div className="flex justify-between pt-4">
                      <div className="text-base font-montserrat text-black font-bold">
                        Total:
                      </div>
                      <div className="text-black font-semibold">$1000</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" text-2xl text-black font-bold text-center mt-14 lg:text-left font-montserrat">
                Description
              </div>
              <div className="flex flex-row justify-between">
                <div className=" mx-7 text-center lg:mx-0 lg:text-left lg:w-1/2 font-montserrat text-black mt-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
                  optio eius debitis a placeat officia doloremque animi cumque
                  eveniet libero deleniti sequi, dolorum consectetur laudantium
                  ipsam, nulla ad nihil natus quia, corrupti praesentium nobis.
                  Rem consequuntur neque totam, non pariatur dolorum repellendus
                  quae ipsa veniam harum repellat, adipisci quibusdam eum nobis
                  quaerat sapiente exercitationem quis.
                </div>
                <div className="rounded-lg w-[360px] h-[300px] ml-[10px] mr-[10px] bg-white mt-10 lg:ml-0 lg:mr-0 lg:mt-0 border border-gray-200 shadow-custom ">
                  <div className=" mt-2 font-Montserrat text-xl font-bold text-black text-center mx-auto">
                    Date & Price
                  </div>
                  <div className="mt-7 flex flex-row justify-between px-4">
                    <div className="font-montserrat text-base text-black ">
                      Date uploaded:
                    </div>
                    <div className=" rounded-md bg-gray-50 text-black">
                      12.03.2023
                    </div>
                  </div>
                  <div className="mt-7 flex flex-row justify-between px-4">
                    <div className="font-montserrat text-base text-black ">
                      Date Expiry:
                    </div>
                    <div className=" rounded-md bg-gray-50 text-black">
                      07.08.2024
                    </div>
                  </div>
                  <div className="mt-7 flex flex-row justify-between px-4">
                    <div className="font-montserrat text-base text-black ">
                      Max Price:
                    </div>
                    <div className=" rounded-md bg-gray-50 text-black">
                      $2000
                    </div>
                  </div>
                  <div className="mt-7 flex flex-row justify-between px-4">
                    <div className="font-montserrat text-base text-black ">
                      Mini Price
                    </div>
                    <div className=" rounded-md bg-gray-50 text-black">
                      $1000
                    </div>
                  </div>
                </div>
              </div>
              <div className=" text-2xl text-black font-bold text-center mt-10 lg:text-left font-montserrat">
                Keywords
              </div>
              <div className=" w-full lg:w-1/2 mr-4 ml-4 lg:mr-0 lg:ml-0">
                <Keywords text={"Sports"} />
                <Keywords text={"Game"} />
                <Keywords text={"Players"} />
                <Keywords text={"Running"} />
                <Keywords text={"Shoes"} />
                <Keywords text={"Score"} />
                <Keywords text={"Jump"} />
                <Keywords text={"eSports"} />
                <Keywords text={"Bat"} />
                <Keywords text={"Football"} />
              </div>
              <div className=" text-2xl text-black font-bold text-center mt-10 lg:text-left font-montserrat">
                Category
              </div>
              <div className="text-base text-center lg:text-left font-montserrat text-black mt-3">
                Sports
              </div>
            </div>
          </>
        </main>
      </div>
    </>
  );
}

export default AdminPannelAllDomains;
