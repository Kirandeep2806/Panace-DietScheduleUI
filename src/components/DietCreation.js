import React, { useState } from "react";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";
import '../styles/DietCreation.scss';
import { TextField, IconButton, Grid } from "@mui/material";
import { AddOutlined, DeleteOutline } from "@mui/icons-material";

const DietCreation = () => {
    const [time,setTime] = useState(new Date().toString());

    // replace the "new Date().toString()" with the selected date or the one fetched from the DB

    function handleTimeChange(changeTime) {
        let newDate = new Date(time);
        newDate.setHours(changeTime.$H);
        newDate.setMinutes(changeTime.$m);
        newDate.setSeconds(changeTime.$s);
        setTime(newDate.toString());
    }

    return (
        <Grid container spacing={2} className="diet-creation-container">
            <Grid item lg={2} xl={2} md={3} sm={3} xs={4}>
                {/* <Item> */}
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TimePicker label="Enter Time" defaultValue={dayjs(time)} onChange={(val) => handleTimeChange(val)}  className="components"/>
                        {/* <p>{time}</p> */}
                    </LocalizationProvider>
                {/* </Item> */}
            </Grid>
            <Grid item lg={8} xl={9} md={7} sm={7} xs={6}>
                <TextField variant="outlined" label="Enter the diet" required className="components"></TextField>
            </Grid>
            <Grid item lg={1} xs={1} sm={1}>
                <IconButton aria-label="add-new-entry" className="crud-icons">
                    <AddOutlined color="primary" fontSize="medium"/>
                </IconButton>
            </Grid>
            <Grid item lg={1} xs={1} sm={1}>
                <IconButton aria-label="delete-entry" className="crud-icons">
                    <DeleteOutline color="error" fontSize="medium" />
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default DietCreation;
