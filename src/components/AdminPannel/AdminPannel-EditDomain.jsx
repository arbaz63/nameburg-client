import AdminPannelNavbar from "../AdminPannelNavbar/AdminPannelNavbar";
import SelectCategoriesAdmin from "../SelectCategoriesAdmin";
import gallery from "../../Images/gallery 1.png";
import { useState } from "react";
import NavbarHeader from "../AdminPannel-TopNav/NavbarHeader";
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import Chip from "@mui/material/Chip";
import createIcon from "../../Images/Add.svg";
import * as React from "react";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import axiosInstance from '../../axios-config'; // Import the Axios instance

function AdminPannelEditDomain() {
  const { id } = useParams();
  const [domainName, setDomainName] = useState();
  const [max, setMax] = useState();
  const [mini, setMini] = useState();
  const [text, setText] = useState("");
  const maxLength = 500;
  const [Dimage, setImage] = useState(gallery);
  const [imageFile, setImageFile] = useState();
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [preLoading, setPreLoading] = useState(true);

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

  const [, setData] = useState();
  const [, setError] = useState();
  const [selectedCategory, setSelectedCategory] = useState("");

  const accessToken = localStorage.getItem("accessToken");

  const handleSubmit = (e) => {
    setIsSubmitting(true);
    e.preventDefault();
    setLoading(true);

    console.log(
      domainName,
      mini,
      max,
      selectedCategory,
      keywords,
      text,
      Dimage,
      imageFile
    );

    const formData = {
      name: domainName,
      maxPrice: max,
      minPrice: mini,
      category: selectedCategory,
      keywords: keywords,
      description: text,
      image: imageFile,
    };

    axiosInstance
      .put(`/domains/${id}`, formData, {
        headers: {
          Authorization: `${accessToken}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Domain successfully edited:", response.data);
        setMessage("Domain successfully edited");
        setIsSubmitting(false);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error editing domain:", error);
        setErrorMessage(`Error editing domain, Please Try again`);
        setIsSubmitting(false);
        setLoading(false);
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessage("");
      setErrorMessage("");
      setIsSubmitting(false);
    }, 6000);

    // Clear the timeout when the component unmounts to avoid memory leaks
    return () => clearTimeout(timeout);
  }, [message, errorMessage]);

  const [categories, setCategories] = useState();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get(
          "/categories"
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

  useEffect(() => {
    const getData = async () => {
      setPreLoading(true);
      try {
        const response = await axiosInstance.get(
          `/domains/${id}`
        );
        setData(response.data);
        setDomainName(response.data.name);
        setMax(response.data.maxPrice);
        setMini(response.data.minPrice);
        setText(response.data.description);
        setKeywords(response.data.keywords);
        setImage(response.data.image ? response.data.image : gallery);
        setSelectedCategory(response.data.category._id);
        console.log(response.data, response.data.category.name);
        setPreLoading(false);
      } catch (error) {
        setError("Error fetching domain details. Please try again.");
        setPreLoading(false);
      }
    };

    getData();
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
        <NavbarHeader purchasePage={true} />
        <div className="bg-adminBg pl-4 pr-20 pb-10">
          {preLoading && (
            <div className="text-center flex p-5 items-center space-x-5 justify-center w-full">
              <CircularProgress color="secondary" />
              <p className="text-purple-600	 w-[100px] text-center">
                Loading Data
              </p>
            </div>
          )}

          <div className="  flex flex-row justify-between">
            <div className="text-sm pt-5 text-black font-montserrat ">
              Edit domain in seven simple steps:
            </div>
            {/* <div className="pt-5">
              <button
                className="bg-bgOne py-3 px-4 rounded-md font-Montserrat text-xs text-white"
                onClick={handleSubmit}
              >
                Publish Domain
              </button>
            </div> */}
            <div className="pt-5">
              <button
                className="bg-bgOne gap-2 flex flex-row items-center justify-center py-2 px-4 rounded-md text-white font-semibold font-montserrat "
                onClick={handleSubmit}
              >
                {isSubmitting ? "Creating Domain..." : "Publish Domain"}
              </button>
            </div>
          </div>

          {loading && (
            <div className="text-center">
              <CircularProgress color="secondary" />{" "}
            </div>
          )}
          {message && (
            <p className="text-green-500 w-full text-center">{message}</p>
          )}
          {errorMessage && (
            <p className="text-red-500 w-full text-center">{errorMessage}</p>
          )}
          <div className="font-montserrat text-xl pl-4">
            1- Edit Domain Name
          </div>
          <div className="w-[983px] bg-white h-[70px] mt-4 rounded-md ">
            <input
              type="text"
              placeholder="Domain name"
              value={domainName}
              onChange={handleDomainName}
              className="pl-4 bg-gray-100 text-black ml-4 py-2 rounded-md mt-4 w-[400px] border border-gray-100"
            />
          </div>
          <div className="font-montserrat text-xl pl-4 mt-4">2- Edit Price</div>
          <div className="w-[983px] bg-white h-[70px] mt-2  rounded-md  ">
            <div className="flex flex-row items-center px-4 gap-10 ">
              <div className="w-1/2 flex flex-row gap-3 items-center pt-3">
                <div className="text-black text-sm ">Edit Max Price: </div>
                <input
                  type="number"
                  placeholder="Maximum price"
                  value={max}
                  onChange={handleMaxPrice}
                  className="pl-4 py-2 bg-gray-100 w-[325px] rounded-md border border-gray-100"
                />
              </div>
              <div className="w-1/2 flex flex-row gap-3 items-center pt-3">
                <div className="text-black text-sm ">Edit Min Price: </div>
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
              selectedCategory={selectedCategory}
            />
          </div>
          <div className="h-fit">
            <div className="font-montserrat text-xl pl-4 mt-4">
              5- Add/Edit Keywords
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
            6- Upload image
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
                    src={Dimage}
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
            7- Edit Description
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

export default AdminPannelEditDomain;
