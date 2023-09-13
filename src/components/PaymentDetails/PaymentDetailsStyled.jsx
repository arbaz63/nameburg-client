import tw from "tailwind-styled-components";

export const ParentContainer = tw.div`
  lg:mx-20  mt-5 mb-10
`;
export const Conatiner = tw.div`
flex flex-col gap-7 lg:gap-0 lg:justify-between   lg:flex-row
`;
export const PaymentMethods = tw.div`
 shadow-md border border-gray-200  rounded-md w-[350px] mx-auto lg:mx-0 lg:w-[450px]
`;

export const Heading = tw.div`
 text-lg font-bold font-montserrat text-black text-left pt-4
`;
export const InputHolder = tw.div`
 w-full rounded-sm
`;

export const TopText = tw.div`
  flex flex-row gap-5 items-center mb-7
`;
export const OrderSummary = tw.div`
  border border-gray-200 mx-auto lg:mx-0 
`;
