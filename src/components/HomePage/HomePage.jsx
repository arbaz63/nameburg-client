import * as S from "./HomePageStyled";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import layer1 from "../../Images/filter.svg";
import Redbooth from "../../Images/redbooth.svg";
import secured from "../../Images/securedImunify.svg";
import speed from "../../Images/litespeed.svg";
import spectaculus from "../../Images/softaculous.svg";
import nira from "../../Images/nira.svg";
import cloud from "../../Images/cloudfare.svg";
import Colons from "../../Images/colons.png";
import smColons from "../../Images/Quote.svg";
import ProfileImage from "../../Images/floydImage.svg";
import ProfileImageOne from "../../Images/ProfileImageOne.svg";
import ProfileImageTwo from "../../Images/ProfileImageTwo.svg";
import CircularProgress from "@mui/material/CircularProgress";
import star from "../../Images/starGold.svg";
import SearchIcon from "@mui/icons-material/Search";
import { Drawer } from "@mui/material";
import Filters from "../Filters/Filters";
import { useNavigate } from "react-router-dom";
import axiosInstance from '../../axios-config'; // Import the Axios instance

function HomePage() {
  // http://nameburg.com/api/v1/domains/?page=1&limit=2&minPrice=2000&maxPrice=10000&extension=.io&keywords=hello,world,
  // all&sort=high-low&minLength=2&maxLength=10&searchTerm=samp&category=64e8b28a9b5cc68f30994e7c

  const navigate = useNavigate();
  const [, setData] = useState(null);
  const [, setError] = useState("");
  const [domains, setDomains] = useState();
  const [premiumDomains, setPremiumDomains] = useState();
  const [, setTotalPages] = useState(0);
  const [currentPages, setCurrentPages] = useState(1);
  const [searchHit, setSearchHit] = useState(false);
  const [fetchFiltersData, setFetchFiltersData] = useState(false);
  const [loading, setLoading] = useState(true);
  const [premiumLoading, setPremiumLoading] = useState(true);

  const [catLoading, setCatLoading] = useState(true);
  const [categories, setCategories] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl = "/domains";

        const queryParamsFilters = new URLSearchParams({
          page: currentPages,
          limit: 8,
          sold: false,
        });

        if (searchBar) {
          queryParamsFilters.set("searchTerm", searchBar);
        }

        if (maxPrice !== 0) {
          queryParamsFilters.set("maxPrice", maxPrice);
        }

        if (minPrice !== 0) {
          queryParamsFilters.set("minPrice", minPrice);
        }

        if (minLength !== 0) {
          queryParamsFilters.set("minLength", minLength);
        }

        if (maxLength !== 0) {
          queryParamsFilters.set("maxLength", maxLength);
        }

        if (category !== "All") {
          queryParamsFilters.set("category", category);
        }

        if (selectedSortFilter !== "All") {
          queryParamsFilters.set("sort", selectedSortFilter);
        }

        const apiUrl = `${baseUrl}/?${queryParamsFilters.toString()}`;

        const response = await axiosInstance.get(`${apiUrl}`);
        setData(response.data);
        setDomains(response.data.domains);
        setTotalPages(response.data.totalPages);
        setCurrentPages(response.data.currentPage);
        console.log(response.data);
        setLoading(false); // Set loading to false when data is successfully fetched
      } catch (error) {
        setError("Error fetching domains. Please try again.");
        setLoading(false); // Set loading to false when data is successfully fetched
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, [searchHit, fetchFiltersData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl = "/domains";

        const queryParamsFilters = new URLSearchParams({
          page: currentPages,
          limit: 8,
          sold: false,
          sort: "views",
        });

        if (searchBar) {
          queryParamsFilters.set("searchTerm", searchBar);
        }

        if (maxPrice !== 0) {
          queryParamsFilters.set("maxPrice", maxPrice);
        }

        if (minPrice !== 0) {
          queryParamsFilters.set("minPrice", minPrice);
        }

        if (minLength !== 0) {
          queryParamsFilters.set("minLength", minLength);
        }

        if (maxLength !== 0) {
          queryParamsFilters.set("maxLength", maxLength);
        }

        if (category !== "All") {
          queryParamsFilters.set("category", category);
        }

        if (selectedSortFilter !== "All") {
          queryParamsFilters.set("sort", selectedSortFilter);
        }

        const apiUrl = `${baseUrl}/?${queryParamsFilters.toString()}`;

        const response = await axiosInstance.get(`${apiUrl}`);
        // setData(response.data);
        setPremiumDomains(response.data.domains);
        // setTotalPages(response.data.totalPages);
        // setCurrentPages(response.data.currentPage);
        console.log("premium ->> ", response.data);
        setPremiumLoading(false); // Set loading to false when data is successfully fetched
      } catch (error) {
        setError("Error fetching domains. Please try again.");
        setPremiumLoading(false); // Set loading to false when data is successfully fetched
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, [searchHit, fetchFiltersData]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get(
          "/categories"
        );
        setCategories(response.data);
        console.log(response.data);
        setCatLoading(false);
      } catch (error) {
        setError("Error fetching categories 123. Please try again.");
        setCatLoading(false);
      }
    };

    fetchCategories();
    // eslint-disable-next-line
  }, []);

  const [searchBar, setSearchBar] = useState();

  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [minLength, setMinLength] = useState(0);
  const [maxLength, setMaxLength] = useState(0);
  const [clearAll, setClearAll] = useState(true);

  const handleClearAllClick = () => {
    setClearAll(false);
  };
  const [selectedTDL, setSelectedTDL] = useState();
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [category, setcategory] = useState("All");
  const [selectedSearchType, setSelectedSearchType] = useState("Broad Match");
  const [selectedSortFilter, setSelectedSortFilter] = useState("All");

  useEffect(() => {
    if (!clearAll) {
      setMaxPrice(0);
      setMinPrice(0);
      setMinLength(0);
      setMaxLength(0);
      setSelectedSortFilter("All");
      setSelectedSearchType("Board Match");
      setcategory("All");
      setSelectedBrand(null);
      setSelectedTDL(null);
      setClearAll(true);
    }
  }, [clearAll]);

  const handleSave = () => {
    setCurrentPages(1);
    console.log(
      maxPrice,
      minPrice,
      minLength,
      maxLength,
      selectedSearchType,
      category,
      selectedTDL,
      selectedBrand,
      selectedSortFilter
    );
    setfiltersDrawer(false);
    setFetchFiltersData(!fetchFiltersData);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSearchBar = (e) => {
    setSearchBar(e.target.value);
    if (!e.target.value) {
      setSearchHit(!searchHit);
      setLoading(true);
      setPremiumLoading(true)
      setCurrentPages(1);
    }
  };
  const haldleSearch = () => {
    console.log("->>>", searchBar);
    setSearchHit(!searchHit);
    setLoading(true);
    setPremiumLoading(true)
    setCurrentPages(1);
  };

  const [filtersDrawer, setfiltersDrawer] = useState(false);

  const handleDomainClick = (id) => {
    navigate(`/DomainDetails/${id}`);
  };

  const handleFilterClose = () => {
    setfiltersDrawer(false);
  };

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

  const handelMoreDomain = () => {
    navigate("/AllDomains");
  };

  const handleCategoryClick = (id) => {
    navigate(`/AllDomains/${id}`);
  };

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
          <button
            onClick={() => setfiltersDrawer(true)}
            className=" bg-white py-1 px-2 rounded"
          >
            <img src={layer1} alt="" />
          </button>
          <input
            type="text"
            placeholder="Search domain name"
            value={searchBar}
            onChange={handleSearchBar}
            className=" border-none text-black bg-white outline-none lg:w-full "
          />

          <div
            className="py-2 px-3 mx-[2px] rounded bg-bgOne cursor-pointer"
            onClick={haldleSearch}
          >
            <SearchIcon className="text-white" />
          </div>
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
        {loading ? (
          <div className="text-center">
            <CircularProgress color="secondary" />{" "}
          </div>
        ) : domains && domains.length > 0 ? (
          <>
            <S.IconsHolder>
              {domains.slice(0, 8).map((domain) => (
                <div
                  key={domain.id}
                  onClick={() => handleDomainClick(domain._id)}
                  className="cursor-pointer"
                >
                  <Card domainData={domain} />
                </div>
              ))}
            </S.IconsHolder>
            <S.ButtonHolder>
              <button
                className="border border-black p-3 rounded-md font-semibold mt-8 hover:bg-gray-200"
                onClick={handelMoreDomain}
              >
                More Domains
              </button>
            </S.ButtonHolder>
          </>
        ) : (
          <div className="text-center"> No Domains To Show </div>
        )}

        <S.Heading className="mt-10">Premium Domains</S.Heading>
        {premiumLoading ? (
          <div className="text-center">
            <CircularProgress color="secondary" />{" "}
          </div>
        ) : premiumDomains && premiumDomains.length > 0 ? (
          <>
            <S.IconsHolder>
              {premiumDomains.slice(0, 8).map((domain) => (
                <div
                  key={domain.id}
                  onClick={() => handleDomainClick(domain._id)}
                  className="cursor-pointer"
                >
                  <Card domainData={domain} />
                </div>
              ))}
            </S.IconsHolder>
            <S.ButtonHolder>
              <button
                className="border border-black p-3 rounded-md font-semibold mt-8 hover:bg-gray-200"
                onClick={() => {
                  navigate("/AllDomainsPremium");
                }}
              >
                More Premium Domains
              </button>
            </S.ButtonHolder>
          </>
        ) : (
          <div className="text-center"> No Domains To Show </div>
        )}

        <div>
          <S.HeadingTwo>
            Explore Business Titles Categorized by Style or field
          </S.HeadingTwo>
          <S.Subtext>
            Discover the ideal business name to match your industry, field or
            preferred
          </S.Subtext>
          <S.SubtextTwo>style</S.SubtextTwo>
          <S.FieldsHolder>
            {catLoading ? (
              <div className="text-center">
                <CircularProgress color="secondary" />{" "}
              </div>
            ) : categories ? (
              categories.map((category) => (
                <div key={category.id}>
                  <Button
                    text={category.name}
                    handleCategoryClick={handleCategoryClick}
                    id={category._id}
                  />
                </div>
              ))
            ) : (
              <div className="text-center"> No Categories To Show </div>
            )}
          </S.FieldsHolder>
          <S.ButtonHolderTwo>
            <button
              className="p-3 border border-black rounded-md font-semibold mt-8 hover:bg-gray-200"
              onClick={() => {
                navigate("/AllCategories");
              }}
            >
              Explore All Available Names
            </button>
          </S.ButtonHolderTwo>
        </div>

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
                    <img src={ProfileImage} alt="" />
                  </div>
                  <div className="flex space-x-1">
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
              <div className="rounded-lg shadow-lg p-4 w-full lg:w-[380px] lg:mt-0 mt-4">
                <div className="flex items-center gap-4">
                  <div>
                    <img src={ProfileImageOne} alt="" />
                  </div>
                  <div className="flex space-x-1">
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
                    <p className="text-base font-bold mt-2">Jane Coope</p>
                  </div>
                </div>
              </div>
              {/* Card-2 */}
              <div className="rounded-lg shadow-lg p-4 lg:mt-6 mt-4 w-full lg:w-[300px]">
                <div className="flex items-center gap-4">
                  <div>
                    <img src={ProfileImageTwo} alt="" />
                  </div>
                  <div className="flex space-x-1">
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
                      Aperiam modi
                    </p>
                    <p className="text-base font-bold mt-2">Kristin Watson</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Cards */}
          <Drawer
            anchor="right"
            open={filtersDrawer}
            onClose={handleFilterClose}
            style={{ zIndex: 1300 }}
          >
            <div
              className={" w-full md:w-[350px] overflow-auto  scrollbar-hide "}
            >
              <div className="">
                <Filters
                  maxPrice={maxPrice}
                  minPrice={minPrice}
                  minLength={minLength}
                  maxLength={maxLength}
                  handleMaxPrice={handleMaxPrice}
                  handleMinPrice={handleMinPrice}
                  handleMinLength={handleMinLength}
                  handleMaxLength={handleMaxLength}
                  onClose={handleFilterClose}
                  handleClearAllClick={handleClearAllClick}
                  handleSave={handleSave}
                  selectedTDL={selectedTDL}
                  setSelectedTDL={setSelectedTDL}
                  setSelectedBrand={setSelectedBrand}
                  selectedBrand={selectedBrand}
                  category={category}
                  setcategory={setcategory}
                  selectedSearchType={selectedSearchType}
                  setSelectedSearchType={setSelectedSearchType}
                  selectedSortFilter={selectedSortFilter}
                  setSelectedSortFilter={setSelectedSortFilter}
                  setClearAll={setClearAll}
                  clearAll={clearAll}
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
