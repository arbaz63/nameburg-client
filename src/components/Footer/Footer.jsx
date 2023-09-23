import * as S from "./FooterStyled";
import logo from "../../Images/Nameburg-Logo.svg";
import { useNavigate } from "react-router-dom";
import Line3 from "../../Images/Line3.png";
import SendIcon from "../../Images/SendIcon.png";

function Footer() {
  const navigate = useNavigate();
  const handleNavigationHome = () => {
    navigate("/");
  };
  const handleNavigationSignIn = () => {
    navigate("/Sign-in");
  };
  const handleNavigationAbout = () => {
    navigate("/AboutUs");
  };
  const handleNavigationTerms = () => {
    navigate("/TermsAndConditions");
  };
  return (
    <S.Footer>
      <S.Container>
        <S.Col1>
          <S.ImageHolder>
            <img src={logo} alt="Nameburg Logo" className="" />
          </S.ImageHolder>
          <S.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sed
            nobis excepturi laudantium voluptatem eos, alias tenetur qui magnam
            maiores amet cumque error quaerat doloremque voluptatum autem!
          </S.Text>
        </S.Col1>
        <S.Col2>
          <S.Heading>Quick Link</S.Heading>
          <S.SubText onClick={handleNavigationHome}>Home</S.SubText>
          <S.SubText onClick={handleNavigationAbout}>About Nameburg</S.SubText>
          <S.SubText onClick={handleNavigationSignIn}>Login</S.SubText>
          <S.SubText onClick={handleNavigationTerms}>
            Terms & conditions
          </S.SubText>
        </S.Col2>
        <S.Col3>
          <S.Heading>News Letter</S.Heading>
          <S.Text>
            Subscribe to our news letter to get our latest updates & news
          </S.Text>
          <S.InputHolder>
            <input
              type="text"
              placeholder="Your email address"
              className="w-[260px] border-none text-black bg-white outline-none"
            />
            <div className=" bg-bgOne py-1 px-2 rounded">
              <img src={SendIcon} alt="" />
            </div>
          </S.InputHolder>
        </S.Col3>
      </S.Container>
      <div className="w-[80%] mx-auto lg:w-[87%]">
        <img src={Line3} alt="" className="pt-4" />
      </div>

      <S.Copyright>© Copyright 2023 Nameburg. All rights reserved.</S.Copyright>
    </S.Footer>
  );
}

export default Footer;
