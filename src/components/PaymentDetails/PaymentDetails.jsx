import * as S from "./PaymentDetailsStyled";
import { useState } from "react";
import Line from "../../Images/Line 14.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ApplePay from "../../Images/Applepay.png";
import Paypal from "../../Images/PayPal.png";
import GPay from "../../Images/Gpay.png";

function PaymentDetails() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [companyName, setCompanyName] = useState();
  const [streetAddress, setStreetAddress] = useState();
  const [appartment, setAppartment] = useState();
  const [holderName, setHolderName] = useState();
  const [cardNumber, setCardNumber] = useState();
  const [expiryDate, setExpiryDate] = useState();
  const [cvc, setCvc] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleCompanyName = (e) => {
    setCompanyName(e.target.value);
  };
  const handleStreetAddress = (e) => {
    setStreetAddress(e.target.value);
  };
  const handleAppartment = (e) => {
    setAppartment(e.target.value);
  };
  const handleHolderName = (e) => {
    setHolderName(e.target.value);
  };
  const handleCardNumber = (e) => {
    setCardNumber(e.target.value);
  };
  const handleExpiryDate = (e) => {
    setExpiryDate(e.target.value);
  };
  const handleCvc = (e) => {
    setCvc(e.target.value);
  };

  return (
    <>
      <S.ParentContainer>
        <S.TopText>
          <div>
            <ArrowBackIosIcon />
            <span className="text-sm font-Montserrat">Back</span>
          </div>
          <div>
            <span className="text-sm font-montserrat font-medium ">
              Get domain
            </span>
            <span>
              <ArrowLeftIcon />
            </span>
            <span className="text-bgOne text-sm font-Montserrat">
              Your details & Payment information
            </span>
          </div>
        </S.TopText>
        <S.Conatiner>
          <S.PaymentMethods>
            <div className="px-3 py-6">
              <div className="flex flex-col w-full gap-4 lg:flex-row lg:justify-center lg:gap-7  ">
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
              </div>
              <div className="flex items-center justify-center pt-5 gap-2">
                <span className="w-44 h-[1px] bg-gray-300"></span>
                <span className="text-gray-300 font-semibold">OR</span>
                <span className="w-44 h-[1px] bg-gray-300"></span>
              </div>
              <S.Heading>Your Details:</S.Heading>
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={handleName}
                className=" border border-gray-200 rounded-md pl-4 mt-2 h-[40px] w-full"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
                className=" border border-gray-200 rounded-md pl-4 mt-2 h-[40px] w-full"
              />
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
                    className=" border border-gray-200 rounded-md pl-4 mt-2 h-[40px] w-full"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Apt/Suite"
                    value={appartment}
                    onChange={handleAppartment}
                    className=" border border-gray-200 rounded-md pl-4 mt-2 h-[40px] w-full"
                  />
                </div>
              </div>
              <S.Heading>Payment information:</S.Heading>
              <input
                type="text"
                placeholder="Card holder name"
                value={holderName}
                onChange={handleHolderName}
                className=" border border-gray-200 rounded-md pl-4 mt-2 h-[40px] w-full"
              />
              <input
                type="text"
                placeholder="Card number 3567-****-****"
                value={cardNumber}
                onChange={handleCardNumber}
                className=" border border-gray-200 rounded-md pl-4 mt-2 h-[40px] w-full"
              />
              <div className="flex flex-row w-full gap-2">
                <div className="w-1/2">
                  <input
                    type="text"
                    placeholder="Exp Date"
                    value={expiryDate}
                    onChange={handleExpiryDate}
                    className=" border border-gray-200 rounded-md pl-4 mt-2 h-[40px] w-full"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="CVC"
                    value={cvc}
                    onChange={handleCvc}
                    className=" border border-gray-200 rounded-md pl-4 my-2 h-[40px] w-full"
                  />
                </div>
              </div>
            </div>
            <button className="w-full py-2 text-white font-semibold text-sm rounded-md rounded-t-none  bg-bgOne">
              Pay now
            </button>
          </S.PaymentMethods>

          <div className="  border border-gray-200 mx-auto lg:mx-0  shadow-xl  p-3  h-[580px] w-[360px] ">
            <div className="text-black text-xl font-montserrat font-extrabold text-center ">
              Get Domain
            </div>
            <div className="text-xs text-gray-500 text-center ">
              One time Payment and own the name outright
            </div>
            <div className="flex justify-between bg-gray-100 mt-3">
              <span className="font-montserrat">Zylo.com</span>
              <span>
                <span className="text-base text-black pr-3">$1000</span>
                <span>USD</span>
              </span>
            </div>
            <div className="text-black text-xs font-bold font-montserrat pt-5">
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
            </div>
            <div className="pt-2">
              <img src={Line} alt="" />
            </div>
            <div className="flex justify-between pt-6">
              <div className="text-base font-montserrat text-black">
                Subtotal
              </div>
              <div>$1969</div>
            </div>
            <div className="flex justify-between pt-1">
              <div className="text-base font-montserrat text-black">
                Discount
              </div>
              <div>$969</div>
            </div>
            <div className="flex justify-between pt-4">
              <div className="text-base font-montserrat text-black font-bold">
                Total:
              </div>
              <div className="text-black font-semibold">$1000</div>
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
    </>
  );
}

export default PaymentDetails;
