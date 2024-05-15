import { DeveloperBoard } from "@mui/icons-material";
import { AppBar, styled, Toolbar, Typography } from "@mui/material";

function NavBar() {
  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography
          variant="h6"
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          MUI dev
        </Typography>
        <DeveloperBoard
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        />
      </StyledToolBar>
    </AppBar>
  );
}

export default NavBar;
