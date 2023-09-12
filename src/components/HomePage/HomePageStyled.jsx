import tw from "tailwind-styled-components";

export const HeroBanner = tw.div`
 flex flex-col items-center justify-center h-[350px]
  bg-gradient-to-r from-bgOne via-bgOne to-bgTwo text-white
`;

export const TextHolder = tw.div`
font-normal text-[28px] lg:text-5xl font-Montserrat
`;

export const InputHolder = tw.div`
inline-flex items-center border border-gray-300 rounded-sm
 p-[1px] pl-5 bg-white lg:w-[520px] h-[36px] py-2 pl-2 mt-10
`;
export const LeadHeading = tw.div`
font-montserrat font-extrabold text-3xl lg:text-4xl text-black text-center pt-10
`;
export const SectionUnder = tw.div`
text-center max-w-[440px] mx-auto font-montserrat pt-4 px-2
`;
export const IconsSection = tw.div`
flex flex-wrap flex-col lg:flex-row max-w-[600px] mx-auto items-center justify-center gap-6 px-2
`;
export const Heading = tw.div`
text-4xl font-Montserrat text-black font-extrabold mb-10
`;
export const Container = tw.div`
mx-8 lg:mx-10
`;
export const IconsHolder = tw.div`
grid grid-cols-2 lg:grid-cols-4 gap-4 
`;
export const ButtonHolder = tw.div`
flex justify-center mt-5 
`;
export const HeadingTwo = tw.div`
 flex justify-center text-4xl font-montserrat text-black font-extrabold mt-10
`;
export const Subtext = tw.div`
flex justify-center text-es text-gray-500 font-montserrat mt-8
`;
export const SubtextTwo = tw.div`
flex justify-center text-es text-gray-500 font-montserrat
`;
export const FieldsHolder = tw.div`
flex flex-row flex-wrap gap-6 mt-5 items-center justify-center 
`;
export const ButtonHolderTwo = tw.div`
 flex justify-center mt-5 
`;
