import React, { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import Checkbox from "@mui/material/Checkbox";
import * as S from "./SignUpStyled";
import { useNavigate } from "react-router-dom";
import CountrySelector from "../CountrySelector";
import axios from "axios";

function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    country: "Select Country",
    termsAccepted: false,
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      termsAccepted: e.target.checked,
    });

    setError("");
  };

  const validateFields = () => {
    const { fullName, email, password, country, termsAccepted } = formData;

    if (!fullName.trim()) {
      setError("Please enter your fullName.");
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return false;
    }

    if (country === "Select Country") {
      setError("Please select your country.");
      return false;
    }

    if (!termsAccepted) {
      setError("Please accept the Terms and Conditions.");
      return false;
    }

    return true;
  };
  // eslint-disable-next-line
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFields()) {
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/auth/signup",
        formData
      );

      console.log("SignUp successful:", response.data, formData);

      setFormData({
        fullName: "",
        email: "",
        password: "",
        country: "Select Country",
        termsAccepted: false,
      });

      navigate("/Sign-in");
    } catch (error) {
      console.error("Error signing up:", error);
      setError("Error signing up. Please try again.");
    }
  };

  const handleSignInClick = () => {
    navigate("/Sign-in");
  };

  return (
    <S.Bg>
      <S.Card>
        <S.Text>Sign Up</S.Text>
        <S.InputHeading>Full Name</S.InputHeading>
        <OutlinedInput
          type="text"
          name="fullName"
          value={formData.fullName}
          placeholder="Your fullName"
          onChange={handleChange}
          className="ml-[25px] mr-[25px] lg:ml-[70px] lg:mr-[70px] mt-2 h-[40px] "
        />
        <S.InputHeading>Email</S.InputHeading>
        <OutlinedInput
          type="email"
          name="email"
          value={formData.email}
          placeholder="Your email"
          onChange={handleChange}
          className="ml-[25px] mr-[25px] lg:ml-[70px] lg:mr-[70px] mt-2 h-[40px] "
        />
        <S.InputHeading>Country</S.InputHeading>
        <CountrySelector
          selectedCountry={formData.country}
          setSelectedCountry={(country) =>
            setFormData({ ...formData, country })
          }
          setError={setError}
        />
        <S.InputHeading>Password</S.InputHeading>
        <OutlinedInput
          type="password"
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={handleChange}
          className="ml-[25px] mr-[25px] lg:ml-[70px] lg:mr-[70px] mt-2 h-[40px] "
        />
        <S.constainer>
          <S.checkboxStart>
            <Checkbox
              color="secondary"
              checked={formData.termsAccepted}
              onChange={handleCheckboxChange}
            />
            <span className="text-sm">
              I agree to the{" "}
              <span
                className="underline cursor-pointer"
                onClick={() => navigate("/TermsAndConditions")}
              >
                terms and conditions
              </span>{" "}
            </span>
          </S.checkboxStart>
        </S.constainer>

        <S.constainer>
          <div className="text-red-500 mt-2 flex justify-center w-full">
            {error}
          </div>
        </S.constainer>
        <S.constainer>
          <button
            onClick={handleSubmit}
            className=" w-full mt-2 mx-[30px] lg:mx-[70px] h-[40px] bg-bgOne text-white rounded-lg"
          >
            Sign Up
          </button>
        </S.constainer>

        <S.lastPart>
          Already have an account?{" "}
          <span
            className="underline text-blue-400 hover:cursor-pointer "
            onClick={handleSignInClick}
          >
            Sign in
          </span>
        </S.lastPart>
      </S.Card>
    </S.Bg>
  );
}

export default SignUp;
