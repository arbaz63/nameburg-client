import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios-config"; // Import the Axios instance
import pdf from "../../Images/pdf.svg";
import jsPDF from "jspdf";

export const PurchaseHistory = () => {
  const accessToken = localStorage.getItem("accessToken");
  const buyerId = localStorage.getItem("userId");

  const [purchases, setPurchases] = useState();

  useEffect(() => {
    console.log(buyerId);
    const fetchData = async () => {
      try {
        const responseTwo = await axiosInstance.get(
          `/purchases/buyer/${buyerId}`,
          {
            headers: {
              Authorization: `${accessToken}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log(responseTwo.data.purchases);
        setPurchases(responseTwo.data.purchases);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // Months are 0-based
    const year = date.getUTCFullYear() % 100; // Get the last two digits of the year

    // Pad day and month with leading zeros if needed
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    // Combine the formatted values
    return `${formattedMonth}-${formattedDay}-${year}`;
  }

  const InvoicePdf = (props) => {
    return (
      <div id={`invoice-content-${props._id}`} className=" bg-white text-[4px]">
        <div className="flex flex-col justify-between w-full">
          <div className="flex flex-col">
            <h2 className="text-sm font-semibold">Invoice Details</h2>
            <p className="text-gray-600 mt-3">
              Invoice Date: {new Date().toLocaleDateString()}
            </p>
          </div>
          <div className="">Invoice ID #: {props.invoiceNo}</div>
        </div>
        <div className="">Bill To: {props.buyer}</div>
        <div className="mt-2">
          <table className="w-fit border-collapse border">
            <thead>
              <tr>
                <th className="p-2 text-left font-semibold bg-gray-100 border">
                  Domain Name
                </th>
                <th className="p-2 text font-semibold bg-gray-100 border">
                  Domain Id
                </th>
                <th className="p-2 text font-semibold bg-gray-100 border">
                  Domain Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">{props.name}</td>
                <td className="p-2 text border">{props._id}</td>
                <td className="p-2 text border">${props.currentPrice}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-2">
          <p className="">
            <span className="font-semibold">
              Total Amount: ${props.currentPrice}
            </span>
          </p>
          <p className="text font-semibold ">
            <span className="font-semibold">
              Total Amount Paid: ${props.currentPrice}
            </span>
          </p>
        </div>
      </div>
    );
  };

  const generatePDF = (domainID) => {
    console.log(" GP ->", domainID);
    // Create a new jsPDF instance with custom settings
    const doc = new jsPDF({
      unit: "mm",
      format: "letter", // Use 'letter' size paper
      orientation: "portrait", // Use 'portrait' orientation (you can also use 'landscape')
    });

    doc.html(document.querySelector(`#invoice-content-${domainID}`), {
      callback: function (pdf) {
        pdf.save(`invoice-${domainID}.pdf`);
      },
    });
  };

  return (
    <div className="h-screen">
      <div className="text-3xl text-black flex justify-center my-5 font-extrabold pt-10 font-Montserrat">
        Purchase History
      </div>

      <div className="relative overflow-x-auto shadow-lg mt-5 border m-5 sm:rounded-lg">
        <div className="lg:w-full w-max text-sm text-center text-black">
          <div className="text-xs text-black uppercase bg-white">
            <div className="grid grid-cols-5 overflow-x-scroll">
              <div className="px-6 py-3 text-center font-semibold">
                Domain name
              </div>
              <div className="px-6 py-3 font-semibold">Date</div>
              <div className="px-6 py-3 font-semibold">InvoiceID</div>
              <div className="px-6 py-3 font-semibold">Price</div>
              <div className="px-6 py-3 font-semibold">download Invoice</div>
            </div>
          </div>
          <hr className="w-full" />

          <div className="space-y-1">
            {purchases ? (
              purchases.map((purchase) => (
                <div
                  key={purchase._id}
                  className="bg-white border-b duration-500"
                >
                  {purchase.domains.map((domain, index) => (
                    <>
                      <div className="grid grid-cols-5">
                        <div className="px-6 py-4 font-normal text-gray-900 whitespace-nowrap flex space-x-2 items-center justify-center">
                          <img
                            src={domain.image}
                            alt="Img"
                            className="shadow-lg mr-1 rounded-md w-[50px]"
                          />
                          <div>{domain.name}</div>{" "}
                        </div>
                        <div className="px-6 py-4 flex justify-center items-center text-center">
                          {formatDate(purchase.purchaseDate)}
                        </div>
                        <div className="px-6 py-4 flex justify-center items-center text-center">
                          {purchase.invoiceNo}
                        </div>
                        <div className="px-6 py-4 flex justify-center items-center text-center">
                          ${domain.currentPrice}
                        </div>
                        <div className="px-6 py-4 flex justify-center items-center">
                          <div
                            onClick={() => generatePDF(domain._id)}
                            className="cursor-pointer"
                          >
                            <div className="hidden">
                              <InvoicePdf
                                name={domain.name}
                                _id={domain._id}
                                currentPrice={domain.currentPrice}
                                invoiceNo={purchase.invoiceNo}
                                buyer={purchase.buyer.fullName}
                              />
                            </div>
                            <img src={pdf} alt={"download"} />
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              ))
            ) : (
              <div className="p-10"> There Are No Purchases Yet</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
