import * as S from "./PaymentDetailsStyled";
import { useState, useEffect } from "react";
import Line from "../../Images/Line 14.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import axiosInstance from '../../axios-config'; // Import the Axios instance
import { useStripe, useElements } from "@stripe/react-stripe-js";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import Modal from "@mui/material/Modal";
import { PaymentModel } from "./PaymentModel";
import { useNavigate } from "react-router-dom";

function PaymentDetails() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [companyName, setCompanyName] = useState();
  const [streetAddress, setStreetAddress] = useState();
  const [appartment, setAppartment] = useState();
  const [holderName, setHolderName] = useState();
  const [openModal, setOpenModal] = useState(false); // State for modal open/close
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleName = (e) => {
    setName(e.target.value);
    setNameError("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };
  const handleCompanyName = (e) => {
    setCompanyName(e.target.value);
    setCompanyNameError("");
  };
  const handleStreetAddress = (e) => {
    setStreetAddress(e.target.value);
    setStreetAddressError("");
  };
  const handleAppartment = (e) => {
    setAppartment(e.target.value);
    setAppartmentError("");
  };
  const handleHolderName = (e) => {
    setHolderName(e.target.value);
    setHolderNameError("");
  };

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [companyNameError, setCompanyNameError] = useState("");
  const [streetAddressError, setStreetAddressError] = useState("");
  const [appartmentError, setAppartmentError] = useState("");
  const [holderNameError, setHolderNameError] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [expiryDateError, setExpiryDateError] = useState("");
  const [cvcError, setCvcError] = useState("");
  const [payment, setPayment] = useState(false);

  const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const handlePayment = () => {
    console.log("here");
    setNameError("");
    setEmailError("");
    setCompanyNameError("");
    setStreetAddressError("");
    setAppartmentError("");
    setHolderNameError("");
    setCardNumberError("");
    setExpiryDateError("");
    setCvcError("");
    let check = true;

    if (!name) {
      setNameError("Name is required.");
      check = false;
    }
    if (!email) {
      setEmailError("Email is required.");
      check = false;
    } else {
      const isValidEmail = emailPattern.test(email);
      if (!isValidEmail) {
        setEmailError("Email is Invalid.");
        check = false;
      }
    }
    if (!streetAddress) {
      setStreetAddressError("Address is required.");
      check = false;
    }
    if (!appartment) {
      setAppartmentError("Apt No is required.");
      check = false;
    }
    if (!holderName) {
      setHolderNameError("Holder's Name is required.");
      check = false;
    }

    if (!check) {
      return false;
    } else {
      setPayment(!payment);
      return true;
    }
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleShopping = () => {
    setOpenModal(false);
    navigate("/");
  };

  const handleRetry = () => {
    setOpenModal(false);
  };

  const accessToken = localStorage.getItem("accessToken");
  const userId = localStorage.getItem("userId");

  const [, setCart] = useState([]);
  const [domainIds, setDomainIds] = useState([]);
  const [nameArray, setNameArray] = useState([]);
  const [price, setPrice] = useState();
  const [priceArr, setPriceArr] = useState();

  const getCartFromLocalStorage = () => {
    const existingCart = localStorage.getItem("cart");
    const cartArray = existingCart ? JSON.parse(existingCart) : [];
    setCart(cartArray);
    const idArray = cartArray.map((item) => item.id);
    const nameArr = cartArray.map((item) => item.name);
    const priceArray = cartArray.map((item) => item.price);

    const totalPrice = cartArray.reduce(
      (accumulator, item) => accumulator + item.price,
      0
    );
    setDomainIds(idArray);
    setNameArray(nameArr);
    setPrice(totalPrice);
    setPriceArr(priceArray);
  };

  useEffect(() => {
    getCartFromLocalStorage();
    // eslint-disable-next-line
  }, []);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!handlePayment()) {
      console.log("in if");
      setIsSubmitting(false);

      return;
    } else {
      console.log("in else");
      if (!stripe || !elements) {
        return;
      }

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardNumberElement),
      });

      if (error) {
        console.log("the error", error);
        setCardNumberError(error.message);
        setIsSubmitting(false);
      } else {
        console.log("Payment method created:", paymentMethod, paymentMethod.id);

        if (paymentMethod && paymentMethod.id) {
          try {
            // Make an API request using Axios
            const response = await axiosInstance.post(
              "http://localhost:4000/api/v1/stripe/payment",
              {
                paymentMethodId: paymentMethod.id,
                amount: price,
              },
              {
                headers: {
                  Authorization: `${accessToken}`, // Assuming it's a Bearer token
                  "Content-Type": "application/json",
                },
              }
            );

            setPaymentSuccess(response.data.success);
            setOpenModal(true);
            setIsSubmitting(false);

            // Check if the API request was successful
            if (response.data.success) {
              console.log("Payment successful:", response.data.success);

              const responseTwo = await axiosInstance.post(
                "http://localhost:4000/api/v1/purchases",
                {
                  domains: domainIds,
                  buyer: userId,
                },
                {
                  headers: {
                    Authorization: `${accessToken}`,
                    "Content-Type": "application/json",
                  },
                }
              );
              console.log("2nd api responce -> ", responseTwo);
            } else {
              console.error("Payment failed:", response.data.success);
              // setPaymentSuccess(false);
              // setOpenModal(true);
            }
          } catch (apiError) {
            console.error("API request error:", apiError);
            setPaymentSuccess(false);
            setOpenModal(true);
            setIsSubmitting(false)
          }
        }
      }
    }
  };

  return (
    <>
      <S.ParentContainer>
        <S.TopText>
          <div
            onClick={handleGoBack}
            className="cursor-pointer flex justify-center items-center"
          >
            <ArrowBackIosIcon />
            <span className="text-[10px] lg:text-sm font-Montserrat">Back</span>
          </div>
          <div className="flex justify-center items-center ">
            <span className="text-[10px] lg:text-sm font-montserrat font-medium ">
              Get domain
            </span>
            <span>
              <ArrowLeftIcon />
            </span>
            <span className="text-bgOne text-[10px] lg:text-sm font-Montserrat">
              Your details & Payment information
            </span>
          </div>
        </S.TopText>
        <S.Conatiner>
          <S.PaymentMethods>
            <div className="px-3">
              {/* <div className="flex flex-col w-full gap-4 lg:flex-row lg:justify-center lg:gap-7  ">
                <div>
                  <button className="bg-black py-2 px-8 w-full rounded-lg">
                    <img src={ApplePay} alt="" className="mx-auto lg:mx-0" />
                  </button>
                </div>
                <div>
                  <button className="bg-yellow-400 py-2 px-7 w-full rounded-lg">
                    <img src={Paypal} alt="" className="mx-auto lg:mx-0" />
                  </button>
                </div>
                <div>
                  <button className="bg-black py-2 px-8 w-full rounded-lg">
                    <img src={GPay} alt="" className="mx-auto lg:mx-0" />
                  </button>
                </div>
              </div> */}
              {/* <div className="flex items-center justify-center pt-5 gap-2">
                <span className="w-44 h-[1px] bg-gray-300"></span>
                <span className="text-gray-300 font-semibold">OR</span>
                <span className="w-44 h-[1px] bg-gray-300"></span>
              </div> */}
              <div className=" text-lg font-bold flex justify-center font-montserrat text-black text-left pt-4">
                Payment Details
              </div>

              <S.Heading>Your Details:</S.Heading>
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={handleName}
                className={`border rounded-md pl-4 mt-2 h-[40px] w-full ${
                  nameError ? "border-red-500" : "border-gray-200"
                }`}
              />
              {nameError && <p className="text-red-500">{nameError}</p>}

              {/* Email */}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
                className={`border rounded-md pl-4 mt-2 h-[40px] w-full ${
                  emailError ? "border-red-500" : "border-gray-200"
                }`}
              />
              {emailError && <p className="text-red-500">{emailError}</p>}
              <S.Heading>Billing address</S.Heading>
              <input
                type="text"
                placeholder="Company name (optional)"
                value={companyName}
                onChange={handleCompanyName}
                className=" border border-gray-200 rounded-md pl-4 mt-2 h-[40px] w-full"
              />
              <div className="flex flex-row w-full gap-2">
                <div className="w-[70%]">
                  <input
                    type="text"
                    placeholder="Street address"
                    value={streetAddress}
                    onChange={handleStreetAddress}
                    className={`border rounded-md pl-4 mt-2 h-[40px] w-full ${
                      streetAddressError ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                  {streetAddressError && (
                    <p className="text-red-500">{streetAddressError}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Apt/Suite"
                    value={appartment}
                    onChange={handleAppartment}
                    className={`border rounded-md pl-4 mt-2 h-[40px] w-full ${
                      appartmentError ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                  {appartmentError && (
                    <p className="text-red-500">{appartmentError}</p>
                  )}
                </div>
              </div>
              <S.Heading>Payment information:</S.Heading>
            </div>
            <div className="px-3">
              <input
                type="text"
                placeholder="Card holder name"
                value={holderName}
                onChange={handleHolderName}
                className={`border rounded-md pl-4 mt-2 h-[40px] w-full ${
                  holderNameError ? "border-red-500" : "border-gray-200"
                }`}
              />
              {holderNameError && (
                <p className="text-red-500">{holderNameError}</p>
              )}
            </div>
            <form onSubmit={handleSubmit}>
              <div
                className={`border rounded-md pl-4 mt-2 h-[40px]  mx-3 w-inherit ${
                  cardNumberError ? "border-red-500" : "border-gray-200"
                }`}
              >
                <CardNumberElement
                  id="card-number"
                  options={{
                    style: {
                      base: {
                        fontSize: "15px",
                        lineHeight: "40px",
                        "::placeholder": {
                          color: "#bcc0c9",
                        },
                      },
                    },
                    placeholder: "Card Number",
                  }}
                />
              </div>
              {cardNumberError && (
                <p className="text-red-500 mx-3">{cardNumberError}</p>
              )}

              <div className="flex flex-row  gap-2 mx-3 w-inherit">
                <div className="w-1/2">
                  <div
                    className={`border rounded-md pl-4 mt-2 h-[40px] w-full ${
                      expiryDateError ? "border-red-500" : "border-gray-200"
                    }`}
                  >
                    <CardExpiryElement
                      id="card-expiry"
                      options={{
                        style: {
                          base: {
                            fontSize: "15px",
                            lineHeight: "40px",
                            "::placeholder": {
                              color: "#bcc0c9",
                            },
                          },
                        },
                        placeholder: "Expiry Date",
                      }}
                    />
                  </div>
                </div>
                <div className="w-1/2">
                  <div
                    className={`border rounded-md pl-4 mt-2 h-[40px] w-full ${
                      cvcError ? "border-red-500" : "border-gray-200"
                    }`}
                  >
                    <CardCvcElement
                      id="card-cvc"
                      options={{
                        style: {
                          base: {
                            fontSize: "15px",
                            lineHeight: "40px",
                            "::placeholder": {
                              color: "#bcc0c9",
                            },
                          },
                        },
                        placeholder: "CVC",
                      }}
                    />
                  </div>
                  {cvcError && <p className="text-red-500">{cvcError}</p>}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2 mt-5 text-white font-semibold text-sm rounded-md rounded-t-none  bg-bgOne"
                disabled={isSubmitting} // Disable the button when submitting
              >
                {isSubmitting ? "Submitting..." : "Pay now"}
              </button>
            </form>
            {/* </div> */}
          </S.PaymentMethods>

          <div className="  border border-gray-200 mx-auto lg:mx-0  rounded-lg p-3 pb-10 border h-fit w-[350px] lg:w-[460px] ">
            <div className="text-black text-xl font-montserrat font-extrabold text-center ">
              Get Domain
            </div>
            <div className="text-xs text-gray-500 text-center ">
              One time Payment and own the name outright
            </div>
            {nameArray.map((name, index) => (
              <div
                key={index}
                className="flex justify-between bg-gray-100 mt-3 px-1 rounded-md"
              >
                <span className="font-montserrat">{name}</span>
                <span>
                  <span className="text-base text-black pr-3">
                    ${priceArr[index]}
                  </span>
                  <span>USD</span>
                </span>
              </div>
            ))}
            {/* <div className="text-black text-xs font-bold font-montserrat pt-5">
              What you get
            </div>
            <span className="text-xs font-montserrat text-black font-medium pt-4">
              Domain name:
              <span className=" font-montserrat text-xs w-full  text-bgOne">
                Zylo.com
              </span>
            </span>
            <div className="text-xs font-montserrat text-black font-medium pt-2">
              Logo Design
            </div>
            <div className="text-xs font-montserrat text-black font-medium pt-2">
              Ownership Gurantee
            </div> */}
            <div className="pt-2">
              <img src={Line} alt="" />
            </div>
            <div className="flex justify-between pt-6">
              <div className="text-base font-montserrat text-black">
                Subtotal
              </div>
              <div>${price}</div>
            </div>
            {/* <div className="flex justify-between pt-1">
              <div className="text-base font-montserrat text-black">
                Discount
              </div>
              <div>$969</div>
            </div> */}
            <div className="flex justify-between pt-4">
              <div className="text-base font-montserrat text-black font-bold">
                Total:
              </div>
              <div className="text-black font-semibold">${price}</div>
            </div>
            <div className="w-full h-[1px] bg-gray-200 my-3"></div>
            <div className="font-montserrat text-xs font-semibold py-3">
              Invoice will be sent to the email address
            </div>
            <div className="text-left font-montserrat text-xs">
              We take your privacy seriously and will take all measures to
              protect your personal information. Any personal information
              received will only be used to fill your order. We will not sell or
              redistribute your information to anyone. More details can be found
              in our full <span className="underline">privacy policy</span>
            </div>
          </div>
        </S.Conatiner>
      </S.ParentContainer>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="w-80 lg:w-1/2 bg-white h-[500px] rounded-xl">
          <PaymentModel
            success={paymentSuccess}
            domains={nameArray}
            prices={priceArr}
            totalPrice={price}
            onClose={handleCloseModal}
            continueShopping={handleShopping}
            retry={handleRetry}
          />
        </div>
      </Modal>
    </>
  );
}

export default PaymentDetails;
