import { Add, Settings } from "@mui/icons-material";
import { Button, styled, Typography } from "@mui/material";

function App() {
  const MyButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.otherColor.main,
    m: 5,
    "&:hover": {
      backgroundColor: "lightblue",
    },
  }));
  return (
    <>
      <Button variant="text">Text</Button>
      <Button
        variant="contained"
        color="otherColor"
        size="medium"
        startIcon={<Settings />}
      >
        Settings
      </Button>
      <Button
        variant="contained"
        color="success"
        size="medium"
        startIcon={<Add />}
      >
        Add new post
      </Button>
      <Button variant="outlined" disabled>
        Outlined
      </Button>
      <Typography variant="h1" component="p">
        This is a p tag but uses the style of h1
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#888",
          m: 5,
          "&:hover": {
            backgroundColor: "lightgrey",
          },
        }}
      >
        My unique button
      </Button>
      <MyButton>This is my button</MyButton>
    </>
  );
}

export default App;
