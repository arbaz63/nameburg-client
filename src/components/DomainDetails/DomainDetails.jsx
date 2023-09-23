import { useNavigate } from "react-router-dom";
import * as S from "./DomainStyled";
import Show from "../../Images/ShowWhite.png";
import Line from "../../Images/Line 14.png";
import Keywords from "../Keywords/Keywords";
import unlock from "../../Images/lockDomain.svg";
import envelope from "../../Images/messageDomain.svg";
import link from "../../Images/SecureDomain.svg";
import cross from "../../Images/removeDomain.svg";
import CircularProgress from "@mui/material/CircularProgress";
import separator from "../../Images/Line 15.png";
import CustomAccordion from "../Accordian/Accordian";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../AuthContext";

function DomainDetails() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const handleNavigation = (id, name, price) => {
    if (isLoggedIn) {
      // Get the existing cart items from local storage
      // Step 1: Retrieve the existing array from local storage (if any)
      const existingCart = localStorage.getItem("cart");

      // Step 2: Parse the existing array from JSON
      let cartArray = existingCart ? JSON.parse(existingCart) : [];

      // Step 3: Check if the item with the same ID already exists in the cart
      const itemExists = cartArray.some((item) => item.id === id);

      // Step 4: If the item doesn't exist, add it to the array
      if (!itemExists) {
        cartArray.push({ id, name, price });

        const updatedCart = JSON.stringify(cartArray);

        // Step 6: Store the JSON array back in local storage
        localStorage.setItem("cart", updatedCart);
      }
      navigate("/PaymentDetails");
    } else {
      navigate('/Sign-in')
    }
  };

  useEffect(() => {
    const viewsIncrement = async () => {
      console.log("id", id);
      try {
        const response = await axios.put(
          `http://localhost:4000/api/v1/domains/${id}/increment-views`
        );

        console.log(response.data);
      } catch (error) {
        // Handle any errors here
        console.log("Error:", error);
      }
    };
    viewsIncrement();
    // eslint-disable-next-line
  }, []);

  const [data, setData] = useState();
  const [, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/v1/domains/${id}`
        );
        setData(response.data);
        // console.log(id, response);
        setLoading(false);
      } catch (error) {
        setError("Error fetching domain details. Please try again.");
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

  // console.log(id, data);

  const [cartError, setCartError] = useState("");
  const [success, setSuccess] = useState("");

  const handleCart = (id, name, price) => {
    if (isLoggedIn) {
      // Get the existing cart items from local storage
      // Step 1: Retrieve the existing array from local storage (if any)
      const existingCart = localStorage.getItem("cart");

      // Step 2: Parse the existing array from JSON
      let cartArray = existingCart ? JSON.parse(existingCart) : [];

      // Step 3: Check if the item with the same ID already exists in the cart
      const itemExists = cartArray.some((item) => item.id === id);

      // Step 4: If the item doesn't exist, add it to the array
      if (!itemExists) {
        cartArray.push({ id, name, price });

        // Step 5: Convert the updated array back to JSON
        const updatedCart = JSON.stringify(cartArray);

        // Step 6: Store the JSON array back in local storage
        localStorage.setItem("cart", updatedCart);
        setSuccess("Item added to cart!");
        console.log(updatedCart);
        setCartError("");
      }

      // Set success message
      // Clear any previous error message
      else {
        // Set error message
        setCartError("Item is already in the cart!");
        setSuccess(""); // Clear any previous success message
      }
      console.log(existingCart);
    } else {
      navigate("/Sign-in");
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSuccess("");
      setCartError("");
    }, 6000);

    // Clear the timeout when the component unmounts to avoid memory leaks
    return () => clearTimeout(timeout);
  }, [success, cartError]);

  return (
    <>
      {loading ? (
        <div className="text-center mt-10">
          <CircularProgress color="secondary" />{" "}
        </div>
      ) : (
        data && (
          <div className="lg:ml-36 lg:mr-36 mt-12 overflow-x-hidden ">
            <div className="flex flex-col items-center lg:flex-row lg:justify-between">
              <div className="w-[350px] lg:w-[550px]">
                <S.main>
                  <div className="flex justify-between items-center bg-bgOne py-2 px-3 rounded-t-lg">
                    <div className="flex items-center text-white">
                      <img src={Show} alt="" className="w-3" />
                      <span className="text-[10px] ml-1">{data.views}</span>
                    </div>
                    <div>
                      {/* eslint-disable-next-line */}
                      <a href="#" className="font-semibold text-sm text-white">
                        {data.name}
                      </a>
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
                  <div className="">
                    <img
                      src={data.image}
                      alt=""
                      className="lg:w-full lg:h-full"
                    />
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
              <div>
                <div className="rounded-lg w-[360px] border ml-[10px] mr-[10px] mt-10 lg:ml-0 lg:mr-0 lg:mt-0 shadow-custom ">
                  <div className="p-3  h-[360px]">
                    <div className="text-black text-xl font-montserrat font-extrabold text-center ">
                      Get Domain
                    </div>
                    <div className="text-xs text-gray-500 text-center ">
                      One time Payment and own the name outright
                    </div>
                    <div className="flex justify-between bg-gray-100 mt-3">
                      <span className="font-montserrat">{data.name}</span>
                      <span>
                        <span className="text-base text-black pr-3">
                          ${data.currentPrice}
                        </span>
                        <span>USD</span>
                      </span>
                    </div>
                    <div className="text-black text-xs font-bold font-montserrat pt-5">
                      What you get
                    </div>
                    <span className="text-xs font-montserrat text-black font-medium pt-4">
                      Domain name:
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
                      <div>${data.currentPrice}</div>
                    </div>
                    <div className="flex justify-between pt-1">
                      <div className="text-base font-montserrat text-black">
                        Discount
                      </div>
                      <div>${data.currentPrice}</div>
                    </div>
                    <div className="flex justify-between pt-4">
                      <div className="text-base font-montserrat text-black font-bold">
                        Total:
                      </div>
                      <div className="text-black font-semibold">
                        ${data.currentPrice}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      handleNavigation(data._id, data.name, data.currentPrice)
                    }
                    className="w-full bg-bgOne py-1 text-white font-Montserrat font-semibold rounded-b-lg "
                  >
                    Buy
                  </button>
                </div>
                <div className="ml-[10px] mr-[10px] lg:ml-0 lg:mr-0 mb-5 mt-5">
                  <button
                    onClick={() =>
                      handleCart(data._id, data.name, data.currentPrice)
                    }
                    className="w-full bg-bgOne py-1 text-white font-Montserrat font-semibold rounded-lg  "
                  >
                    Add to cart
                  </button>
                  {success && (
                    <p className="text-green-500 w-full text-center">
                      {success}
                    </p>
                  )}
                  {cartError && (
                    <p className="text-red-500 w-full text-center">
                      {cartError}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className=" text-2xl text-black font-bold text-center mt-10 lg:text-left font-montserrat">
              Description
            </div>
            <div className=" mx-7 text-center lg:mx-0 lg:text-left lg:w-1/2 font-montserrat mt-3">
              {data.description ? data.description : "No Description"}
            </div>
            <div className=" text-2xl text-black font-bold text-center mt-10 lg:text-left font-montserrat">
              Keywords
            </div>
            <div className=" w-full flex-wrap lg:justify-start justify-center flex lg:w-1/2 mr-4 ml-4 lg:mr-0 lg:ml-0">
              {data.keywords ? (
                data.keywords.map((keyword) => (
                  <div key={keyword}>
                    <Keywords text={keyword} />
                  </div>
                ))
              ) : (
                <div>No Keywords</div>
              )}
            </div>
            <div className=" text-2xl text-black font-bold text-center mt-10 lg:text-left font-montserrat">
              Category
            </div>
            <div className="text-base text-center lg:text-left font-montserrat text-black mt-3">
              {data.category ? data.category.name : "No Category Assigned"}
            </div>
            <div className=" text-2xl text-black font-bold text-center mt-10 lg:text-left font-montserrat">
              How it works
            </div>
            <div className="flex flex-col w-full lg:flex-row mt-5 lg:w-1/2 gap-8 justify-center lg:mt-6">
              <div>
                {/*Unlock Component Wrapper*/}
                <div>
                  <img src={unlock} alt="" className="mx-auto" />
                </div>
                <div className="text-center text-sm mt-3 font-Montserrat text-black lg:mt-5">
                  After your purchase, Nameburg unlocks the domain and prepares
                  it for transfer
                </div>
              </div>
              <div>
                {/*Enlvelope Component Wrapper*/}
                <div>
                  <img src={envelope} alt="" className="  mx-auto lg:mt-2" />
                </div>
                <div className="text-center text-sm mt-3 font-Montserrat text-black lg:mt-10">
                  We email you domain transfer instructions and your unique
                  authorisation code
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src={separator} alt="" className="lg:my-8" />
            </div>
            <div className="flex flex-col w-full lg:flex-row lg:w-1/2 gap-8 justify-center lg:mt-6">
              <div className="mt-5 lg:mt-0">
                {/*Link Component Wrapper*/}
                <div>
                  <img src={link} alt="" className="mx-auto " />
                </div>
                <div className="text-center text-sm font-Montserrat text-black lg:mt-5">
                  We email you a secure download link for your domain pack
                </div>
              </div>
              <div className="lg:pl-9">
                {/* cross Component Wrapper*/}
                <div>
                  <img src={cross} alt="" className=" mx-auto " />
                </div>
                <div className="text-center text-sm mt-3 font-Montserrat text-black lg:mt-2">
                  The name and logos are removed from the Nameburg website and
                  Google search results
                </div>
              </div>
            </div>
          </div>
        )
      )}
      <div className="w-full bg-white lg:ml-36 lg:mr-36 mt-12 overflow-x-hidden ">
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
            <span className="my-4" />
          </div>
        </div>
      </div>
    </>
  );
}

export default DomainDetails;
