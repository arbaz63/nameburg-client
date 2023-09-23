import { Avatar } from "@mui/material";

function ImgAvatar(props) {
  const avatarSize = props.dropdown ? "23px" : "35px";
  const fontSize = props.dropdown ? "15px" : "20px";
  const backgroundColor = "#BB6CFB"; // Set the background color here

  return (
    <Avatar
      src={props.image}
      alt={props.name}
      sx={{
        height: avatarSize,
        width: avatarSize,
        fontSize: fontSize,
        backgroundColor: backgroundColor,
      }}
    />
  );
}

export default ImgAvatar;
