import AdminPannelInvoiceNavbar from "../AdminPannelInvoiceNavbar/InvoiceNavbar";
import SearchIcon from "@mui/icons-material/Search";
import bell from "../../Images/bell.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Avatar from "../../Images/IconAvatar.png";
import back from "../../Images/backadminpannel.png";
import create from "../../Images/createicon.png";

function AdminPannelAllDomains() {
  return (
    <>
      <div className="fixed left-0 top-0 w-[21vw] h-[100vh]">
        <AdminPannelInvoiceNavbar />
      </div>
      <div className="w-[79vw] ml-[21vw]">
        <div className="h-[70px] shadow-md border border-gray-100 flex flex-row justify-between">
          <div className="flex flex-row items-center justify-center">
            <div className="font-montserrat text-xl pl-4">
              Welcome,{" "}
              <span className="font-montserrat text-sm font-medium">
                {" "}
                Jhon Doe
              </span>
            </div>
            <div className="ml-12 h-[2px] mt-7 w-20 bg-bgOne "></div>
          </div>
          <div className="pr-14 flex flex-row gap-5 items-center">
            <div
              className="inline-flex items-center border border-gray-300 rounded-2xl
                     p-[1px]  h-[36px] w-[300px] py-2 pl-2  bg-gray-50"
            >
              <div className="py-2 pr-2 rounded">
                <SearchIcon className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search domain name"
                className="bg-gray-50"
              />
            </div>
            <div>
              <img src={bell} alt="" />
            </div>
            <div className="w-[1px] h-6 bg-gray-200 "></div>
            <div className="flex flex-row">
              <img src={Avatar} alt="" />
              <span>
                <ArrowDropDownIcon />
              </span>
            </div>
          </div>
        </div>
        <main className="bg-adminBg pt-6 pl-4 pr-9 h-screen text-white ">
          <div className="flex justify-between">
            <div className="ml-2 flex flex-row items-center justify-center">
              <div>
                <img src={back} alt="" />
              </div>
              <div className="text-xs text-black font-montserrat">Back</div>
              <div className="text-bgOne text-xs font-montserrat ml-4">
                Create invoice {">"}
              </div>
              <div className="text-xs font-Montserrat text-black ml-1">
                Preview{">"}
              </div>
              <div className="text-xs font-montserrat text-black ml-1">
                Compose email
              </div>
            </div>
            <div>
              <button className="font-Montserrat text-sm text-white font-semibold py-2 px-12 rounded-md bg-bgOne">
                Next
              </button>
            </div>
          </div>
          <div className=" flex justify-center mt-5 font-montserrat text-2xl text-black font-extrabold">
            1- What are you invoicing
          </div>
          <div className="mx-auto mt-4 w-[583px] h-[200px] rounded-lg  bg-white px-4">
            <div>
              <input
                type="text"
                placeholder="Domain Name"
                className="pl-4 mt-5 mx-3 bg-adminBg font-Montserrat rounded-md h-[45px] w-[533px]"
              />
            </div>
            <div className="w-full flex flex-row">
              <div className="w-1/2">
                <input
                  type="number"
                  placeholder="Price"
                  className="pl-4 mt-5 mx-3 bg-adminBg font-Montserrat rounded-md h-[45px] w-[250px]"
                />
              </div>
              <div className="w-1/2">
                <input
                  type="number"
                  placeholder="Struck of Price"
                  className="pl-4 ml-5 mt-5 mx-3 bg-adminBg font-Montserrat rounded-md h-[45px] w-[250px]"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end text-black font-montserrat text-2xl font-medium">
              $1000.00
            </div>
          </div>
          <div className="w-[583px] mx-auto mt-5 gap-3 flex flex-row items-center">
            <div>
              <img src={create} alt="" />
            </div>
            <div className="text-admText font-medium text-2xl font-montserrat">
              Add line item
            </div>
          </div>
          <div className=" flex justify-center mt-5 font-montserrat text-2xl text-black font-extrabold">
            2- Client information
          </div>
          <div className="mx-auto mt-4 w-[583px] h-[150px] rounded-lg  bg-white px-4">
            <input
              type="text"
              placeholder="Client Name"
              className="pl-4 mt-5 mx-3 bg-adminBg font-Montserrat rounded-md h-[45px] w-[533px]"
            />
            <input
              type="text"
              placeholder="Client Email"
              className="pl-4 mt-5 mx-3 bg-adminBg font-Montserrat rounded-md h-[45px] w-[533px]"
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default AdminPannelAllDomains;
