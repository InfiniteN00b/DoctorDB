import React, { useEffect } from "react";
import { useState } from "react";
import App from "../../App";
import AppointmentCard from "../../components/AppointmentCard";
import Typography from "@mui/material/Typography";
import { Card, Grid } from "@mui/material";

function Pdash() {
  const [doctorsList, setDoctorsList] = useState([]);

  useEffect(() => {
    fetch("/api/doctors")
      .then((res) => res.json())
      .then((data) => {
        setDoctorsList(data);
      });
  }, []);
  
  return (
    
    <>
      <Typography
        sx={{ fontSize: 20 }}
        color="text.primary"
        gutterBottom
        style={{ marginLeft: 32 }}
      >
        Doctors Available
      </Typography>
      <Grid container spacing={4} justifyContent="space-evenly" padding={3}>
        {doctorsList.map((doctor) => (
          <Card sx={{ maxWidth: 345, mt: 2 }}>
            <AppointmentCard props={doctor} />
          </Card>
        ))}
      </Grid>
    </>
  );
}

export default Pdash;
