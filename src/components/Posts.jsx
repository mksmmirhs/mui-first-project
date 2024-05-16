import {
  Favorite,
  FavoriteBorder,
  MoreVertOutlined,
  Share,
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

function Posts() {
  return (
    <Card
      sx={{
        margin: 5,
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            src="https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?t=st=1715793785~exp=1715797385~hmac=5fa2020d2d062ff5c0cf10df78084e851090d905f9d0847988bd8cc7614b9eac&w=1060"
          ></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertOutlined />
          </IconButton>
        }
        title="Ocean View"
        subheader="May 14, 2024"
      />
      <CardMedia
        component="img"
        image="https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Gazing out at the ocean view, you're met with an endless expanse of
          cerulean blue, shimmering under the sun like a vast treasure chest of
          jewels. The rhythmic crash of waves against the shore creates a
          lullaby for the soul, while salty spray tingles on your skin, carrying
          the invigorating scent of the sea. It's a vista that both soothes and
          energizes, an invitation to lose yourself in the beauty and boundless
          energy of nature.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Posts;
