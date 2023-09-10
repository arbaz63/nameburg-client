import { useNavigate } from "react-router-dom";
import * as S from "./DomainStyled";
import Zylo from "../../Images/image 7.png";
import Show from "../../Images/ShowWhite.png";
import Line from "../../Images/Line 14.png";
import Keywords from "../Keywords/Keywords";
import unlock from "../../Images/unlock.png";
import envelope from "../../Images/envelope.png";
import link from "../../Images/link.png";
import cross from "../../Images/remove 2.png";
import separator from "../../Images/Line 15.png";
import CustomAccordion from "../Accordian/Accordian";
import AccLine from "../../Images/Line 35.png";
function DomainDetails() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/PaymentDetails");
  };
  return (
    <>
      <div className="lg:ml-36 lg:mr-36 mt-12 overflow-x-hidden ">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
          <div>
            <S.main>
              <div className="flex justify-between items-center bg-bgOne py-2 px-3 rounded-t-lg">
                <div className="flex items-center text-white">
                  <img src={Show} alt="" className="w-3" />
                  <span className="text-[10px] ml-1">278</span>
                </div>
                <div>
                  <a href="#" className="font-semibold text-sm text-white">
                    zylo.com
                  </a>
                </div>
                <div className="invisible lg:visible text-white">
                  <p className="font-semibold text-sm">$1000</p>
                  <p className="italic text-[10px] opacity-90">
                    This week price
                  </p>
                </div>
              </div>
              <div className="py-14 ">
                <img src={Zylo} alt="" />
              </div>
              <div className="hidden lg:flex justify-between items-center bg-bgOne py-2 px-3 rounded-b-lg text-white">
                <div>
                  <p className="relative font-semibold text-sm after:content-[''] after:absolute after:top-1/2 after:left-0 after:w-3/4 after:h-[1.5px] after:bg-[#ff0808] after:rotate-6">
                    $1969
                  </p>
                  <p className="italic text-[10px] opacity-90">Actual Price</p>
                </div>
                <div>
                  <p className="font-semibold text-sm">-49%</p>
                  <p className="italic text-[10px] opacity-90">OFF</p>
                </div>
              </div>
            </S.main>
          </div>
          <div className="rounded-lg w-[360px] ml-[10px] mr-[10px] mt-10 lg:ml-0 lg:mr-0 lg:mt-0 shadow-custom ">
            <div className="p-3  h-[360px]">
              <div className="text-black text-xl font-montserrat font-extrabold text-center ">
                Get Domain
              </div>
              <div className="text-xs text-gray-500 text-center ">
                One time Payment and own the name outright
              </div>
              <div className="flex justify-between bg-gray-100 mt-3">
                <span className="font-montserrat">Zylo.com</span>
                <span>
                  <span className="text-base text-black pr-3">$1000</span>
                  <span>USD</span>
                </span>
              </div>
              <div className="text-black text-xs font-bold font-montserrat pt-5">
                What you get
              </div>
              <span className="text-xs font-montserrat text-black font-medium pt-4">
                Domain name:
                <span className=" font-montserrat text-xs w-full  text-bgOne">
                  Zylo.com
                </span>
              </span>
              <div className="text-xs font-montserrat text-black font-medium pt-2">
                Logo Design
              </div>
              <div className="text-xs font-montserrat text-black font-medium pt-2">
                Ownership Gurantee
              </div>
              <div className="pt-2">
                <img src={Line} alt="" />
              </div>
              <div className="flex justify-between pt-6">
                <div className="text-base font-montserrat text-black">
                  Subtotal
                </div>
                <div>$1969</div>
              </div>
              <div className="flex justify-between pt-1">
                <div className="text-base font-montserrat text-black">
                  Discount
                </div>
                <div>$969</div>
              </div>
              <div className="flex justify-between pt-4">
                <div className="text-base font-montserrat text-black font-bold">
                  Total:
                </div>
                <div className="text-black font-semibold">$1000</div>
              </div>
            </div>
            <button
              onClick={handleNavigation}
              className="w-full bg-bgOne py-1 text-white font-Montserrat font-semibold rounded-b-lg "
            >
              Buy
            </button>
          </div>
        </div>
        <div className=" text-2xl text-black font-bold text-center mt-10 lg:text-left font-montserrat">
          Description
        </div>
        <div className=" mx-7 text-center lg:mx-0 lg:text-left lg:w-1/2 font-montserrat mt-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel optio
          eius debitis a placeat officia doloremque animi cumque eveniet libero
          deleniti sequi, dolorum consectetur laudantium ipsam, nulla ad nihil
          natus quia, corrupti praesentium nobis. Rem consequuntur neque totam,
          non pariatur dolorum repellendus quae ipsa veniam harum repellat,
          adipisci quibusdam eum nobis quaerat sapiente exercitationem quis.
        </div>
        <div className=" text-2xl text-black font-bold text-center mt-10 lg:text-left font-montserrat">
          Keywords
        </div>
        <div className=" w-full lg:w-1/2 mr-4 ml-4 lg:mr-0 lg:ml-0">
          <Keywords text={"Sports"} />
          <Keywords text={"Game"} />
          <Keywords text={"Players"} />
          <Keywords text={"Running"} />
          <Keywords text={"Shoes"} />
          <Keywords text={"Score"} />
          <Keywords text={"Jump"} />
          <Keywords text={"eSports"} />
          <Keywords text={"Bat"} />
          <Keywords text={"Football"} />
        </div>
        <div className=" text-2xl text-black font-bold text-center mt-10 lg:text-left font-montserrat">
          Category
        </div>
        <div className="text-base text-center lg:text-left font-montserrat text-black mt-3">
          Sports
        </div>
        <div className=" text-2xl text-black font-bold text-center mt-10 lg:text-left font-montserrat">
          How it works
        </div>
        <div className="flex flex-col w-full lg:flex-row mt-5 lg:w-1/2 gap-8 justify-center lg:mt-6">
          <div>
            {/*Unlock Component Wrapper*/}
            <div>
              <img src={unlock} alt="" className="mx-auto" />
            </div>
            <div className="text-center text-sm mt-3 font-Montserrat text-black lg:mt-5">
              After your purchase, Nameburg unlocks the domain and prepares it
              for transfer
            </div>
          </div>
          <div>
            {/*Enlvelope Component Wrapper*/}
            <div>
              <img src={envelope} alt="" className="  mx-auto lg:mt-2" />
            </div>
            <div className="text-center text-sm mt-3 font-Montserrat text-black lg:mt-10">
              We email you domain transfer instructions and your unique
              authorisation code
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src={separator} alt="" className="lg:my-8" />
        </div>
        <div className="flex flex-col w-full lg:flex-row lg:w-1/2 gap-8 justify-center lg:mt-6">
          <div className="mt-5 lg:mt-0">
            {/*Link Component Wrapper*/}
            <div>
              <img src={link} alt="" className="mx-auto " />
            </div>
            <div className="text-center text-sm font-Montserrat text-black lg:mt-5">
              We email you a secure download link for your domain pack
            </div>
          </div>
          <div className="lg:pl-9">
            {/* cross Component Wrapper*/}
            <div>
              <img src={cross} alt="" className=" mx-auto " />
            </div>
            <div className="text-center text-sm mt-3 font-Montserrat text-black lg:mt-2">
              The name and logos are removed from the Nameburg website and
              Google search results
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white lg:ml-36 lg:mr-36 mt-12 overflow-x-hidden ">
        <div className=" text-2xl text-black font-bold text-center mt-10 lg:text-left font-Montserrat lg:mb-7">
          Frequently Asked Questions {"(FAQ)"}
        </div>
        <div className="w-full lg:w-1/2">
          <CustomAccordion />
          <div>
            <img src={AccLine} alt="" className="my-4" />
          </div>
          <CustomAccordion />
          <div>
            <img src={AccLine} alt="" className="my-4" />
          </div>
          <CustomAccordion />
          <div>
            <img src={AccLine} alt="" className="my-4" />
          </div>
          <CustomAccordion />
        </div>
      </div>
    </>
  );
}

export default DomainDetails;
