import * as S from "./AllDomainsStyled";
import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import layer1 from "../../Images/layer1.png";
import Ario from "../../Images/image 1.png";
import GameMaker from "../../Images/image 9.png";
import Zylo from "../../Images/image 7.png";
import Credly from "../../Images/image 8.png";
import Crimson from "../../Images/Brand.png";
import QuantControl from "../../Images/image 13.png";
import Vita from "../../Images/image 12.png";
import AccuNatural from "../../Images/image 10.png";
import SearchIcon from "@mui/icons-material/Search";
import CustomAccordion from "../Accordian/Accordian";
import AccLine from "../../Images/Line 35.png";

function AllDomains() {
  const [searchBar, setSearchBar] = useState();

  const handleSearchBar = (e) => {
    setSearchBar(e.target.value);
  };
  let id = "234nsg";
  return (
    <>
      <S.HeroBanner>
        <span className="font-semibold text-3xl lg:text-5xl font-Montserrat">
          Find, Buy, And Dominate
        </span>
        <S.TextHolder>
          <span>With</span>
          <span className="font-bold">Premium Domains.</span>
        </S.TextHolder>
        <S.InputHolder>
          <div className=" py-2 px-2 rounded">
            <img src={SearchIcon} alt="" />
          </div>
          <input
            type="text"
            placeholder="Search domain name"
            value={searchBar}
            onChange={handleSearchBar}
            className=" border-none text-black bg-white outline-none lg:w-full "
          />
          <div className=" bg-white py-1 px-2 rounded">
            <img src={layer1} alt="" />
          </div>
        </S.InputHolder>
      </S.HeroBanner>

      <div className=" hidden lg:block w-full bg-gray-100 h-40">
        <div className="flex flex-row gap-3 justify-center pt-10 ">
          <button className="font-Montserrat bg-white py-1 px-7 rounded-lg">
            All
          </button>
          <button className="font-Montserrat bg-white py-1 px-7 rounded-lg">
            Health
          </button>
          <button className="font-Montserrat bg-white py-1 px-7 rounded-lg">
            Hockey
          </button>
          <button className="font-Montserrat bg-white py-1 px-7 rounded-lg">
            Cricket
          </button>
          <button className="font-Montserrat bg-white py-1 px-7 rounded-lg">
            Bat
          </button>
        </div>
        <div className=" flex flex-row gap-3 justify-center pt-10 ">
          <button className="font-Montserrat bg-white py-1 px-7 rounded-lg">
            Race
          </button>
          <button className="font-Montserrat bg-white py-1 px-7 rounded-lg">
            Sports
          </button>
          <button className="font-Montserrat bg-white py-1 px-7 rounded-lg">
            Automative
          </button>
          <button className="font-Montserrat bg-white py-1 px-7 rounded-lg">
            Hockey
          </button>
        </div>
      </div>

      <S.Container>
        <S.Heading>Sports</S.Heading>
        <S.IconsHolder>
          <Link to={`/DomainDetails/${id}`}>
            <Card image={Ario} />
          </Link>
          <Link to={`/DomainDetails/${id}`}>
            <Card image={GameMaker} />
          </Link>
          <Link to={`/DomainDetails/${id}`}>
            <Card image={Zylo} />
          </Link>
          <Link to={`/DomainDetails/${id}`}>
            <Card image={Credly} />
          </Link>
        </S.IconsHolder>
        <S.IconsHolder className="pt-12">
          <Link to={`/DomainDetails/${id}`}>
            <Card image={Crimson} />
          </Link>
          <Link to={`/DomainDetails/${id}`}>
            <Card image={QuantControl} />
          </Link>
          <Link to={`DomainDetails/${id}`}>
            <Card image={Vita} />
          </Link>
          <Link to={`DomainDetails/${id}`}>
            <Card image={AccuNatural} />
          </Link>
        </S.IconsHolder>
        <S.IconsHolder>
          <Link to={`/DomainDetails/${id}`}>
            <Card image={Ario} />
          </Link>
          <Link to={`/DomainDetails/${id}`}>
            <Card image={GameMaker} />
          </Link>
          <Link to={`/DomainDetails/${id}`}>
            <Card image={Zylo} />
          </Link>
          <Link to={`/DomainDetails/${id}`}>
            <Card image={Credly} />
          </Link>
        </S.IconsHolder>
        <S.IconsHolder className="pt-12">
          <Link to={`/DomainDetails/${id}`}>
            <Card image={Crimson} />
          </Link>
          <Link to={`/DomainDetails/${id}`}>
            <Card image={QuantControl} />
          </Link>
          <Link to={`/DomainDetails/${id}`}>
            <Card image={Vita} />
          </Link>
          <Link to={`/DomainDetails/${id}`}>
            <Card image={AccuNatural} />
          </Link>
        </S.IconsHolder>
        <S.IconsHolder className="pt-12">
          <Link to={`/DomainDetails/${id}`}>
            <Card image={Crimson} />
          </Link>
          <Link to={`/DomainDetails/${id}`}>
            <Card image={QuantControl} />
          </Link>
          <Link to={`/DomainDetails/${id}`}>
            <Card image={Vita} />
          </Link>
          <Link to={`/DomainDetails/${id}`}>
            <Card image={AccuNatural} />
          </Link>
        </S.IconsHolder>
        <S.IconsHolder>
          <Link to={`/DomainDetails/${id}`}>
            <Card image={Ario} />
          </Link>
          <Link to={`/DomainDetails/${id}`}>
            <Card image={GameMaker} />
          </Link>
          <Link to={`/DomainDetails/${id}`}>
            <Card image={Zylo} />
          </Link>
          <Link to={`/DomainDetails/${id}`}>
            <Card image={Credly} />
          </Link>
        </S.IconsHolder>
        <S.IconsHolder className="pt-12">
          <Link to={`/DomainDetails/${id}`}>
            <Card image={Crimson} />
          </Link>
          <Link to={`/DomainDetails/${id}`}>
            <Card image={QuantControl} />
          </Link>
          <Link to={`DomainDetails/${id}`}>
            <Card image={Vita} />
          </Link>
          <Link to={`DomainDetails/${id}`}>
            <Card image={AccuNatural} />
          </Link>
        </S.IconsHolder>
      </S.Container>
      <div className="w-full bg-white lg:ml-36 lg:mr-36 mt-12 overflow-x-hidden ">
        <div className=" text-2xl text-black font-bold text-center mt-10 lg:text-left font-Montserrat lg:mb-7">
          Frequently Asked Questions {"(FAQ)"}
        </div>
        <div className="w-full lg:w-1/2">
          <CustomAccordion />
          <div>
            <img src={AccLine} alt="" className="my-4" />
          </div>
          <CustomAccordion />
          <div>
            <img src={AccLine} alt="" className="my-4" />
          </div>
          <CustomAccordion />
          <div>
            <img src={AccLine} alt="" className="my-4" />
          </div>
          <CustomAccordion />
        </div>
      </div>
    </>
  );
}

export default AllDomains;
