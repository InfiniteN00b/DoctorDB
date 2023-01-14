import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

const doctorsList = [
  {
    DoctorId: "1",
    Firstname: "Dr. InfiniteN00b",
    Lastname: "Exe",
    Speciality: "Cardiologist",
    Image: "https://source.unsplash.com/random",
    Description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    DoctorId: "2",
    Firstname: "Dr. InfiniteN00b",
    Lastname: "Exe",
    Speciality: "Orthopedist",
    Image: "https://source.unsplash.com/random",
    Description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    DoctorId: "3",
    Firstname: "Dr. InfiniteN00b",
    Lastname: "Exe",
    Speciality: "Dentist",
    Image: "https://source.unsplash.com/random",
    Description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    DoctorId: "4",
    Firstname: "Dr. InfiniteN00b",
    Lastname: "Exe",
    Speciality: "Dermatologist",
    Image: "https://source.unsplash.com/random",
    Description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    DoctorId: "5",
    Firstname: "Dr. InfiniteN00b",
    Lastname: "Exe",
    Speciality: "Gynecologist",
    Image: "https://source.unsplash.com/random",
    Description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    DoctorId: "6",
    Firstname: "Dr. InfiniteN00b",
    Lastname: "Exe",
    Speciality: "Neurologist",
    Image: "https://source.unsplash.com/random",
    Description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    DoctorId: "7",
    Firstname: "Dr. InfiniteN00b",
    Lastname: "Exe",
    Speciality: "Ophthalmologist",
    Image: "https://source.unsplash.com/random",
    Description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    DoctorId: "8",
    Firstname: "Dr. InfiniteN00b",
    Lastname: "Exe",
    Speciality: "Pediatrician",
    Image: "https://source.unsplash.com/random",
    Description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
];

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function AppointmentCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid container spacing={4} justifyContent="space-evenly" padding={3}>
      {doctorsList.map((i) => (
        <Card sx={{ maxWidth: 345, m : 2 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            title={i.Firstname + " " + i.Lastname}
            subheader={"Doctor ID: " + i.DoctorId}
          />
          <CardMedia
            component="img"
            height="194"
            image={i.Image}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {i.Speciality + " -\n " + i.Description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            {/* <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                <ShareIcon />
                </IconButton> */}
            <Button variant="contained" color="primary">
              Book Appointment
            </Button>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron
                and set aside for 10 minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep
                skillet over medium-high heat. Add chicken, shrimp and chorizo,
                and cook, stirring occasionally until lightly browned, 6 to 8
                minutes. Transfer shrimp to a large plate and set aside, leaving
                chicken and chorizo in the pan. Add pimentón, bay leaves,
                garlic, tomatoes, onion, salt and pepper, and cook, stirring
                often until thickened and fragrant, about 10 minutes. Add
                saffron broth and remaining 4 1/2 cups chicken broth; bring to a
                boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes
                and peppers, and cook without stirring, until most of the liquid
                is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
                reserved shrimp and mussels, tucking them down into the rice,
                and cook again without stirring, until mussels have opened and
                rice is just tender, 5 to 7 minutes more. (Discard any mussels
                that don&apos;t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then
                serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </Grid>
  );
}
