import AdminPannelNavbar from "../AdminPannelNavbar/AdminPannelNavbar";
import dustbin from "../../Images/bin.svg";
import pen from "../../Images/edit.svg";
import createIconWhite from "../../Images/createWhite.svg";
import { useState, useEffect } from "react";
import NavbarHeader from "../AdminPannel-TopNav/NavbarHeader";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

function AdminPannelAllDomains() {
  const navigate = useNavigate();
  const [domains, setDomains] = useState();
  const [totalPages, setTotalPages] = useState(0);
  const [currentPages, setCurrentPages] = useState(1);
  const [, setData] = useState(null);
  const [, setError] = useState("");
  const [fetchDomains, setFetchDomains] = useState();

  const handlePageClick = (pageNumber) => {
    setCurrentPages(pageNumber);
  };
  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear() % 100;
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    return `${formattedMonth}-${formattedDay}-${year}`;
  }

  const [searchItem, setSearchItem] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        console.log("here");
        const baseUrl = "http://localhost:4000/api/v1/domains";

        const queryParamsFilters = new URLSearchParams({
          page: currentPages,
          limit: 32,
        });

        if (searchItem) {
          queryParamsFilters.set("searchTerm", searchItem);
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
  }, [currentPages, fetchDomains, searchItem]);

  const handleViewClick = (id) => {
    navigate(`/AdminPannel-ViewDomain/${id}`);
  };

  const handleEditClick = (id) => {
    navigate(`/AdminPannel-EditDomain/${id}`);
  };

  const accessToken = localStorage.getItem("accessToken");

  const handleDeleteClick = (id) => {
    console.log("Delete clicked for domain:", id);

    axios
      .delete(`http://localhost:4000/api/v1/domains/${id}`, {
        headers: {
          Authorization: `${accessToken}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Domain successfully DELETED:", response.data);
        setFetchDomains(!fetchDomains);
      })
      .catch((error) => {
        console.error("Error DELETING domain:", error);
      });
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="fixed left-0 top-0 w-[21vw] h-[100vh]">
        <AdminPannelNavbar selectedItem={"AllDomains"} />
      </div>
      <div className="w-[79vw] ml-[21vw]">
        <NavbarHeader
          setSearchItem={setSearchItem}
          searchItem={searchItem}
          setCurrentPages={setCurrentPages}
          purchasePage={false}
        />
        <div className=" bg-adminBg h-screen pt-5 pl-4 pr-14 text-white pb-10 ">
          <div className="w-full flex justify-end">
            <div className="mb-5">
              <button
                className="bg-bgOne gap-2 flex flex-row items-center justify-center py-2 px-4 rounded-md text-white font-semibold font-montserrat "
                onClick={() => {
                  handleNavigation("/AdminPannel");
                }}
              >
                <img src={createIconWhite} alt="" />
                Create Domain
              </button>
            </div>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="w-full text-sm text-center text-black">
              <div className="text-xs text-black uppercase bg-white">
                <div className="grid grid-cols-6">
                  {" "}
                  <div className="px-6 py-3 text-center font-semibold">
                    Domain name
                  </div>
                  <div className="px-6 py-3 font-semibold">Date uploaded</div>
                  <div className="px-6 py-3 font-semibold">Category</div>
                  <div className="px-6 py-3 font-semibold">Price</div>
                  <div className="px-6 py-3 font-semibold">Status</div>
                  <div className="px-6 py-3 font-semibold">Actions</div>
                </div>
              </div>
              <div className="space-y-1">
                {loading ? (
                  <div className="text-center p-5">
                    <CircularProgress color="secondary" />{" "}
                  </div>
                ) : (
                  domains &&
                  domains.map((domain) => (
                    <div
                      key={domain._id}
                      className="bg-white border-b duration-500"
                    >
                      <div className="grid grid-cols-6">
                        <div className="px-6 py-4 font-normal text-gray-900 whitespace-nowrap flex space-x-2 items-center justify-center">
                          <img
                            src={domain.image}
                            alt="Img"
                            className="shadow-lg mr-1 rounded-md w-[50px]"
                          />
                          <div className="text-left truncate w-20">{domain.name}</div>
                        </div>
                        <div className="px-6 py-4 flex justify-center items-center text-center">
                          {formatDate(domain.date)}
                        </div>
                        <div className="px-6 py-4 flex justify-center items-center text-center">
                          {domain.category
                            ? domain.category.name
                            : "No Category"}
                        </div>
                        <div className="px-6 py-4 flex justify-center items-center text-center">
                          ${domain.currentPrice}
                        </div>
                        <div className="px-6 py-4 flex justify-center items-center ">
                          {domain.sold ? (
                            <div className="font-medium text-white bg-green-400 py-[1px] rounded-sm text-xs px-3">
                              Sold
                            </div>
                          ) : (
                            <div className="font-medium text-white bg-yellow-400 py-[1px] rounded-sm text-xs px-2">
                              UnSold
                            </div>
                          )}
                        </div>
                        <div className="flex items-center justify-center px-6 py-4 space-x-3">
                          <div
                            className="font-medium text-white bg-purple-400 cursor-pointer px-2 py-[1px] rounded-sm text-xs mr-1"
                            onClick={() => handleViewClick(domain._id)}
                          >
                            View
                          </div>
                          <div
                            className="cursor-pointer"
                            onClick={() => handleEditClick(domain._id)}
                          >
                            <img src={pen} alt="Edit" />
                          </div>
                          <div
                            className="cursor-pointer"
                            onClick={() => handleDeleteClick(domain._id)}
                          >
                            <img src={dustbin} alt="Delete" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {totalPages > 0 && (
            <div className="flex justify-center pt-5 pb-10">
              <Pagination
                count={totalPages}
                variant="outlined"
                shape="rounded"
                color="secondary"
                page={currentPages}
                onChange={(event, pageNumber) => handlePageClick(pageNumber)}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AdminPannelAllDomains;
