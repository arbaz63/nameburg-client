import { Stack, Avatar } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

function ImgAvatar() {
  const row = "row";
  return (
    <Stack spacing={4}>
      <Stack direction={row} spacing={1}>
        <Avatar src={PersonIcon} alt="" />
      </Stack>
    </Stack>
  );
}

export default ImgAvatar;
