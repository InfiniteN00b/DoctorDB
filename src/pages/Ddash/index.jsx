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





function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>

      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Details
                <IconButton aria-label="edit" color="error" sx={{float: "right"}}>
                  <DeleteIcon />
                </IconButton>
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Sl no</TableCell>
                    <TableCell align="center">Disease</TableCell>
                    <TableCell align="center">Medicine Suggested</TableCell>
                    <TableCell align="right">Edit / Delete / Add</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="center">{historyRow.amount}</TableCell>
                      <TableCell align="center">Paraceta</TableCell>
                      <TableCell align="right">
                        <IconButton aria-label="edit" color="primary">
                          <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete" color="error">
                          <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="add" color="secondary">
                          <AddCircleSharpIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const searchlist = [
  'patient1', 'patient2',
];

const BookDetails = [
  {Id : '1', Name : 'Harry Potter', Email : 'harypoter.abcd@gmail.com' ,Phone: '+91 9944556677',Sex : 'M', },
  {Id : '1', Name : 'Harry Potter', Email : 'harypoter.abcd@gmail.com' ,Phone: '+91 9944556677',Sex : 'M', },
  {Id : '1', Name : 'Harry Potter', Email : 'harypoter.abcd@gmail.com' ,Phone: '+91 9944556677',Sex : 'M', },
  {Id : '1', Name : 'Harry Potter', Email : 'harypoter.abcd@gmail.com' ,Phone: '+91 9944556677',Sex : 'M', },
  {Id : '1', Name : 'Harry Potter', Email : 'harypoter.abcd@gmail.com' ,Phone: '+91 9944556677',Sex : 'M', },
  {Id : '1', Name : 'Harry Potter', Email : 'harypoter.abcd@gmail.com' ,Phone: '+91 9944556677',Sex : 'M', },
  {Id : '1', Name : 'Harry Potter', Email : 'harypoter.abcd@gmail.com' ,Phone: '+91 9944556677',Sex : 'M', },
  
]


export default function Ddash() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="main">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 , mb : 2}} color="text.primary" gutterBottom>
            Appointment Requests
          </Typography>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Phone</TableCell>
                  <TableCell align="center">Sex</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {BookDetails.map((row) => (
                  <TableRow
                    key={row.Name}  
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.Id}
                    </TableCell>
                    <TableCell align="center">{row.Name}</TableCell>
                    <TableCell align="center">{row.Email}</TableCell>
                    <TableCell align="center">{row.Phone}</TableCell>
                    <TableCell align="center">{row.Sex}</TableCell>
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

      <TableContainer component={Paper}>
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
      </TableContainer>
    </div>
  );
}
