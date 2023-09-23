import * as S from "./AboutUsStyled";
import CustomerCare from "../../Images/personService.svg";
import Low from "../../Images/deposite.svg";
import Safe from "../../Images/secureTick.svg";
import Dollar from "../../Images/moneyHand.svg";
import HandShake from "../../Images/handshake.svg";
import Star from "../../Images/starSparcle.svg";
import Secured from "../../Images/secureTickSmall.svg";
import { useNavigate } from "react-router-dom";

function AboutUs() {
  const navigate = useNavigate();

  const handleGetDomainClick = () => {
    navigate("/");
  };
  return (
    <S.ParentContainer>
      <S.HeroBanner>
        <div className=" text-sm text-white font-montserrat font-normal">
          Lorem ipsum dolor sit amet.
          <br />
          Lorem ipsum dolor sit.
        </div>
        <div>
          <button
            className="px-5 py-2 font-Montserrat text-sm bg-white mt-4 rounded-md"
            onClick={handleGetDomainClick}
          >
            Get Domain
          </button>
        </div>
      </S.HeroBanner>
      <div className="text-2xl font-montserrat font-bold text-center my-6">
        About Us
      </div>
      <div className="text-center text-gray-500 px-3 lg:px-0 font-montserrat text-sm mx-auto lg:w-[500px] ">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        excepturi nulla nemo hic blanditiis dolore tempore, rem suscipit enim
        dolorem doloribus! Sapiente dolorum nemo laudantium distinctio impedit
        error adipisci. Dolor omnis molestias sapiente nostrum officiis
        doloremque eum consequatur culpa porro.
      </div>
      <div className="my-16 flex flex-col lg:flex-row gap-10 mx-6 ">
        <div>
          <img src={CustomerCare} alt="" className="mx-auto" />
          <div className="text-center text-gray-500 mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
            voluptatibus harum possimus dolorum eaque molestias!
          </div>
        </div>
        <div>
          <img src={Low} alt="" className="mx-auto" />
          <div className="text-center text-gray-500 mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
            voluptatibus harum possimus dolorum eaque molestias!
          </div>
        </div>
        <div>
          <img src={Safe} alt="" className="mx-auto" />
          <div className="text-center text-gray-500 mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
            voluptatibus harum possimus dolorum eaque molestias!
          </div>
        </div>
      </div>
      <div className="bg-gray-100 w-full h-[950px] lg:h-[680px]">
        <div className="p-10 ">
          <div className="font-montserrat text-3xl font-bold text-center">
            Why Choose Us
          </div>
          <div className="flex flex-col items-center lg:flex-row gap-5 lg:gap-0 lg:justify-between mx-0 mt-8 lg:mx-[170px]">
            <div className="w-[300px]">
              <div className="w-12 h-12 mx-auto lg:mx-0  rounded-full bg-white flex items-center justify-center">
                <img src={Dollar} alt="" />
              </div>
              <div className="text-sm font-bold text-center lg:text-left font-montserrat">
                Upfront Pricing
              </div>
              <div className="mt-5 text-center lg:text-left">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quisquam, saepe laudantium perferendis nisi commodi eaque.
              </div>
            </div>
            <div className="w-[300px]">
              <div className="w-12 h-12 mx-auto lg:mx-0 rounded-full bg-white flex items-center justify-center">
                <img src={HandShake} alt="" />
              </div>
              <div className="text-sm text-center lg:text-left font-bold font-montserrat">
                Fully Trusted
              </div>
              <div className="mt-5 text-center lg:text-left">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quisquam, saepe laudantium perferendis nisi commodi eaque.
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center lg:flex-row gap-5 lg:gap-0 lg:justify-between mx- 0 mt-8 lg:mx-[170px]">
            <div className="w-[300px]">
              <div className="w-12 h-12 mx-auto lg:mx-0 rounded-full bg-white flex items-center justify-center">
                <img src={Star} alt="" />
              </div>
              <div className="text-sm text-center lg:text-left font-bold font-montserrat">
                Unique Domain Names
              </div>
              <div className="mt-5 text-center lg:text-left">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quisquam, saepe laudantium perferendis nisi commodi eaque.
              </div>
            </div>
            <div className="w-[300px]">
              <div className="w-12 h-12 mx-auto lg:mx-0 rounded-full bg-white flex items-center justify-center">
                <img src={Secured} alt="" />
              </div>
              <div className="text-sm text-center lg:text-left font-bold font-montserrat">
                Safe & Secure
              </div>
              <div className="mt-5 text-center lg:text-left">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quisquam, saepe laudantium perferendis nisi commodi eaque.
              </div>
            </div>
          </div>
        </div>
      </div>
    </S.ParentContainer>
  );
}

export default AboutUs;
