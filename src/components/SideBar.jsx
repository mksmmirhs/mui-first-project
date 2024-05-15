import { Box } from "@mui/material";

function SideBar() {
  return (
    <Box
      bgcolor={"yellow"}
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      SideBar
    </Box>
  );
}

export default SideBar;
