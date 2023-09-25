import Show from "../../Images/Show.png";
import * as S from "./CardStyled";

function Card({ domainData }) {
  return (
    <S.main>
      <S.container>
        <S.holder>
          <span className="pr-1">
            <img src={Show} alt="" className="w-4" />
          </span>
          <span>{domainData.views}</span>
        </S.holder>
        {domainData.discount !== 0 && (
          <div className="z-10">
            <p className="font-bold">{Math.floor(domainData.discount)}%</p>

            <p className="text-xs leading-[3px] pt-0 text-right uppercase">
              off
            </p>
          </div>
        )}
      </S.container>
      {/* Brand Image */}
      {/* <div>
        <img src={domainData.image && domainData.image} alt="" />
      </div> */}
      <S.ImageContainer>
        <img src={domainData.image && domainData.image} alt="" />
      </S.ImageContainer>
      <S.Text>
        <div className="pt-2">
          <p className="text-xs line-through decoration-[#ff0808]">
            ${domainData.maxPrice}
          </p>
          <p className="text-sm font-bold">${domainData.currentPrice}</p>
        </div>
        <div>
          <p className="text-base font-normal">{domainData.name}</p>
        </div>
      </S.Text>
    </S.main>
  );
}

export default Card;
