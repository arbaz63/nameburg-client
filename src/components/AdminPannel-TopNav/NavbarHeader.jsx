import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { Link } from "react-router-dom";
import ImgAvatar from "../Avatar/Avatar";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";

function NavbarHeader(props) {
  const name = localStorage.getItem("name");
  const [showAvatarDropdown, setShowAvatarDropdown] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/')
  };

  const CloseProfileMenu = () => {
    setShowAvatarDropdown(false);
  };

  const toggleAvatarDropdown = () => {
    setShowAvatarDropdown(!showAvatarDropdown);
  };

  const handleSearchBar = (e) => {
    props.setSearchItem(e.target.value);
    props.setCurrentPages(1);
  };

  return (
    <div className="h-[70px] shadow-md border border-gray-100 flex flex-row justify-between">
      <div className="flex flex-row items-center justify-center">
        <div className="font-montserrat text-xl pl-4">
          Welcome,{" "}
          <span className="font-montserrat text-sm font-medium"> {name}</span>
        </div>
        {/* <div className="ml-12 h-[2px] mt-7 w-20 bg-bgOne "></div> */}
      </div>
      <div className="pr-14 flex flex-row gap-5 items-center">
        <div className="inline-flex items-center border border-gray-300 rounded-2xl p-[1px] h-[36px] w-[300px] py-2 pl-2 bg-gray-50">
          <div className="py-2 pr-2 rounded">
            <SearchIcon className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search domain name"
            value={props.searchItem}
            onChange={handleSearchBar}
            className="bg-gray-50 w-full mr-5"
          />
        </div>
        <div>{/* <img src={bell} alt="" /> */}</div>
        <div className="flex items-center lg:mr-[10px]">
          <div className="w-[1px] mx-4 h-6 bg-black"></div>
          <div>
            <ClickAwayListener onClickAway={CloseProfileMenu}>
              <div
                onClick={toggleAvatarDropdown} // Add an onClick event for avatar dropdown
                className="relative cursor-pointer"
              >
                <ImgAvatar name={name} image={"abc"} />
                {showAvatarDropdown && (
                  <div className="absolute w-[200px] text-sm top-full left-[-120px] md:left-[-130px] mt-2 py-2 px-2 bg-white border border-gray-200 shadow-lg rounded-lg z-10">
                    <div className="mb-2 cursor-pointer  hover:bg-gray-100 p-2 rounded-lg">
                      <Link to={"/UserSettings"}>
                        <div className="flex w-full text-purple-500 items-center text-cs-purple ">
                          <div>
                            <ImgAvatar
                              name={name}
                              image={"abc"}
                              dropdown={true}
                            />
                          </div>
                          <div className="ml-3">{name ? name : "Profile"}</div>
                        </div>
                      </Link>
                    </div>

                    <hr></hr>
                    <div
                      className="mt-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
                      onClick={handleLogout}
                    >
                      Log Out
                    </div>
                  </div>
                )}
              </div>
            </ClickAwayListener>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarHeader;
