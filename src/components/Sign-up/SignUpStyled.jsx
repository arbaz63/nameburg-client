import tw from "tailwind-styled-components";

export const Bg = tw.div`
h-screen
flex justify-center items-center
bg-gradient-to-r from-bgOne via-bgOne to-bgTwo
`;
export const Card = tw.div`
w-[360px] h-[600px] lg:w-[600px]  bg-white
 flex  flex-col rounded-lg
`;
export const Text = tw.div`
text-center text-xl  font-bold font-montserrat text-black pt-4  
`;
export const InputHeading = tw.div`
 text-black 
 ml-[25px] lg:ml-[70px] mt-[20px] font-montserrat font-bold
`;
export const constainer = tw.div`
flex w-full 
`;
export const checkboxStart = tw.div`
ml-[20px]  lg:ml-[62px] w-full  mt-2
`;
export const checkboxText = tw.div`
text-sm ml-0 font-montserrat
`;
export const lastPart = tw.div`
text-center mt-[20px] text-sm
`;
