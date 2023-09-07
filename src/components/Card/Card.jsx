import Show from "../../Images/Show.png";
import * as S from "./CardStyled";

function Card({ image }) {
  return (
    <S.main>
      <S.container>
        <S.holder>
          <span className="pr-1">
            <img src={Show} alt="" className="w-4" />
          </span>
          <span>278</span>
        </S.holder>
        <div className="z-10">
          <p className="font-bold">49%</p>
          <p className="text-xs leading-[3px] pt-0 text-right uppercase">off</p>
        </div>
      </S.container>
      {/* Brand Image */}
      <div>
        <img src={image} alt="" />
      </div>
      <S.Text>
        <div className="px-4 pt-2">
          <p className="text-xs line-through decoration-[#ff0808]">$1969</p>
          <p className="text-sm font-bold">$1500</p>
        </div>
        <div className="px-4">
          <p className="text-base font-normal">ario.com</p>
        </div>
      </S.Text>
    </S.main>
  );
}

export default Card;
