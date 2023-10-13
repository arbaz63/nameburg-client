import * as S from "./AllDomainsStyled";
import { useState, useEffect } from "react";
import Card from "../Card/Card";
import layer1 from "../../Images/layer1.png";
import SearchIcon from "@mui/icons-material/Search";
import CustomAccordion from "../Accordian/Accordian";
import { Drawer } from "@mui/material";
import Filters from "../Filters/Filters";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";
import axiosInstance from "../../axios-config"; // Import the Axios instance

function AllDomainsId() {
  const navigate = useNavigate();

  const [searchBar, setSearchBar] = useState();
  const { id } = useParams();

  const handleSearchBar = (e) => {
    setSearchBar(e.target.value);
    if (!e.target.value) {
      setSearchHit(!searchHit);
      setLoading(true);
      setCurrentPages(1);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [, setData] = useState(null);
  const [, setError] = useState("");
  const [domains, setDomains] = useState();
  const [totalPages, setTotalPages] = useState(0);
  const [currentPages, setCurrentPages] = useState(1);
  const [searchHit, setSearchHit] = useState(false);
  const [fetchFiltersData, setFetchFiltersData] = useState(false);
  const [loading, setLoading] = useState(true);

  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [minLength, setMinLength] = useState(0);
  const [maxLength, setMaxLength] = useState(0);
  const [selectedTDL, setSelectedTDL] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedSearchType, setSelectedSearchType] = useState("Broad Match");
  const [selectedSortFilter, setSelectedSortFilter] = useState("All");
  const [clearAll, setClearAll] = useState(true);

  const [categories, setCategories] = useState();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get("/categories");
        setCategories(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching categories 123. Please try again.");
      }
    };

    fetchCategories();
    // eslint-disable-next-line
  }, []);

  const [selectedSearchIn, setSelectedSearchIn] = useState(id ? id : "All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl = "/domains";

        const queryParamsFilters = new URLSearchParams({
          page: currentPages,
          limit: 32,
          category: id,
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

        if (selectedSearchIn !== "All") {
          queryParamsFilters.set("category", selectedSearchIn);
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
        console.log("-> cat -> ", response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching domains. Please try again.");
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, [currentPages, searchHit, fetchFiltersData]);

  const handlePageClick = (pageNumber) => {
    setCurrentPages(pageNumber);
  };

  const [filtersDrawer, setfiltersDrawer] = useState(false);

  const handleDomainClick = (id) => {
    navigate(`/DomainDetails/${id}`);
  };

  const handleClearAllClick = () => {
    setClearAll(false);
  };

  useEffect(() => {
    if (!clearAll) {
      setMaxPrice(0);
      setMinPrice(0);
      setMinLength(0);
      setMaxLength(0);
      setSelectedSortFilter("All");
      setSelectedSearchType("Board Match");
      setSelectedSearchIn("All");
      setSelectedBrand(null);
      setSelectedTDL(null);
      setClearAll(true);
    }
  }, [clearAll]);

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
    console.log(
      maxPrice,
      minPrice,
      minLength,
      maxLength,
      selectedSearchType,
      selectedSearchIn,
      selectedTDL,
      selectedBrand,
      selectedSortFilter
    );
    setfiltersDrawer(false);
    setFetchFiltersData(!fetchFiltersData);
  };

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
        <S.Heading>All Domains</S.Heading>
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
                category={selectedSearchIn}
                setcategory={setSelectedSearchIn}
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

export default AllDomainsId;
