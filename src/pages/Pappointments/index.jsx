import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Autocomplete, Card, CardContent } from "@mui/material";
import DiagBox from "../../components/DiagBox";
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import SnackbarUtils from "../../components/SnackbarUtils";


function Pappointments() {
    const [appointments, setAppointments] = React.useState([]);

    React.useEffect(() => {
        fetch("api/Accepted")
            .then((res) => res.json())
            .then((data) => {
                setAppointments(data);
            });
    }, []);

  return (
    <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 , mb : 2}} color="text.primary" gutterBottom>
            Appointment Requests
          </Typography>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Booking Id</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Email</TableCell>
                  {/* <TableCell align="center">Phone</TableCell> */}
                  {/* <TableCell align="center">Sex</TableCell> */}
                  <TableCell align="center">Time Slot</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {appointments.map((row) => (
                  <TableRow
                    key={row.book_id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.book_id}
                    </TableCell>
                    <TableCell align="center">{row.FirstName + " " + row.LastName}</TableCell>
                    <TableCell align="center">{row.email}</TableCell>
                    {/* <TableCell align="center">{row.Phone}</TableCell>
                    <TableCell align="center">{row.Sex}</TableCell> */}
                    <TableCell align="center">{new Date(row.time_slot).toLocaleString()}</TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        color="success"
                        startIcon={<ThumbUpAltIcon />}
                        sx={{ mr: 2 }}
                        size="small"
                      >
                        Accept
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        startIcon={<ThumbDownAltIcon />}
                        size="small"
                      >
                        Cancel
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>  
      </Card>
  )
}

export default Pappointments