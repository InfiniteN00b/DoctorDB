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
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import SnackbarUtils from "../../components/SnackbarUtils";
import TaskAltIcon from '@mui/icons-material/TaskAlt';

// function createData(name, calories, fat, carbs, protein, price) {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//     price,
//     history: [
//       {
//         date: "2020-01-05",
//         customerId: "11091700",
//         amount: 3,
//       },
//       {
//         date: "2020-01-02",
//         customerId: "Anonymous",
//         amount: 1,
//       },
//     ],
//   };
// }

// const rows = [
//   createData(1, "Patient 1", "M", 9482667152, "20/03/2022"),
//   createData(2, "Patient 2", "M", 9482667152, "20/03/2022"),
//   createData(3, "Patient 3", "M", 9482667152, "20/03/2022"),
//   createData(4, "Patient 4", "M", 9482667152, "20/03/2022"),
//   createData(5, "Patient 5", "M", 9482667152, "20/03/2022"),

// ];

// function Row(props) {
//   const { row } = props;
//   const [open, setOpen] = React.useState(false);

//   return (
//     <React.Fragment>
//       <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
//         <TableCell>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//         </TableCell>
//         <TableCell component="th" scope="row">
//           {row.name}
//         </TableCell>
//         <TableCell align="right">{row.calories}</TableCell>
//         <TableCell align="right">{row.fat}</TableCell>
//         <TableCell align="right">{row.carbs}</TableCell>
//         <TableCell align="right">{row.protein}</TableCell>

//       </TableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box sx={{ margin: 1 }}>
//               <Typography variant="h6" gutterBottom component="div">
//                 Details
//                 <IconButton aria-label="edit" color="error" sx={{float: "right"}}>
//                   <DeleteIcon />
//                 </IconButton>
//               </Typography>
//               <Table size="small" aria-label="purchases">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Sl no</TableCell>
//                     <TableCell align="center">Disease</TableCell>
//                     <TableCell align="center">Medicine Suggested</TableCell>
//                     <TableCell align="right">Edit / Delete / Add</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {row.history.map((historyRow) => (
//                     <TableRow key={historyRow.date}>
//                       <TableCell>{historyRow.customerId}</TableCell>
//                       <TableCell align="center">{historyRow.amount}</TableCell>
//                       <TableCell align="center">Paraceta</TableCell>
//                       <TableCell align="right">
//                         <IconButton aria-label="edit" color="primary">
//                           <EditIcon />
//                         </IconButton>
//                         <IconButton aria-label="delete" color="error">
//                           <DeleteIcon />
//                         </IconButton>
//                         <IconButton aria-label="add" color="secondary">
//                           <AddCircleSharpIcon />
//                         </IconButton>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// }

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };

const searchlist = ["patient1", "patient2"];

export default function Ddash() {
  const [open, setOpen] = React.useState(false);
  const [appointments, setAppointments] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/appointments")
      .then((res) => {
        if (res.status !== 200) {
          SnackbarUtils.error("Error fetching appointments");
          throw new Error("Error fetching appointments");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setAppointments(data);
      })
      .catch((err) => {
        console.error(err);
        SnackbarUtils.error("Error fetching appointments");
      });
  }, []);

  const handleClick = (id) => {
    fetch("/api/accepted/" + id)
      .then((res) => {
        if (res.status !== 200) {
          SnackbarUtils.error("Error accepting appointments");
          throw new Error("Error accepting appointments");
        }
        return res.json();
      })
      .then((data) => {
        setAppointments(data);
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
        SnackbarUtils.error("Error accepting appointments");
      })
  }

  const handleCancel = (id) => {
    fetch("/api/cancel/"+ id)
      .then((res) => {
        if (res.status !== 200) {
          SnackbarUtils.error("Error cancelling appointments");
          throw new Error("Error cancelling appointments");
        }
        return res.json();
      })
      .then((data) => {
        setAppointments(data);
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
        SnackbarUtils.error("Error cancelling appointments");
      })
  }

  return (
    <div className="main">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 20, mb: 2 }}
            color="text.primary"
            gutterBottom
          >
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
                    <TableCell align="center">
                      {row.FirstName + " " + row.LastName}
                    </TableCell>
                    <TableCell align="center">{row.email}</TableCell>
                    {/* <TableCell align="center">{row.Phone}</TableCell>
                    <TableCell align="center">{row.Sex}</TableCell> */}
                    <TableCell align="center">
                      {new Date(row.time_slot).toLocaleString()}
                    </TableCell>
                    <TableCell align="right">
                      {!row.accepted ? (
                        <>
                          <Button
                            variant="contained"
                            color="success"
                            startIcon={<ThumbUpAltIcon />}
                            sx={{ mr: 2 }}
                            size="small"
                            onClick={() => {handleClick(row.book_id)}}
                          >
                            Accept
                          </Button>
                          <Button
                            variant="contained"
                            color="error"
                            startIcon={<ThumbDownAltIcon />}
                            size="small"
                            onClick={() => {handleCancel(row.book_id)}}
                          >
                            Cancel
                          </Button>
                        </>
                      ):(
                        <>
                          <TaskAltIcon color="success" sx={{mr: 2, verticalAlign: 'middle'}} />
                          <Button
                            variant="contained"
                            color="error"
                            startIcon={<ThumbDownAltIcon />}
                            size="small"
                            onClick={() => {handleCancel(row.book_id)}}
                          >
                            Cancel
                          </Button>
                        </>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      {/* <TableContainer component={Paper}>
          <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom style={{marginLeft : 16, marginTop : 16}}>
            Patients Details
          </Typography>
        <div style={{display: 'inline-block'}}>
          <Button
            color="primary"
            variant="contained"
            startIcon={<AddCircleSharpIcon />}
            sx={{ margin: 2 }}
            onClick={() => setOpen(true)}
          >
            Add Patient
          </Button>
        </div>
        <div style={{display: 'inline-block', margin: 16, float: 'right'}}>
          <Autocomplete
            freeSolo
            id="search-demo"
            disableClearable
            align = 'right'
            options={searchlist}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Search input"
                InputProps={{
                  ...params.searchlist,
                  type: "search",
                }}
                size = 'small'
              />
            )}
          />
        </div>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell> Patient ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Sex</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Birth Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
        <DiagBox open={open} setOpen={setOpen} />
      </TableContainer> */}
    </div>
  );
}
