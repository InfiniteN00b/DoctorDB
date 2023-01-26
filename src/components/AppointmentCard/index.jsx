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
import { Grid, AppBar, Tabs } from "@mui/material";
import DiagBook from "../DiagBook";
import AuthContext from "../AuthContext";



export default function AppointmentCard({props}) {
  const [open, setOpen] = React.useState(false);
  const authContext = React.useContext(AuthContext);

  return (
    <>
      <CardHeader
        avatar={
          // <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          //   {props.Firstname[4]}
          // </Avatar>
          <Avatar alt="Remy Sharp" src={`https://picsum.photos/seed/${props.id}/56/56`} sx={{ width: 56, height: 56 }} />
        }
        title={props.FirstName + " " + props.LastName}
        subheader={"Doctor ID: " + props.id}
        sx={{ width: 300}}
        key={props.id}
      />
      <CardContent> 
        <Typography variant="body1" color="Highlight">
          {props.specialization + " - "}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{height : 80}}>
          {props.description}
        </Typography>
      </CardContent>
      <Button variant="contained" color="primary" sx={{justifyContent: 'center', m : 2}}  onClick={() => (authContext.logged === 1) ? setOpen(true) : window.location = "./login"}>
        Book Appointment
      </Button>
      {open && <DiagBook open={open} setOpen={setOpen} doctor={props} user={authContext.user}/>}
    </>
  );
}
