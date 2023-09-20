import tw from "tailwind-styled-components";

export const Footer = tw.div`
 bg-bgOne h-[800px] text-white lg:h-[400px] max-sm:flex max-sm:flex-col max-sm:justifty-center  
`;
export const Container = tw.div`
container mx-auto py-8 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 lg:pr-[0px] 
`;
export const Col1 = tw.div`
 lg:w-[300px] my-4 ml-[15px] mr-[30px] lg:ml-[40px]
`;
export const ImageHolder = tw.div`
 bg-white rounded-md py-4 flex justify-center
`;
export const Text = tw.div`
 font-montserrat text-sm pt-4
`;
export const Col2 = tw.div`
   my-1  lg:my-4 lg:pl-[80px] text-center lg:text-left
`;
export const Heading = tw.div`
 text-xl  font-semibold
`;
export const SubText = tw.div`
text-sm pt-4 cursor-pointer
`;
export const Col3 = tw.div`
   my-4 pr-[10px] lg:pr-[50px] text-center
`;
export const InputHolder = tw.div`
inline-flex items-center border border-gray-300 rounded-md p-[1px] pl-5 bg-white
`;
export const IconsWrapper = tw.div`
flex gap-4 ml-[110px] lg:ml-[80px] 
`;
export const line = tw.div`
border-t-2 border-white w-full h-1
`;

export const Copyright = tw.div`
 text-center pt-[20px] lg:pt-[20px] lg:pb-[10px]
`;
