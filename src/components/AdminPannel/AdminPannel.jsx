import AdminPannelNavbar from "../AdminPannelNavbar/AdminPannelNavbar";
import SearchIcon from "@mui/icons-material/Search";
import bell from "../../Images/bell.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Avatar from "../../Images/IconAvatar.png";
import SelectCategoriesAdmin from "../SelectCategoriesAdmin";
import AddIcon from "../../Images/addiconadmin.png";
import gallery from "../../Images/gallery 1.png";
import cross from "../../Images/crossbuttonadmin.png";
import profile from "../../Images/profileicondropdown.png";
import logout from "../../Images/logouticon.png";
import { useState } from "react";

function AdminPannelAllDomains() {
  const [domainName, setDomainName] = useState();
  const [max, setMax] = useState();
  const [mini, setMini] = useState();
  const [date, setDate] = useState();
  const [text, setText] = useState("");
  const maxLength = 500;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDomainName = (e) => {
    setDomainName(e.target.value);
  };

  const handleMaxPrice = (e) => {
    setMax(e.target.value);
  };

  const handleMiniPrice = (e) => {
    setMini(e.target.value);
  };

  const handleChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= maxLength) {
      setText(inputText);
    }
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
        <main className="bg-adminBg pl-4 pr-20 ">
          <div className="  flex flex-row justify-between">
            <div className="text-sm pt-5 text-black font-montserrat ">
              Create new domain in seven simple steps:
            </div>
            <div className="pt-5">
              <button className="bg-bgOne py-3 px-4 rounded-md font-Montserrat text-xs text-white">
                Publish Domain
              </button>
            </div>
          </div>
          <div className="font-montserrat text-xl pl-4">1- Domain Name</div>
          <div className="w-[983px] bg-white h-[70px] mt-4 rounded-md ">
            <input
              type="text"
              placeholder="Domain name"
              value={domainName}
              onChange={handleDomainName}
              className="pl-4 bg-gray-100 text-black ml-4 py-2 rounded-md mt-4 w-[400px] border border-gray-100"
            />
          </div>
          <div className="font-montserrat text-xl pl-4 mt-4">2- Set Piece</div>
          <div className="w-[983px] bg-white h-[70px] mt-2  rounded-md  ">
            <div className="flex flex-row items-center px-4 gap-10 ">
              <div className="w-1/2 flex flex-row gap-3 items-center pt-3">
                <div className="text-black text-sm ">Max Price: </div>
                <input
                  type="number"
                  placeholder="Maximum price"
                  value={max}
                  onChange={handleMaxPrice}
                  className="pl-4 py-2 bg-gray-100 w-[325px] rounded-md border border-gray-100"
                />
              </div>
              <div className="w-1/2 flex flex-row gap-3 items-center pt-3">
                <div className="text-black text-sm ">Min Price: </div>
                <input
                  type="number"
                  placeholder="Minimum price"
                  value={mini}
                  onChange={handleMiniPrice}
                  className="pl-4 py-2 bg-gray-100 w-[325px] rounded-md border border-gray-100"
                />
              </div>
            </div>
          </div>
          <div className="font-montserrat text-xl pl-4 mt-4">
            3- Set Expiry Date
          </div>
          <div className="w-[983px] bg-white h-[70px] mt-4 rounded-md items-center  ">
            <div className="w-1/2 flex flex-row gap-3 items-center px-3 pt-3 ">
              <div className="text-black text-sm ">Expiry Date: </div>
              <input
                type="date"
                value={date}
                onChange={handleMiniPrice}
                className="pl-4 py-2 bg-gray-100 w-[325px] rounded-md pr-2 border border-gray-100"
              />
            </div>
          </div>
          <div className="font-montserrat text-xl pl-4 mt-4">
            4- Select Category
          </div>
          <div className="w-[983px] bg-white h-[70px] mt-4 rounded-md items-center ">
            <SelectCategoriesAdmin />
          </div>
          <div className="font-montserrat text-xl pl-4 mt-4">
            5- Add Keywords
          </div>
          <div className=" flex flex-row  gap-4 w-[983px] bg-white h-[70px] mt-4 rounded-md items-center ">
            <div className="ml-3">
              <button className=" flex flex-row items-center justify-center bg-gray-100 text-black text-sm py-2 px-6 font-montserrat rounded-xl  ">
                Sports <img src={cross} alt="" className="pl-2" />
              </button>
            </div>
            <div className="mt-3">
              <button className=" flex flex-row items-center justify-center bg-gray-100 text-black text-sm py-2 px-6 font-montserrat rounded-xl  ">
                Sports <img src={cross} alt="" className="pl-2" />
              </button>
            </div>
            <img src={AddIcon} alt="" />
          </div>
          <div className="font-montserrat text-xl pl-4 mt-4">
            6- Upload images{" "}
            <span className="text-xs font-montserrat ">upto 5 images</span>
          </div>
          <div className="w-[983px] bg-white h-[250px] mt-4 rounded-md ">
            <div className=" flex flex-col gap-8 justify-center items-center border border-dashed  border-gray-300 h-[240px] w-[250px] mr-3">
              <img src={gallery} alt="" className="" />
              <div className="text-gray-300 font-montserrat text-sm">
                Drag & drop or{" "}
                <span className="text-gray-300 underline font-Montserrat text-sm">
                  Upload File
                </span>
              </div>
            </div>
          </div>
          <div className="font-montserrat text-xl pl-4 mt-4">
            7- Add Description
          </div>
          <div className="w-[983px] bg-white h-[250px] mt-4 rounded-md">
            <div className="relative">
              <textarea
                placeholder="Type here.."
                className="h-[200px] w-[350px] border border-gray-300 rounded-md ml-4 mt-4 p-2"
                value={text}
                onChange={handleChange}
                maxLength={maxLength}
              />
              <span className="absolute bottom-2 right-2 text-bgOne">
                {text.length} / {maxLength}
              </span>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default AdminPannelAllDomains;
