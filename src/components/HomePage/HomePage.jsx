import * as S from "./HomePageStyled";
import { Link } from "react-router-dom";
import { useState } from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import layer1 from "../../Images/layer1.png";
import Redbooth from "../../Images/image 3.png";
import secured from "../../Images/secured.png";
import speed from "../../Images/litespeed-logo 1.png";
import spectaculus from "../../Images/Rectangle 11.png";
import nira from "../../Images/image 5.png";
import cloud from "../../Images/Rectangle 13.png";
import Ario from "../../Images/image 1.png";
import GameMaker from "../../Images/image 9.png";
import Zylo from "../../Images/image 7.png";
import Credly from "../../Images/image 8.png";
import Crimson from "../../Images/Brand.png";
import QuantControl from "../../Images/image 13.png";
import Vita from "../../Images/image 12.png";
import AccuNatural from "../../Images/image 10.png";
import Colons from "../../Images/colons.png";
import smColons from "../../Images/Page 1.png";
import Profile from "../../Images/Profile Image.png";
import star from "../../Images/Vector (1).png";
import SearchIcon from "@mui/icons-material/Search";
import { Drawer } from "@mui/material";
import Filters from "../Filters/Filters";

function HomePage() {
  const [searchBar, setSearchBar] = useState();

  const handleSearchBar = (e) => {
    setSearchBar(e.target.value);
  };

  const [interventionLogDrawOpened, setInterventionLogDrawOpened] =
    useState(false);

  const handleFilterClose = () => {
    setInterventionLogDrawOpened(false);
  };

  const [maxPrice, setMaxPrice] = useState();
  const [minPrice, setMinPrice] = useState();
  const [minLength, setMinLength] = useState();
  const [maxLength, setMaxLength] = useState();
  const [searchInFilter, setSearchInFilter] = useState();
  const [searchTypeFilter, setSearchTypeFilter] = useState();
  const [sortByFilter, setSortByFilter] = useState();

  const handleMaxPrice = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleMinPrice = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMinLength = (e) => {
    setMinLength(e.target.value);
  };

  const handleMaxLength = (e) => {
    setMaxLength(e.target.value);
  };

  const handleSearchInFilter = (e) => {
    setSearchInFilter(e.target.value);
  };

  const handleSearchTypeFilter = (e) => {
    setSearchTypeFilter(e.target.value);
  };

  const handleSortByFilter = (e) => {
    setSortByFilter(e.target.value);
  };

  let id = "234nsg";

  return (
    <>
      <S.HeroBanner>
        <S.TextHolder>
          <p>Find, Buy, And Dominate</p>

          <p>
            <span>With</span>{" "}
            <span className="font-semibold">Premium Domains.</span>
          </p>
        </S.TextHolder>
        <S.InputHolder>
          <div className="py-2 pr-2 rounded">
            <SearchIcon className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search domain name"
            value={searchBar}
            onChange={handleSearchBar}
            className=" border-none text-black bg-white outline-none lg:w-full "
          />
          <button
            onClick={() => setInterventionLogDrawOpened(true)}
            className=" bg-white py-1 px-2 rounded"
          >
            <img src={layer1} alt="" />
          </button>
          {/*<Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />*/}
        </S.InputHolder>
      </S.HeroBanner>
      <S.LeadHeading>
        <span>you are at a good place</span>
      </S.LeadHeading>
      <S.SectionUnder>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde a Lorem
          ipsum dolor sit amet consectetur. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit.
        </p>
      </S.SectionUnder>
      <S.IconsSection>
        <div>
          <img src={Redbooth} alt="" />
        </div>
        <div>
          <img src={secured} alt="" />
        </div>
        <div>
          <img src={speed} alt="" />
        </div>
        <div>
          <img src={spectaculus} alt="" />
        </div>
        <div>
          <img src={nira} alt="" />
        </div>
        <div>
          <img src={cloud} alt="" />
        </div>
      </S.IconsSection>
      <S.Container>
        <S.Heading>Hot Domains</S.Heading>
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
        <S.ButtonHolder>
          <button className="border border-black p-3 rounded-md font-semibold mt-8">
            More Domains
          </button>
        </S.ButtonHolder>
        <S.Heading className="mt-10">Premium Domains</S.Heading>
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
        <S.ButtonHolder>
          <button className="border border-black p-3 rounded-md font-semibold mt-8">
            More Domains
          </button>
        </S.ButtonHolder>
        <S.HeadingTwo>
          Explore Business Titles Categorized by Style or field
        </S.HeadingTwo>
        <S.Subtext>
          Discover the ideal business name to match your industry, field or
          preferred
        </S.Subtext>
        <S.SubtextTwo>style</S.SubtextTwo>
        <S.FieldsHolder>
          <Button text="Sports" />
          <Button text="Automotive" />
          <Button text="NGO" />
          <Button text="Kids" />
        </S.FieldsHolder>
        <S.FieldsHolder>
          <Button text="Apparel" />
          <Button text="Entertainment" />
          <Button text="Management" />
          <Button text="Finance" />
        </S.FieldsHolder>
        <S.FieldsHolder>
          <Button text="Education" />
          <Button text="Technology" />
          <Button text="Health & Medical" />
          <Button text="Environment" />
        </S.FieldsHolder>
        <S.FieldsHolder>
          <Button text="Creative" />
          <Button text="Games" />
          <Button text="Furniture" />
          <Button text="Industries" />
        </S.FieldsHolder>
        <S.FieldsHolder>
          <Button text="Food" />
          <Button text="Printing" />
          <Button text="Travel & Local" />
          <Button text="Software and Technology" />
        </S.FieldsHolder>
        <S.FieldsHolder>
          <Button text="Short names" />
          <Button text="Security and Compliance" />
          <Button text="Search & Reference" />
          <Button text="Mobile & Telecommunications" />
        </S.FieldsHolder>
        <S.FieldsHolder>
          <Button text="Farming" />
          <Button text="Luxury & Lifestyle" />
          <Button text="News & Media" />
          <Button text="Manufacturing & Logistics" />
        </S.FieldsHolder>
        <S.FieldsHolder>
          <Button text="Space & Astronomy" />
          <Button text="Retail & eCommerce" />
          <Button text="Gym" />
          <Button text="Events & Promotions" />
        </S.FieldsHolder>
        <S.FieldsHolder>
          <Button text="Social Media" />
          <Button text="Multimedia & Video" />
          <Button text="Pets" />
          <Button text="Arts & Designs" />
        </S.FieldsHolder>
        <S.ButtonHolderTwo>
          <button className="p-3 border border-black rounded-md font-semibold mt-8">
            Explore All Available Names
          </button>
        </S.ButtonHolderTwo>

        <div className="my-10 lg:max-w-[600px] mx-auto">
          <div className="relative">
            <img src={Colons} alt="" className="w-10 lg:w-20" />
            <p className="absolute left-[8%] top-[50%] text-2xl lg:text-3xl font-bold">
              Real Stories from <br /> Real Customers
              <p className="text-base font-normal">
                Get inspired by these stories
              </p>
            </p>
          </div>
          {/* Cards */}
          <div className="mt-24 lg:mt-0 lg:grid lg:grid-cols-2 lg:items-center lg:gap-4">
            <div>
              {/* Card-1 */}
              <div className="rounded-lg shadow-lg p-4">
                <div className="flex items-center gap-4">
                  <div>
                    <img src={Profile} alt="" />
                  </div>
                  <div className="flex">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                </div>
                <div className="flex items-start gap-4 mt-4">
                  <img src={smColons} alt="" />
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aperiam modi dolor quaerat ipsum totam at corrupti unde
                      nam omnis similique nemo, libero voluptas beatae ullam?
                    </p>
                    <p className="text-base font-bold mt-2">Floyd Miles</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* Card-2 */}
              <div className="rounded-lg shadow-lg p-4">
                <div className="flex items-center gap-4">
                  <div>
                    <img src={Profile} alt="" />
                  </div>
                  <div className="flex">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                </div>
                <div className="flex items-start gap-4 mt-4">
                  <img src={smColons} alt="" />
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aperiam modi dolor quaerat ipsum totam at corrupti unde
                      nam omnis similique nemo, libero voluptas beatae ullam?
                    </p>
                    <p className="text-base font-bold mt-2">Floyd Miles</p>
                  </div>
                </div>
              </div>
              {/* Card-2 */}
              <div className="rounded-lg shadow-lg p-4">
                <div className="flex items-center gap-4">
                  <div>
                    <img src={Profile} alt="" />
                  </div>
                  <div className="flex">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                </div>
                <div className="flex items-start gap-4 mt-4">
                  <img src={smColons} alt="" />
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aperiam modi dolor quaerat ipsum totam at corrupti unde
                      nam omnis similique nemo, libero voluptas beatae ullam?
                    </p>
                    <p className="text-base font-bold mt-2">Floyd Miles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Cards */}
          <Drawer
            anchor="right"
            open={interventionLogDrawOpened}
            onClose={handleFilterClose}
            style={{ zIndex: 1300 }}
          >
            <div className={" w-[300px] overflow-auto  scrollbar-hide "}>
              <div className="">
                <Filters
                  maxPrice={maxPrice}
                  minPrice={minPrice}
                  minLength={minLength}
                  maxLength={maxLength}
                  searchInFilter={searchInFilter}
                  searchTypeFilter={searchTypeFilter}
                  sortByFilter={sortByFilter}
                  handleMaxPrice={handleMaxPrice}
                  handleMinPrice={handleMinPrice}
                  handleMinLength={handleMinLength}
                  handleMaxLength={handleMaxLength}
                  handleSearchInFilter={handleSearchInFilter}
                  handleSearchTypeFilter={handleSearchTypeFilter}
                  handleSortByFilter={handleSortByFilter}
                  onClose={handleFilterClose}
                />
              </div>
            </div>
          </Drawer>
        </div>
      </S.Container>
    </>
  );
}

export default HomePage;
