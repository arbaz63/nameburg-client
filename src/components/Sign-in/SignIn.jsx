import React, { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import * as S from "./SignInStyled";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../AuthContext";

function SignIn() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [, setRole] = useState("");

  const handleNavigation = () => {
    navigate("/Sign-up");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const validateFields = () => {
    const { email, password } = formData;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    if (password.length < 5) {
      setError("Password must be at least 5 characters long.");
      return false;
    }

    return true;
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  // eslint-disable-next-line
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!validateFields()) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/auth/signin",
        formData
      );

      console.log("SignIn successful:", response.data);

      // Remove existing tokens if they exist
      localStorage.removeItem("userId");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("role");
      localStorage.removeItem("name");
      localStorage.removeItem("email");
      localStorage.removeItem("country");

      localStorage.setItem("userId", response.data.id);
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("role", response.data.role);
      localStorage.setItem("name", response.data.fullName);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("country", response.data.country);
      login();

      setRole(response.data.role);

      setFormData({
        email: "",
        password: "",
      });
      setIsSubmitting(false);

      if (response.data.role === "user") {
        navigate("/");
      } else {
        navigate("/AdminPannel-AllDomains");
      }
    } catch (error) {
      setIsSubmitting(false);
      setError("Error signing in. Please try again.");
    }
  };

  return (
    <S.Bg>
      <S.Card>
        <S.Text>Login</S.Text>
        <S.InputHeading>Email</S.InputHeading>
        <OutlinedInput
          type="text"
          name="email"
          value={formData.email}
          placeholder="Your email"
          onChange={handleChange}
          className="ml-[25px] mr-[25px] lg:ml-[70px] lg:mr-[70px] mt-2 h-[40px] "
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
          {/* <S.checkboxStart>
            <Checkbox color="secondary" />
            <span className="text-sm">Remember me</span>
          </S.checkboxStart>
          <S.ForgotPassword>Forgot Password?</S.ForgotPassword> */}
        </S.constainer>
        <div className="text-red-500 mt-8 flex justify-center w-full">
          {error}
        </div>
        <button
          onClick={handleSubmit}
          className="ml-[25px] mr-[25px] lg:ml-[70px] mt-2 lg:mr-[70px] h-[40px] bg-bgOne text-white rounded-lg"
        >
          {isSubmitting ? "Signing In..." : "Login"}
        </button>
        <S.lastPart>
          Don't have an account?{" "}
          <span
            className="underline text-blue-400 hover:cursor-pointer"
            onClick={handleNavigation}
          >
            Sign up
          </span>
        </S.lastPart>
      </S.Card>
    </S.Bg>
  );
}

export default SignIn;
