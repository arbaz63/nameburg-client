import * as S from "./NavbarStyled";
import logo from "../../Images/Nameburg.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  return (
    <S.NavWrapper>
      <S.MenuWrapper>
        <MenuIcon />
      </S.MenuWrapper>
      <S.Holder>
        <img src={logo} alt="Nameburg Logo" />
      </S.Holder>
      <S.UlWrapper>
        <ul className="flex gap-10 font-montserrat mr-14 ">
          <li>
            <span className="border-b-2 border-bgOne">Categories</span>
            <ArrowDropDownIcon />
          </li>
          <li>Contact Us</li>
          <li>About</li>
        </ul>
      </S.UlWrapper>
      <S.ButtonWrapper>
        <button className="bg-bgOne text-sm text-white font-montserrat font-semibold w-[74px] h-9 rounded-sm mr-12 ">
          Login
        </button>
      </S.ButtonWrapper>
    </S.NavWrapper>
  );
}

export default Navbar;
