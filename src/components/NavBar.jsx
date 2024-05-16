import { DeveloperBoard, Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";

function NavBar() {
  const [open, setOpen] = useState(false);
  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));

  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  const UserBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
    display: "none",
    alignItems: "center",
    gap: "10px",
  }));

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
        <Search>
          <InputBase
            sx={{
              width: "100%",
            }}
            placeholder="Search..."
          ></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            onClick={(e) => {
              setOpen(true);
            }}
            sx={{
              height: 30,
              width: 30,
            }}
            src="https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?t=st=1715793785~exp=1715797385~hmac=5fa2020d2d062ff5c0cf10df78084e851090d905f9d0847988bd8cc7614b9eac&w=1060"
          ></Avatar>
        </Icons>
        <UserBox>
          <Avatar
            onClick={(e) => {
              setOpen(true);
            }}
            sx={{
              height: 30,
              width: 30,
            }}
            src="https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?t=st=1715793785~exp=1715797385~hmac=5fa2020d2d062ff5c0cf10df78084e851090d905f9d0847988bd8cc7614b9eac&w=1060"
          ></Avatar>
          <Typography variant="span">Sam</Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => {
          setOpen(false);
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default NavBar;
