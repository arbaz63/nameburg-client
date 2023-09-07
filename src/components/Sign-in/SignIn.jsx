import { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import Checkbox from "@mui/material/Checkbox";
import * as S from "./SignInStyled";
import { Link } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    if (email.trim() === "" || password.trim() === "") {
      alert("Please fill in all fields before submitting.");
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);

    setEmail("");
    setPassword("");
  };

  return (
    <S.Bg>
      <S.Card>
        <S.Text>Login</S.Text>
        <S.InputHeading>Email</S.InputHeading>
        <OutlinedInput
          type="text"
          placeholder="Your email"
          onChange={handleEmailChange}
          className="ml-[25px] mr-[25px] lg:ml-[70px] lg:mr-[70px] mt-2 h-[40px] "
        />
        <S.InputHeading>Password</S.InputHeading>
        <OutlinedInput
          type="text"
          placeholder="Password"
          onChange={handlePasswordChange}
          className="ml-[25px] mr-[25px] lg:ml-[70px] lg:mr-[70px] mt-2 h-[40px] "
        />
        <S.constainer>
          <S.checkboxStart>
            <Checkbox color="secondary" />
            <span className="text-sm">Remember me</span>
          </S.checkboxStart>
          <S.ForgotPassword>Forgot Password?</S.ForgotPassword>
        </S.constainer>
        <button
          onClick={handleSubmit}
          className="ml-[25px] mr-[25px] lg:ml-[70px] mt-2 lg:mr-[70px] h-[40px] bg-bgOne text-white rounded-lg"
        >
          Login
        </button>
        <S.lastPart>
          Don't have an account?
          <span className="underline text-blue-400 hover:cursor-pointer ">
            <Link to={"/Sign-up"}>Sign up</Link>
          </span>
        </S.lastPart>
      </S.Card>
    </S.Bg>
  );
}

export default SignIn;
