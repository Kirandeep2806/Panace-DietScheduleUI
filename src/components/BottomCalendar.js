import React, { useState } from 'react';
import EditCalendarRoundedIcon from '@mui/icons-material/EditCalendarRounded';
import { Tooltip, Fab, Dialog, DialogTitle, DialogContent } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

export default function BottomCalendar() {
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date().toString());

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const setAndClose = (date) => {
        setSelectedDate(date.$d.toString());
        setOpen(false);
    }

    return (
        <React.Fragment>
            <Tooltip title='Create Diet'>
                <Fab color="success" sx={{ position: "fixed", bottom: 30, right: 30 }} onClick={handleOpen} >
                    <EditCalendarRoundedIcon />
                </Fab>
            </Tooltip>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Select a Date</DialogTitle>
                <DialogContent>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <StaticDatePicker defaultValue={dayjs(selectedDate)} componentsProps={{ actionBar:{actions:["accept"]}}} onAccept={setAndClose}/>
                    </LocalizationProvider>
                </DialogContent>
            </Dialog>
            <p>{selectedDate}</p>
        </React.Fragment>
    );
}
