import React from "react";
import * as S from "./ContactUsStyled";
import { useState } from "react";

function ContactUs() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [error, setError] = useState(""); // Single error state

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const validateForm = () => {
    // Reset the error message
    setError("");

    // Validate name
    if (!name || name.trim() === "") {
      setError("Name is required");
      return false; // Form is invalid
    }

    // Validate email using regex
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!email || !email.match(emailRegex)) {
      setError("Invalid email address");
      return false; // Form is invalid
    }

    // Validate message
    if (!message || message.trim() === "") {
      setError("Message is required");
      return false; // Form is invalid
    }

    // All validations passed
    return true; // Form is valid
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const emailSubject = encodeURIComponent("New Contact Form Submission");
      const emailBody = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
      );

      const mailtoLink = `mailto:nameburg@client.com?subject=${emailSubject}&body=${emailBody}`;

      // Open the user's default email client
      window.location.href = mailtoLink;
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };

  return (
    <S.ParentContainer>
      <div className="bg-gradient-to-r from-bgOne via-bgOne to-bgTwo h-[460px] w-full lg:w-[500px] mb-16">
        <div className=" py-10 lg:px-20 lg:py-12">
          <div className=" text-center lg:text-left font-montserrat text-white text-2xl font-bold">
            Get in Touch
          </div>
          <div className=" mx-auto w-[100px] h-[1px] lg:ml-[26px] bg-gray-200 "></div>
          <div className="  text-center lg:text-left text-base lg:text-sm mt-3 font-montserrat text-gray-100 font-thin">
            Reach out to us We can make <br /> something awesome together
          </div>

          <div className="  text-center lg:text-left pt-28 font-montserrat text-white text-lg lg:text-base font-medium">
            Address:
          </div>
          <div className="  text-center lg:text-left text-base lg:text-xs text-gray-100 font-montserrat">
            Lorem ipsum dolor sit amet consectetur.
          </div>
          <div className="  text-center lg:text-left pt-3 font-montserrat text-white text-lg lg:text-base font-medium">
            Email
          </div>
          <div className="  text-center lg:text-left text-base  lg:text-xs text-gray-100 font-montserrat">
            support@nameburg.com
          </div>
          <div className="  text-center lg:text-left pt-3 font-montserrat text-white text-lg lg:text-base font-medium">
            Phone
          </div>
          <div className="  text-center lg:text-left text-base lg:text-xs text-gray-100 font-montserrat">
            +109928877881
          </div>
        </div>
      </div>
      <div className=" h-[500px] lg:h-[420px] w-full lg:w-[525px] lg:mr-[190px]  lg:mt-10 px-4 lg:ml-0  ">
        <div className="text-center lg:text-left font-montserrat font-extrabold text-3xl ">
          Contact Us
        </div>
        <form onSubmit={handleSubmit}>
          <div className="font-montserrat text-base mt-12 lg:mt-9">Name</div>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={handleName}
            className="font-montserrat w-full border-b-2 border-t-0 border-gray-300 focus:outline-none focus:border-blue-500"
          />

          <div className="font-montserrat text-base mt-12 lg:mt-9">Email</div>
          <input
            placeholder="Enter your email"
            value={email}
            onChange={handleEmail}
            className="font-montserrat w-full border-b-2 border-t-0 border-gray-300 focus:outline-none focus:border-blue-500"
          />

          <div className="font-montserrat text-base mt-12 lg:mt-9">Message</div>
          <input
            placeholder="Type message here"
            value={message}
            onChange={handleMessage}
            className="font-montserrat w-full border-b-2 border-t-0 border-gray-300 focus:outline-none focus:border-blue-500"
          />

          <div className="text-red-500 flex justify-center font-montserrat text-sm mt-5">
            {error}
          </div>

          <div className="w-full mt-2">
            <button className="font-montserrat font-semibold mt-4 lg:mt-3 text-white bg-bgOne py-2 rounded-md w-full">
              Send
            </button>
          </div>
        </form>
      </div>
    </S.ParentContainer>
  );
}
export default ContactUs;
