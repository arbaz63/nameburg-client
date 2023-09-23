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
        <div className="z-10">
          <p className="font-bold">49%</p>
          <p className="text-xs leading-[3px] pt-0 text-right uppercase">off</p>
        </div>
      </S.container>
      {/* Brand Image */}
      <div>
        <img src={domainData.image && domainData.image} alt="" />
      </div>
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
