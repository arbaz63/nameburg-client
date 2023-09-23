import AdminPannelNavbar from "../AdminPannelNavbar/AdminPannelNavbar";
import * as S from "./AdminPannelViewDomStyled";
import Show from "../../Images/ShowWhite.png";
import Line from "../../Images/Line 14.png";
import Keywords from "../Keywords/Keywords";
import { useState } from "react";
import NavbarHeader from "../AdminPannel-TopNav/NavbarHeader";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function AdminPannelViewDomains() {
  const { id } = useParams();

  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear() % 100;
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    return `${formattedMonth}-${formattedDay}-${year}`;
  }

  const [data, setData] = useState();
  const [, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/v1/domains/${id}`
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        setError("Error fetching domain details. Please try again.");
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="fixed left-0 top-0 w-[21vw] h-[100vh]">
        <AdminPannelNavbar />
      </div>
      <div className="w-[78vw] ml-[21vw] overflow-x-hidden ">
        <NavbarHeader />
        <main className=" text-white bg-gray-50 ">
          <>
            {data && (
              <div className=" mx-14 overflow-x-hidden ">
                <div className="flex flex-col items-center mt-14 lg:flex-row lg:justify-between">
                  <div>
                    <S.main>
                      <div className="flex justify-between items-center bg-bgOne py-2 px-3 rounded-t-lg">
                        <div className="flex items-center text-white">
                          <img src={Show} alt="" className="w-3" />
                          <span className="text-[10px] ml-1">{data.views}</span>
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-white">
                            {data.name}
                          </div>
                        </div>
                        <div className="invisible lg:visible text-white">
                          <p className="font-semibold text-sm">
                            ${data.currentPrice}
                          </p>
                          <p className="italic text-[10px] opacity-90">
                            This week price
                          </p>
                        </div>
                      </div>
                      <div className="py-14 ">
                        <img src={data.image} alt="" />
                      </div>
                      <div className="hidden lg:flex justify-between items-center bg-bgOne py-2 px-3 rounded-b-lg text-white">
                        <div>
                          <p className="relative font-semibold text-sm after:content-[''] after:absolute after:top-1/2 after:left-0 after:w-3/4 after:h-[1.5px] after:bg-[#ff0808] after:rotate-6">
                            ${data.maxPrice}
                          </p>
                          <p className="italic text-[10px] opacity-90">
                            Actual Price
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold text-sm">-49%</p>
                          <p className="italic text-[10px] opacity-90">OFF</p>
                        </div>
                      </div>
                    </S.main>
                  </div>
                  <div className="rounded-lg w-[360px] ml-[10px] mr-[10px] mt-10 lg:ml-0 lg:mr-0 lg:mt-0 border border-gray-200 shadow-custom bg-white">
                    <div className="p-3  h-[360px]">
                      <div className="text-black text-xl font-montserrat font-extrabold text-center ">
                        {data.name}
                      </div>

                      <div className="flex justify-between bg-gray-100 mt-8 p-1.5 rounded-lg">
                        <span className="font-montserrat text-black ">
                          {data.name}
                        </span>
                        <span>
                          <span className="text-base text-black pr-3">
                            ${data.currentPrice}
                          </span>
                          <span className="text-black">USD</span>
                        </span>
                      </div>
                      <div className="text-black text-xs font-bold font-montserrat pt-5">
                        What you get
                      </div>
                      <span className="text-xs font-montserrat text-black font-medium pt-4">
                        Domain name:{" "}
                        <span className=" font-montserrat text-xs w-full  text-bgOne">
                          {data.name}
                        </span>
                      </span>
                      <div className="text-xs font-montserrat text-black font-medium pt-2">
                        Logo Design
                      </div>
                      <div className="text-xs font-montserrat text-black font-medium pt-2">
                        Ownership Gurantee
                      </div>
                      <div className="pt-2">
                        <img src={Line} alt="" />
                      </div>
                      <div className="flex justify-between pt-6">
                        <div className="text-base font-montserrat text-black">
                          Subtotal
                        </div>
                        <div className="text-black">${data.currentPrice}</div>
                      </div>
                      <div className="flex justify-between pt-1"></div>
                      <div className="flex justify-between pt-4">
                        <div className="text-base font-montserrat text-black font-bold">
                          Total:
                        </div>
                        <div className="text-black font-semibold">
                          ${data.currentPrice}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" text-2xl text-black font-bold text-center mt-14 lg:text-left font-montserrat">
                  Description
                </div>
                <div className="flex flex-row justify-between mb-10">
                  <div className="w-1/2">
                    <div className=" mx-7 text-center lg:mx-0 lg:text-left font-montserrat text-black mt-3">
                      {data.description}
                    </div>
                    <div className=" text-2xl text-black font-bold text-center mt-10 lg:text-left font-montserrat">
                      Keywords
                    </div>
                    <div className=" w-full mr-4 ml-4 lg:mr-0 lg:ml-0">
                      {data.keywords &&
                        data.keywords.map((keyword) => (
                          <div key={keyword}>
                            <Keywords text={keyword} />
                          </div>
                        ))}
                    </div>
                    <div className=" text-2xl text-black font-bold text-center mt-10 lg:text-left font-montserrat">
                      Category
                    </div>
                    <div className="text-base text-center lg:text-left font-montserrat text-black mt-3">
                      {data.category &&
                        data.category.name &&
                        data.category.name}
                    </div>
                  </div>

                  <div className="rounded-lg w-[360px] h-[300px] ml-[10px] mr-[10px] bg-white mt-10 lg:ml-0 lg:mr-0 lg:mt-0 border border-gray-200 shadow-custom ">
                    <div className=" mt-2 font-Montserrat text-xl font-bold text-black text-center mx-auto">
                      Date & Price
                    </div>
                    <div className="mt-7 flex flex-row justify-between px-4 items-center">
                      <div className="font-montserrat text-base text-black ">
                        Date uploaded:
                      </div>
                      <div className=" rounded-lg border bg-gray-50 text-black p-1.5">
                        {formatDate(data.date)}
                      </div>
                    </div>
                    <div className="mt-7 flex flex-row justify-between px-4 items-center">
                      <div className="font-montserrat text-base text-black ">
                        Max Price:
                      </div>
                      <div className=" rounded-lg p-1.5 bg-gray-50 text-black border">
                        ${data.maxPrice}
                      </div>
                    </div>
                    <div className="mt-7 flex flex-row justify-between px-4 items-center">
                      <div className="font-montserrat text-base text-black ">
                        Min Price
                      </div>
                      <div className=" rounded-lg p-1.5 bg-gray-50 text-black border">
                        ${data.minPrice}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        </main>
      </div>
    </>
  );
}

export default AdminPannelViewDomains;
