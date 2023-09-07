import { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import Checkbox from "@mui/material/Checkbox";
import * as S from "./SignUpStyled";
import { Link } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    if (email.trim() === "" || password.trim() === "" || name.trim() === "") {
      alert("Please fill in all fields before submitting.");
      return;
    }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <S.Bg>
      <S.Card>
        <S.Text>Sign Up</S.Text>
        <S.InputHeading>Full Name</S.InputHeading>
        <OutlinedInput
          type="text"
          placeholder="Your name"
          onChange={handleNameChange}
          className="ml-[25px] mr-[25px] lg:ml-[70px] lg:mr-[70px] mt-2 h-[40px] "
        />
        <S.InputHeading>Email</S.InputHeading>
        <OutlinedInput
          type="text"
          placeholder="Your email"
          onChange={handleEmailChange}
          className="ml-[25px] mr-[25px] lg:ml-[70px] lg:mr-[70px] mt-2 h-[40px] "
        />
        <S.InputHeading>Country</S.InputHeading>
        <OutlinedInput
          type="text"
          placeholder="Select"
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
            <span className="text-sm">
              I agree to the{" "}
              <span className="underline">terms and conditions</span>{" "}
            </span>
          </S.checkboxStart>
        </S.constainer>
        <button
          onClick={handleSubmit}
          className="ml-[70px] mt-2 mr-[70px] h-[40px] bg-bgOne text-white rounded-lg"
        >
          Login
        </button>
        <S.lastPart>
          Already have an account?
          <span className="underline text-blue-400 hover:cursor-pointer ">
            <Link to={"/Sign-in"}>Sign in</Link>
          </span>
        </S.lastPart>
      </S.Card>
    </S.Bg>
  );
}

export default SignUp;
