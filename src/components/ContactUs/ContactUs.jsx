import React from "react";
import * as S from "./ContactUsStyled";
import FacebookIcon from "../../Images/facebookC.png";
import InstagramIcon from "../../Images/instagramC.png";
import TwitterIcon from "../../Images/twitterC.png";
import { useState } from "react";
function ContactUs() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <S.ParentContainer>
      <div className="bg-gradient-to-r from-bgOne via-bgOne to-bgTwo h-[420px] w-full lg:w-[425px] mb-16">
        <div className=" lg:px-20 lg:py-7">
          <div className=" text-center lg:text-left font-montserrat text-white text-2xl font-bold">
            Get in touch
          </div>
          <div className=" mx-auto w-[100px] h-[1px] lg:ml-[26px] bg-gray-200 "></div>
          <div className="  text-center lg:text-left text-sm mt-3 font-montserrat text-gray-100 font-thin">
            Reach out to us We can make <br /> something awesome together
          </div>

          <div className="  text-center lg:text-left pt-28 font-montserrat text-white text-base font-medium">
            Address:
          </div>
          <div className="  text-center lg:text-left text-xs text-gray-100 font-montserrat">
            Lorem ipsum dolor sit amet consectetur.
          </div>
          <div className="  text-center lg:text-left pt-3 font-montserrat text-white text-base font-medium">
            Email
          </div>
          <div className="  text-center lg:text-left  text-xs text-gray-100 font-montserrat">
            support@nameburg.com
          </div>
          <div className="  text-center lg:text-left pt-3 font-montserrat text-white text-base font-medium">
            Phone
          </div>
          <div className="  text-center lg:text-left text-xs text-gray-100 font-montserrat">
            +109928877881
          </div>
        </div>
      </div>
      <div className="h-[420px] w-full lg:w-[425px] lg:mr-[130px] mt-10 px-4 lg:ml-0  ">
        <div className="  text-center lg:text-left font-montserrat font-extrabold text-2xl ">
          Contact Us
        </div>
        <div className="font-montserrat text-base mt-5">Name</div>
        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={handleName}
          className=" font-montserrat w-full border-b-2 border-t-0 border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <div className="font-montserrat text-base mt-5">Email</div>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmail}
          className=" font-montserrat w-full border-b-2 border-t-0 border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <div className="font-montserrat text-base mt-5">Message</div>
        <input
          type="text"
          placeholder="Type message here"
          value={message}
          onChange={handleMessage}
          className=" font-montserrat w-full border-b-2 border-t-0 border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <div className="w-full mt-4">
          <button className="font-montserrat font-semibold text-white bg-bgOne py-2 rounded-sm w-full ">
            Send
          </button>
        </div>
        <div className="flex gap-6 mt-6">
          <button>
            <img src={FacebookIcon} alt="Facebookicon" />
          </button>
          <div className="w-[1px] h-6 bg-gray-400"></div>
          <button>
            <img src={InstagramIcon} alt="Instageram" />
          </button>
          <div className="w-[1px] h-6 bg-gray-400"></div>
          <button>
            <img src={TwitterIcon} alt="Twitter" />
          </button>
        </div>
      </div>
    </S.ParentContainer>
  );
}
export default ContactUs;
