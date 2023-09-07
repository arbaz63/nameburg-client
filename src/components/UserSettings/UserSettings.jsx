import ImgAvatar from "../Avatar/Avatar";
import * as S from "./UserSettingsStyled";

function UserSettings() {
  return (
    <S.ParentContainer>
      <S.Heading>Account settings</S.Heading>
      <S.AvatarHolder>
        <ImgAvatar />
      </S.AvatarHolder>
      <S.InputHeading>Name</S.InputHeading>
      <S.Display>John Doe</S.Display>
      <S.InputHeading>Email</S.InputHeading>
      <S.Display>johndoe@gmail.com</S.Display>
      <S.InputHeading>Country</S.InputHeading>
      <S.Display>USA</S.Display>
      <S.ChangePassword>Change Password</S.ChangePassword>
      <S.InputHeading>New Password</S.InputHeading>
      <input
        type="password"
        placeholder="New password"
        className="py-2 lg:w-[380px] border border-gray-100 rounded-md  pl-3  font-light "
      />
      <S.InputHeading>Confirm Password</S.InputHeading>
      <input
        type="password"
        placeholder="Confirm password"
        className="py-2 lg:w-[380px] border border-gray-100 rounded-md  pl-3  font-light "
      />
      <S.ButtonHolder>
        <button className="bg-bgOne text-white py-2 px-7 rounded-md font-Montserrat font-semibold text-base mt-4">
          Save
        </button>
      </S.ButtonHolder>
    </S.ParentContainer>
  );
}

export default UserSettings;
