import React, { useState } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import logo from "../../Images/Nameburg-Logo.svg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClosedFilters from "../../Images/blackCross.svg";
import CartIcon from "../../Images/cartIcon.svg";
import ImgAvatar from "../Avatar/Avatar";
import { Drawer } from "@mui/material";
import * as S from "./NavbarStyled";
import CartFilter from "../CartFilter/CartFilter";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import HistoryIcon from "../../Images/history.svg";
import { List, ListItem, ListItemText } from "@mui/material";
import { useAuth } from "../../AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  const [interventionLogDrawOpened, setInterventionLogDrawOpened] =
    useState(false);

  const handleFilterClose = () => {
    setInterventionLogDrawOpened(false);
  };

  const name = localStorage.getItem("name");

  const [showCategoriesMenu, setShowCategoriesMenu] = useState(false);
  const [showAvatarDropdown, setShowAvatarDropdown] = useState(false);

  const toggleCategoriesMenu = () => {
    setShowCategoriesMenu(!showCategoriesMenu);
  };

  const toggleAvatarDropdown = () => {
    setShowAvatarDropdown(!showAvatarDropdown);
  };

  const handleLogout = () => {
    console.log("log out");
    logout();
  };

  const [categories, setCategories] = useState(0);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.log("Error fetching categories. Please try again.");
      }
      // eslint-disable-next-line
    };

    fetchCategories();
  }, []);

  const [selectedOption, setSelectedOption] = useState("");

  const CloseCategoriesMenu = () => {
    setShowCategoriesMenu(false);
  };

  const CloseProfileMenu = () => {
    setShowAvatarDropdown(false);
  };

  const handleCategoryClick = (id) => {
    console.log("here");
    navigate(`/AllDomains/${id}`);
  };

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    {
      label: "Home",
      onClick: () => {
        navigate("/");
        toggleDrawer();
      },
    },
    {
      label: "Contact Us",
      onClick: () => {
        navigate("/ContactUs");
        toggleDrawer();
      },
    },
    {
      label: "About",
      onClick: () => {
        navigate("/AboutUs");
        toggleDrawer();
      },
    },
    isLoggedIn && {
      label: isLoggedIn ? "Log Out" : "Log In",
      onClick: () => {
        isLoggedIn ? handleLogout() : navigate("/Sign-in");
        toggleDrawer();
      },
    },
  ].filter(Boolean);

  const closeDrawerAndNavigate = (path) => {
    toggleDrawer();
    navigate(path);
  };
  // const accessToken = localStorage.getItem("accessToken");
  // const userId = localStorage.getItem("userId");

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:4000/api/v1/auth/${userId}`,
  //         {
  //           headers: {
  //             Authorization: `${accessToken}`, // Assuming it's a Bearer token
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //       console.log("user -> ", response.data);
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };

  //   // Call the async function inside useEffect
  //   fetchUserData();
  // }, []);

  // console.log(isLoggedIn)
  return (
    <S.NavWrapper>
      {/* Mobile Menu Button */}
      <S.MenuWrapper>
        {/* <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMobileMenuClick}
        >
          <MenuIcon />
        </IconButton> */}
        {/* Mobile Menu */}
        {/* <Menu
          anchorEl={""}
          open={dropdownMenu}
          onClose={handleMobileMenuClose}
          PaperProps={{ style: fullscreenMenuStyle }} // Apply the fullscreen style
        >
          <MenuItem onClick={() => navigate("/")}>Home</MenuItem>
          <MenuItem onClick={() => navigate("/ContactUs")}>Contact Us</MenuItem>
          <MenuItem onClick={() => navigate("/AboutUs")}>About</MenuItem>
          {isLoggedIn && (
            <MenuItem onClick={() => navigate("/UserSettings")}>
              Profile
            </MenuItem>
          )}
          <MenuItem
            onClick={isLoggedIn ? handleLogout : () => navigate("/Sign-in")}
          >
            {isLoggedIn ? "logOut" : "LogIn"}
          </MenuItem>
        </Menu> */}
        <div className="h-full">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="top"
            open={drawerOpen}
            onClose={toggleDrawer}
            sx={{ height: "100%" }}
          >
            <div
              style={{
                height: "150vh",
                overflow: "hidden", // Set the height to 100vh for full page
                display: "flex",
                flexDirection: "column",
              }}
            >
              <List>
                {isLoggedIn && (
                  <>
                    <div className="mb-2 flex justify-between cursor-pointer  hover:bg-gray-100 p-2 rounded-lg">
                      <div
                        onClick={() => closeDrawerAndNavigate("/UserSettings")}
                      >
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
                      </div>
                      <div onClick={toggleDrawer}>
                        <img src={ClosedFilters} alt="X" />
                      </div>
                    </div>
                    <hr />
                    <button
                      onClick={() => setInterventionLogDrawOpened(true)}
                      className="flex space-x-2 px-3 py-3"
                    >
                      <img src={CartIcon} alt="" />
                      <div> My Cart</div>
                    </button>
                    <hr />
                    <div
                      className="mb-2 mt-4 cursor-pointer  hover:bg-gray-100 p-2 rounded-lg"
                      onClick={() => closeDrawerAndNavigate("/purchaseHistory")}
                    >
                      <div>
                        <div className="flex w-full items-center cursor-pointer">
                          <div>
                            <img src={HistoryIcon} alt={"abc"} />
                          </div>
                          <div className="ml-3">Purchase History</div>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </>
                )}
                {menuItems.map((item, index) => (
                  <ListItem button key={index} onClick={item.onClick}>
                    <ListItemText primary={item.label} />
                  </ListItem>
                ))}
              </List>
              {/* You can add additional content below the menu if needed */}
            </div>
          </Drawer>
        </div>
      </S.MenuWrapper>

      <div className="">
        <Link to={"/"}>
          <div onClick={() => setSelectedOption("")}>
            <S.Holder>
              <img src={logo} alt="Nameburg Logo" />
            </S.Holder>
          </div>
        </Link>
      </div>

      <div className="lg:hidden flex">
        <IconButton></IconButton>
      </div>

      <S.UlWrapper>
        <ul className="flex gap-10 font-montserrat mr-14">
          <ClickAwayListener onClickAway={CloseCategoriesMenu}>
            <li
              onClick={toggleCategoriesMenu}
              className={`relative group cursor-pointer ${
                selectedOption === "Categories" ? "border-b-2 border-bgOne" : ""
              }`}
            >
              <span onClick={() => setSelectedOption("Categories")}>
                Categories
              </span>
              <ArrowDropDownIcon />
              {/* Categories Dropdown */}
              {showCategoriesMenu && categories && (
                <div className="absolute w-max top-full  overflow-y-scroll max-h-[500px] left-0 mt-2 py-2 px-3 bg-white border border-gray-200 shadow-lg rounded-lg z-10">
                  {categories.map((category) => (
                    <div
                      key={category._id}
                      onClick={() => handleCategoryClick(category._id)}
                    >
                      <div className="block px-4 py-2 w-full rounded-md hover:bg-gray-100">
                        {category.name && category.name}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </li>
          </ClickAwayListener>

          <Link to={"/ContactUs"}>
            <li
              onClick={() => setSelectedOption("Contact Us")}
              className={`cursor-pointer ${
                selectedOption === "Contact Us" ? "border-b-2 border-bgOne" : ""
              }`}
            >
              Contact Us
            </li>
          </Link>
          <Link to={"/AboutUs"}>
            <li
              onClick={() => setSelectedOption("About")}
              className={`cursor-pointer ${
                selectedOption === "About" ? "border-b-2 border-bgOne" : ""
              }`}
            >
              About
            </li>
          </Link>
        </ul>
      </S.UlWrapper>

      {isLoggedIn ? (
        <S.CartAndAvatar>
          <button onClick={() => setInterventionLogDrawOpened(true)}>
            <img src={CartIcon} alt="" />
          </button>
          <div className="w-[1px] mx-4 h-6 bg-black"></div>
          <div>
            <ClickAwayListener onClickAway={CloseProfileMenu}>
              <div
                onClick={toggleAvatarDropdown} // Add an onClick event for avatar dropdown
                className="relative cursor-pointer"
              >
                <ImgAvatar name={name} image={"abc"} />
                {/* Avatar Dropdown */}
                {showAvatarDropdown && (
                  <div className="absolute w-[200px] text-sm top-full left-[-120px] md:left-[-130px] mt-2 py-2 px-2 bg-white border border-gray-200 shadow-lg rounded-lg z-10">
                    {/* Add avatar dropdown content here */}
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
                    <div className="mb-2 cursor-pointer  hover:bg-gray-100 p-2 rounded-lg">
                      <Link to={"/purchaseHistory"}>
                        <div className="flex w-full items-center cursor-pointer">
                          <div>
                            <img src={HistoryIcon} alt={"abc"} />
                          </div>
                          <div className="ml-3">Purchase History</div>
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
        </S.CartAndAvatar>
      ) : (
        <div className="mr-8 lg:flex hidden">
          <button
            className="bg-bgOne h-[50px] w-fit rounded text-white border border-gray-100 font-Montserrat text-base font-semibold py-1 px-6"
            onClick={() => navigate("/Sign-in")}
          >
            Log in
          </button>
        </div>
      )}
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
