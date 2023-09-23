import * as S from "./UserSettingsStyled";
import Avatar from "@mui/material/Avatar";
import React, { useRef, useState } from "react";
import axios from "axios";

function UserSettings() {
  const [image, setImage] = useState();
  const [name, setName] = useState(localStorage.getItem("name"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [country, setCountry] = useState(localStorage.getItem("country"));
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [update, setUpdate] = useState(true);

  const userId = localStorage.getItem("userId");
  const accessToken = localStorage.getItem("accessToken");

  console.log("userId", userId);
  console.log("access", accessToken);

  const fetchData = async () => {
    if (!handleSave) {
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:4000/api/v1/auth/${userId}`,
        {
          oldPassword: oldPassword,
          newPassword: newPassword,
          newFullName: name,
          newEmail: email,
          newCountry: country,
        },
        {
          headers: {
            Authorization: `${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      if (response.data) {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("country", country);
      }
    } catch (error) {
      // Handle any errors here
      console.error("Error:", error);
    }
    // eslint-disable-next-line
  };

  const handleSave = () => {
    setNameError("");
    setEmailError("");
    setCountryError("");
    setNewPasswordError("");
    setConfirmPasswordError("");

    let hasErrors = false;

    if (!name) {
      setNameError("Name is required");
      hasErrors = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
      hasErrors = true;
    }

    if (!country) {
      setCountryError("Country is required");
      hasErrors = true;
    }

    if (newPassword !== confirmPassword) {
      setNewPasswordError("Passwords do not match");
      setConfirmPasswordError("Passwords do not match");
      hasErrors = true;
    }

    if (hasErrors) {
      return false;
    } else {
      setUpdate(!update);
      return true
    }
  };

  const fileInputRef = useRef();

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      // setLogo(selectedFile);
      setImage && setImage(URL.createObjectURL(selectedFile));
    }
  };

  return (
    <S.ParentContainer>
      <S.Heading>Account settings</S.Heading>
      <div className="w-full border p-10 pt-5 rounded-lg">
        <div className="mt-3">
          <div onClick={handleClick} className={"cursor-pointer"}>
            <Avatar
              alt={"MA"}
              src={image}
              sx={{
                width: 60,
                height: 60,
              }}
            />
            <input
              type="file"
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={handleFileChange}
            />
          </div>
          <div></div>
        </div>
        <S.InputHeading>Name</S.InputHeading>
        {/* <S.Display>John Doe</S.Display> */}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`py-2 lg:w-[380px] border rounded-md pl-3 font-light bg-grey w-full ${
            nameError ? "border-red-500" : "border-gray-100"
          }`}
        />
        {nameError && <div className="text-red-500">{nameError}</div>}

        <S.InputHeading>Email</S.InputHeading>
        {/* <S.Display>johndoe@gmail.com</S.Display> */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`py-2 lg:w-[380px] border rounded-md pl-3 font-light bg-grey w-full ${
            emailError ? "border-red-500" : "border-gray-100"
          }`}
        />
        {emailError && <div className="text-red-500">{emailError}</div>}

        <S.InputHeading>Country</S.InputHeading>
        {/* <S.Display>USA</S.Display> */}
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className={`py-2 lg:w-[380px] border rounded-md pl-3 font-light bg-grey w-full ${
            countryError ? "border-red-500" : "border-gray-100"
          }`}
        />
        {countryError && <div className="text-red-500">{countryError}</div>}
      </div>

      <div className="w-full border p-10 pt-5 rounded-lg mt-5">
        <S.ChangePassword>Change Password</S.ChangePassword>

        <S.InputHeading>Old Password</S.InputHeading>
        <input
          type="password"
          placeholder="Old password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className={`py-2 lg:w-[380px] border rounded-md pl-3 font-light bg-grey w-full `}
        />
        {/* {oldPasswordError && (
          <div className="text-red-500">{oldPasswordError}</div>
        )} */}

        <S.InputHeading>New Password</S.InputHeading>
        <input
          type="password"
          placeholder="New password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className={`py-2 lg:w-[380px] border rounded-md pl-3 font-light bg-grey w-full ${
            newPasswordError ? "border-red-500" : "border-gray-100"
          }`}
        />
        {newPasswordError && (
          <div className="text-red-500">{newPasswordError}</div>
        )}

        <S.InputHeading>Confirm Password</S.InputHeading>
        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={`py-2 lg:w-[380px] border rounded-md pl-3 font-light bg-grey w-full ${
            confirmPasswordError ? "border-red-500" : "border-gray-100"
          }`}
        />
        {confirmPasswordError && (
          <div className="text-red-500">{confirmPasswordError}</div>
        )}

        <S.ButtonHolder>
          <button
            className="bg-bgOne text-white py-2 px-7 rounded-md font-Montserrat font-semibold text-base mt-4"
            onClick={fetchData}
          >
            Save
          </button>
        </S.ButtonHolder>
      </div>
    </S.ParentContainer>
  );
}

export default UserSettings;
