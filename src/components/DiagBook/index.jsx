import * as React from 'react';
import dayjs from 'dayjs';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Chip, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Stack } from '@mui/system';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers';
import SnackbarUtils from '../../components/SnackbarUtils';


export default function DiagBox({open, setOpen, doctor, user}) {
    const name = React.useRef(null)
    const phone = React.useRef(null)
    const handleClose = () => {
      SnackbarUtils.warning("Appointment Discarded")
        setOpen(false);
    };


  const [sex, setSex] = React.useState('');
  const [value, setValue] = React.useState(dayjs(new Date()));

  function submitAppointment() {

    fetch('/api/appointment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "pid": user.id,
            "did": doctor.id,
            "timeSlot": value.toDate().toISOString().slice(0, 19).replace('T', ' '),
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        SnackbarUtils.success("Appointment Added Successfully")
        setOpen(false);
    })
    .catch((error) => {
      SnackbarUtils.error("Error Adding Appointment")
      console.error('Error:', error);
    });
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Booking</DialogTitle>
      <DialogContent>
        <DialogContentText>You are Booking for {doctor.FirstName + " " + doctor.LastName}</DialogContentText>
        <Stack direction="column" spacing={2} width={350}>
          <TextField
            autoFocus
            margin="dense"
            inputRef={name}
            id="name"
            label="Name"
            type="name"
            fullWidth
            variant="standard"
            value={user.FirstName + " " + user.LastName} 
          />
          {/* <TextField
            autoFocus 
            margin="dense"
            id="name"
            inputRef={phone}
            disabled
            label="Phone"
            type="email"
            fullWidth
            variant="standard"
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
                label="Date mobile"
                inputFormat="MM/DD/YYYY"
                value={value}
                disabled
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider> */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                label="DateTimePicker"
                value={value}
                disablePast
                maxDate={dayjs().add(10, 'day')}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
            />
        </LocalizationProvider>
        </Stack>
        
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={submitAppointment}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}