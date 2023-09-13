import React, { useState } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../Images/Nameburg.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CartIcon from "../../Images/cartIcon.png";
import ImgAvatar from "../Avatar/Avatar";
import { Drawer } from "@mui/material";
import * as S from "./NavbarStyled";
import CartFilter from "../CartFilter/CartFilter";

function Navbar() {
  const navigate = useNavigate();

  const [interventionLogDrawOpened, setInterventionLogDrawOpened] =
    useState(false);

  const handleFilterClose = () => {
    setInterventionLogDrawOpened(false);
  };

  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);
  const [showCategoriesMenu, setShowCategoriesMenu] = useState(false);
  const [showAvatarDropdown, setShowAvatarDropdown] = useState(false); // Add state for avatar dropdown

  const handleMobileMenuClick = (event) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

  const toggleCategoriesMenu = () => {
    setShowCategoriesMenu(!showCategoriesMenu);
  };

  const toggleAvatarDropdown = () => {
    setShowAvatarDropdown(!showAvatarDropdown); // Toggle the avatar dropdown
  };

  return (
    <S.NavWrapper>
      {/* Mobile Menu Button */}
      <S.MenuWrapper>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMobileMenuClick}
        >
          <MenuIcon />
        </IconButton>
        {/* Mobile Menu */}
        <Menu
          anchorEl={mobileMenuAnchorEl}
          open={Boolean(mobileMenuAnchorEl)}
          onClose={handleMobileMenuClose}
        >
          <MenuItem onClick={() => navigate("/")}>Home</MenuItem>
          <MenuItem onClick={() => navigate("/ContactUs")}>Contact Us</MenuItem>
          <MenuItem onClick={() => navigate("/AboutUs")}>About</MenuItem>
          <MenuItem onClick={() => navigate("/Sign-in")}>Login</MenuItem>
          {/* Add more menu items as needed */}
        </Menu>
      </S.MenuWrapper>

      <Link to={"/"}>
        <S.Holder>
          <img src={logo} alt="Nameburg Logo" />
        </S.Holder>
      </Link>

      <S.UlWrapper>
        <ul className="flex gap-10 font-montserrat mr-14">
          <li
            onClick={toggleCategoriesMenu}
            className="relative group cursor-pointer"
          >
            <span className="border-b-2 border-bgOne">Categories</span>
            <ArrowDropDownIcon />
            {/* Categories Dropdown */}
            {showCategoriesMenu && (
              <div className="absolute top-full left-0 mt-2 py-2 px-3 bg-white border border-gray-200 shadow-lg rounded-lg z-10">
                <Link
                  to="/categories/male"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Male
                </Link>
                <Link
                  to="/categories/female"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Female
                </Link>
              </div>
            )}
          </li>
          <Link to={"/ContactUs"}>
            <li>Contact Us</li>
          </Link>
          <Link to={"/AboutUs"}>
            <li>About</li>
          </Link>
          {/* Add more menu items as needed */}
        </ul>
      </S.UlWrapper>

      <S.CartAndAvatar>
        <button onClick={() => setInterventionLogDrawOpened(true)}>
          <img src={CartIcon} alt="" />
        </button>
        <div className="w-[1px] mx-4 h-6 bg-black"></div>
        <div>
          <div
            onClick={toggleAvatarDropdown} // Add an onClick event for avatar dropdown
            className="relative cursor-pointer"
          >
            <ImgAvatar />
            {/* Avatar Dropdown */}
            {showAvatarDropdown && (
              <div className="absolute top-full left-0 mt-2 py-2 px-6 bg-white border border-gray-200 shadow-lg rounded-lg z-10">
                {/* Add avatar dropdown content here */}
                <div>
                  <Link to={"/UserSettings"}>User Settings</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </S.CartAndAvatar>

      <Drawer
        anchor="right"
        open={interventionLogDrawOpened}
        onClose={handleFilterClose}
        style={{ zIndex: 1300 }}
      >
        <div
          className={
            " w-[300px] overflow-auto  scrollbar-hide h-full bg-gray-100 "
          }
        >
          <div className="">
            <CartFilter onClose={handleFilterClose} />
          </div>
        </div>
      </Drawer>
    </S.NavWrapper>
  );
}

export default Navbar;
