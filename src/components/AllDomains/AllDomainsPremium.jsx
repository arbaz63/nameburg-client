import * as S from "./AllDomainsStyled";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import layer1 from "../../Images/layer1.png";
import SearchIcon from "@mui/icons-material/Search";
import CustomAccordion from "../Accordian/Accordian";
import { Drawer } from "@mui/material";
import Filters from "../Filters/Filters";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";

function AllDomainsPremium() {
  const navigate = useNavigate();
  const [, setData] = useState(null);
  const [, setError] = useState("");
  const [domains, setDomains] = useState();
  const [totalPages, setTotalPages] = useState(0);
  const [currentPages, setCurrentPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const handlePageClick = (pageNumber) => {
    setCurrentPages(pageNumber);
  };

  const [filtersDrawer, setfiltersDrawer] = useState(false);
  const [clearAll, setClearAll] = useState(true);

  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [minLength, setMinLength] = useState(0);
  const [maxLength, setMaxLength] = useState(0);
  const [selectedTDL, setSelectedTDL] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [category, setcategory] = useState("All");
  const [selectedSearchType, setSelectedSearchType] = useState("Broad Match");
  const [selectedSortFilter, setSelectedSortFilter] = useState("views");

  const [searchBar, setSearchBar] = useState();
  const [searchHit, setSearchHit] = useState(false);
  const [searchIn, setSearchIn] = useState(false);
  const [fetchFiltersData, setFetchFiltersData] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl = "http://localhost:4000/api/v1/domains";

        const queryParamsFilters = new URLSearchParams({
          page: currentPages,
          limit: 32,
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

        // if (category !== "All") {
        //   queryParamsFilters.set("category", category);
        // }

        if (selectedSortFilter !== "All") {
          queryParamsFilters.set("sort", selectedSortFilter);
        }

        const apiUrl = `${baseUrl}/?${queryParamsFilters.toString()}`;

        const response = await axios.get(`${apiUrl}`);
        setData(response.data);
        setDomains(response.data.domains);
        setTotalPages(response.data.totalPages);
        setCurrentPages(response.data.currentPage);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching domains. Please try again.");
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, [currentPages, searchHit, fetchFiltersData]);

  const handleSearchBar = (e) => {
    setSearchBar(e.target.value);
    if (!e.target.value) {
      setSearchHit(!searchHit);
      setLoading(true);
      setCurrentPages(1);
    }
  };

  const handleDomainClick = (id) => {
    navigate(`/DomainDetails/${id}`);
  };

  const handleClearAllClick = () => {
    setClearAll(false);
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

  const haldleSearch = () => {
    console.log("->>>", searchBar);
    setSearchHit(!searchHit);
    setLoading(true);
    setCurrentPages(1);
  };

  const handleSave = () => {
    setCurrentPages(1);
    setfiltersDrawer(false);
    setFetchFiltersData(!fetchFiltersData);
  };

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

      <S.Container>
        <S.Heading>All Premium Domains</S.Heading>

        {loading ? (
          <div className="text-center">
            <CircularProgress color="secondary" />{" "}
          </div>
        ) : domains && domains.length > 0 ? (
          <>
            <S.IconsHolder>
              {domains.slice(0, 32).map((domain) => (
                <div
                  key={domain.id}
                  onClick={() => handleDomainClick(domain._id)}
                  className="cursor-pointer"
                >
                  <Card domainData={domain} />
                </div>
              ))}
            </S.IconsHolder>
          </>
        ) : (
          <div className="text-center"> No Domains To Show </div>
        )}
      </S.Container>

      {totalPages > 0 && (
        <div className="flex justify-center mt-10">
          {/* Render your pagination component here */}
          <Pagination
            count={totalPages}
            variant="outlined"
            shape="rounded"
            color="secondary"
            page={currentPages} // Set the current page
            onChange={(event, pageNumber) => handlePageClick(pageNumber)} // Handle page number click
          />
        </div>
      )}

      <div className="w-full bg-white lg:pl-36 lg:mr-36 mt-12 overflow-x-hidden ">
        <div className=" text-2xl text-black font-bold text-center mt-10 lg:text-left font-Montserrat lg:mb-7">
          Frequently Asked Questions {"(FAQ)"}
        </div>
        <div className="lg:w-1/2 w-full">
          <CustomAccordion />
          <div className="w-full">
            <hr className="my-4 mx-2" />
          </div>
          <CustomAccordion />
          <div>
            <hr className="my-4 mx-2" />
          </div>
          <CustomAccordion />
          <div>
            <hr className="my-4 mx-2" />
          </div>
          <CustomAccordion />
          <div>
            <div className="my-4 mb-3" />
          </div>
        </div>
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
    </>
  );
}

export default AllDomainsPremium;
