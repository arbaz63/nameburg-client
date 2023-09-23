import AdminPannelNavbar from "../AdminPannelNavbar/AdminPannelNavbar";
import SelectCategoriesAdmin from "../SelectCategoriesAdmin";
import gallery from "../../Images/gallery 1.png";
import { useState } from "react";
import NavbarHeader from "../AdminPannel-TopNav/NavbarHeader";
import { useEffect, useRef } from "react";
import axios from "axios";
import Chip from "@mui/material/Chip";
import createIcon from "../../Images/Add.svg";
import * as React from "react";
import TextField from "@mui/material/TextField";

function AdminPannel() {
  const [domainName, setDomainName] = useState();
  const [max, setMax] = useState();
  const [mini, setMini] = useState();
  const [text, setText] = useState("");
  const maxLength = 500;
  const [image, setImage] = useState(gallery);
  const [imageFile, setImageFile] = useState();

  const fileInputRef = useRef();

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setImageFile(selectedFile);
      setImage && setImage(URL.createObjectURL(selectedFile));
    }
  };

  const handleDomainName = (e) => {
    setDomainName(e.target.value);
  };

  const handleMaxPrice = (e) => {
    setMax(e.target.value);
  };

  const handleMiniPrice = (e) => {
    setMini(e.target.value);
  };

  const handleChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= maxLength) {
      setText(inputText);
    }
  };

  const [, setError] = useState();
  const [selectedCategory, setSelectedCategory] = useState();

  const accessToken = localStorage.getItem("accessToken");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: domainName,
      maxPrice: max,
      minPrice: mini,
      category: selectedCategory,
      keywords: keywords,
      description: text,
      image: imageFile,
    };

    axios
      .post(`http://localhost:4000/api/v1/domains/`, formData, {
        headers: {
          Authorization: `${accessToken}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Domain successfully created:", response.data);
      })
      .catch((error) => {
        console.error("Error creating domain:", error);
      });
  };

  const [categories, setCategories] = useState();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/categories"
        );
        setCategories(response.data);
        console.log(response.data);
      } catch (error) {
        setError("Error fetching categories 123. Please try again.");
      }
    };

    fetchCategories();
    // eslint-disable-next-line
  }, []);

  const [keywords, setKeywords] = React.useState([]);
  const [newKeyword, setNewKeyword] = React.useState("");
  const [showKeywordInput, setShowKeywordInput] = React.useState(false);

  const handleAddKeyword = () => {
    if (newKeyword.trim() !== "") {
      setKeywords([...keywords, newKeyword]);
      setNewKeyword("");
    }
  };

  const handleDeleteKeyword = (keyword) => {
    const updatedKeywords = keywords.filter((k) => k !== keyword);
    setKeywords(updatedKeywords);
  };

  return (
    <>
      <div className="fixed left-0 top-0 w-[21vw] h-[100vh]">
        <AdminPannelNavbar selectedItem={"createDomain"} />
      </div>
      <div className="w-[79vw] ml-[21vw]">
        <NavbarHeader />
        <div className="bg-adminBg pl-4 pr-20 pb-10">
          <div className="  flex flex-row justify-between">
            <div className="text-sm pt-5 text-black font-montserrat ">
              Create new domain in seven simple steps:
            </div>
            <div className="pt-5">
              <button
                className="bg-bgOne gap-2 flex flex-row items-center justify-center py-2 px-4 rounded-md text-white font-semibold font-montserrat "
                onClick={handleSubmit}
              >
                Publish Domain
              </button>
            </div>
          </div>
          <div className="font-montserrat text-xl pl-4">1- Domain Name</div>
          <div className="w-[983px] bg-white h-[70px] mt-4 rounded-md ">
            <input
              type="text"
              placeholder="Domain name"
              value={domainName}
              onChange={handleDomainName}
              className="pl-4 bg-gray-100 text-black ml-4 py-2 rounded-md mt-4 w-[400px] border border-gray-100"
            />
          </div>
          <div className="font-montserrat text-xl pl-4 mt-4">2- Set Piece</div>
          <div className="w-[983px] bg-white h-[70px] mt-2  rounded-md  ">
            <div className="flex flex-row items-center px-4 gap-10 ">
              <div className="w-1/2 flex flex-row gap-3 items-center pt-3">
                <div className="text-black text-sm ">Max Price: </div>
                <input
                  type="number"
                  placeholder="Maximum price"
                  value={max}
                  onChange={handleMaxPrice}
                  className="pl-4 py-2 bg-gray-100 w-[325px] rounded-md border border-gray-100"
                />
              </div>
              <div className="w-1/2 flex flex-row gap-3 items-center pt-3">
                <div className="text-black text-sm ">Min Price: </div>
                <input
                  type="number"
                  placeholder="Minimum price"
                  value={mini}
                  onChange={handleMiniPrice}
                  className="pl-4 py-2 bg-gray-100 w-[325px] rounded-md border border-gray-100"
                />
              </div>
            </div>
          </div>
          <div className="font-montserrat text-xl pl-4 mt-4">
            4- Select Category
          </div>
          <div className="w-[983px] bg-white h-[70px] flex items-center mt-4 rounded-md items-center ">
            <SelectCategoriesAdmin
              categories={categories}
              setSelectedCategory={setSelectedCategory}
              selectedCategoriy={selectedCategory}
            />
          </div>
          <div className="h-fit">
            <div className="font-montserrat text-xl pl-4 mt-4">
              5- Add Keywords
            </div>
            <div className="flex flex-row flex-wrap gap-4 w-[983px] bg-white py-4 px-2 mt-4 rounded-md items-center">
              {keywords.map((keyword, index) => (
                <div key={index} className="ml-3">
                  <Chip
                    label={keyword}
                    variant="outlined"
                    onDelete={() => handleDeleteKeyword(keyword)}
                  />
                </div>
              ))}
              {!showKeywordInput ? (
                <div
                  className="cursor-pointer"
                  onClick={() => setShowKeywordInput(true)}
                >
                  <img src={createIcon} alt="" />
                </div>
              ) : (
                <div
                  className="cursor-pointer"
                  onClick={() => setShowKeywordInput(false)}
                >
                  <hr className="my-5 border-t-[4px] border-gray-400 w-3"></hr>
                </div>
              )}
              {showKeywordInput && (
                <div className=" flex items-center space-x-3 cursor-pointer">
                  <TextField
                    label="Add Keyword"
                    variant="outlined"
                    size="small"
                    value={newKeyword}
                    onChange={(e) => setNewKeyword(e.target.value)}
                  />
                  <div className="cursor-pointer" onClick={handleAddKeyword}>
                    <img src={createIcon} alt="" />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="font-montserrat text-xl pl-4 mt-4">
            6- Upload image{" "}
          </div>
          <div className="w-[983px] bg-white mt-4 rounded-md p-3">
            <div className=" flex flex-col gap-8 justify-center items-center border border-dashed  border-gray-300  w-[250px] mr-3">
              <div
                onClick={handleClick}
                className={"cursor-pointer  overflow-y-scroll"}
              >
                <div className="max-h-[250px] rounded-lg">
                  {/* eslint-disable-next-line */}
                  <img
                    src={image}
                    alt={`Image`}
                    className="object-cover w-full h-full"
                  />
                </div>
                <input
                  type="file"
                  style={{ display: "none" }}
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
              </div>
            </div>
          </div>
          <div className="font-montserrat text-xl pl-4 mt-4">
            7- Add Description
          </div>
          <div className="w-[983px] bg-white mt-4 rounded-md">
            <div className="relative">
              <textarea
                placeholder="Type here.."
                className="h-[200px] w-[350px] border border-gray-300 rounded-md ml-4 mt-4 p-2"
                value={text}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPannel;
