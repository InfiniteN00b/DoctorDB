import * as React from 'react';
import dayjs from 'dayjs';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Stack } from '@mui/system';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import SnackbarUtils from '../SnackbarUtils';



export default function DiagBox({open, setOpen, user}) {
  const [sex, setSex] = React.useState(user.sex);
  const [value, setValue] = React.useState(dayjs(user.bdate));
  const firstNameRef = React.useRef(null);
  const lastNameRef = React.useRef(null);
  const phoneRef = React.useRef(null);

  const handleClose = () => {
    setOpen(false);
  };

  function submitDetails() {
    fetch('/api/profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "id": user.id,
            "firstName": firstNameRef.current.value,
            "lastName": lastNameRef.current.value,
            "phone": phoneRef.current.value,
            sex,
            "dob": value.toISOString().substring(0, 10)
        })
    }).then((res) => res.json())
      .then((data) => {
        SnackbarUtils.success("Details updated successfully")
        window.location.reload()
        handleClose()
      })
      .catch((err) => {
        console.error(err)
        SnackbarUtils.error("Something went wrong")
      })

  }


  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Details</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{fontWeight: "bold"}}>Add your details here: </DialogContentText>
        <Stack direction="column" spacing={2} width={350}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            inputRef={firstNameRef}
            label="First Name"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={user.FirstName}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            inputRef={lastNameRef}
            label="Last Name"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={user.LastName}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sex</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sex}
              label="Sex"
              variant="standard"
              onChange={(event) => setSex(event.target.value)}
            >
              <MenuItem value="M">Male</MenuItem>
              <MenuItem value="F">Female</MenuItem>
              <MenuItem value="O">Other</MenuItem>
            </Select>
          </FormControl>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            inputRef={phoneRef}
            label="Phone"
            type="text"
            fullWidth
            defaultValue={user.phone}
            variant="standard"
          />
          <br></br>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
                label="Birth Date"
                disableFuture
                minDate={dayjs().subtract(150, 'year')}
                maxDate={dayjs()}
                inputFormat="DD/MM/YYYY"
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={submitDetails}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}