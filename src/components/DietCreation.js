import React, { useState } from "react";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";
import '../styles/DietCreation.scss';
import { TextField, IconButton, Grid, Tooltip, Fab } from "@mui/material";
import { AddOutlined, DeleteOutline } from "@mui/icons-material";
import SaveIcon from '@mui/icons-material/Save';

const DietCreation = () => {
    const [time,setTime] = useState(new Date().toString());
    const [rows, setRows] = useState([{
        id : 0,
        time: new Date().toString(),
        diet: ""
    }]);

    const [seq, setSeq] = useState(1);

    // replace the "new Date().toString()" with the selected date or the one fetched from the DB

    function handleTimeChange(changeTime) {
        let newDate = new Date(time);
        newDate.setHours(changeTime.$H);
        newDate.setMinutes(changeTime.$m);
        newDate.setSeconds(changeTime.$s);
        setTime(newDate.toString());
    }

    const deleteRow = (id) => {
        // console.log(id);
        setRows(rows.filter(obj => (obj.id !== id )))
    }

    const changeDiet = (id, txt)  => {
        let ind = -1;
        for(let i=0; i<rows.length; i++) {
            if(rows[i].id === id) {
                ind = i;
                break;
            }
        }
        // console.log(ind);
        let cloneRows = [...rows];
        cloneRows[ind].diet = txt;
        setRows(cloneRows);
        // console.log(rows);
    }

    const addRow = (id) => {
        let ind = -1;
        for(let i=0; i<rows.length; i++) {
            if(rows[i].id === id) {
                ind = i;
                break;
            }
        }

        const newRow = {
            id: seq,
            time: new Date().toString(),
            diet: ""
        };

        const cloneRows = [...rows];
        cloneRows.splice(ind+1, 0, newRow);
        setSeq(seq + 1);
        setRows(cloneRows);
    };

    return (
        <div style={{ margin: "1rem 0" }}>
            { rows!==null && rows.map(obj => (
                <Grid container spacing={2} className="diet-creation-container" key={obj.id}>
                    <Grid item lg={2} xl={2} md={3} sm={3} xs={3}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <TimePicker label="Enter Time" defaultValue={dayjs(obj.time)} onChange={(val) => handleTimeChange(val)}  className="components"/>
                                {/* <p>{time}</p> */}
                            </LocalizationProvider>
                    </Grid>
                    <Grid item lg={9} xl={9} md={7} sm={6} xs={5}>
                        <TextField aria-label="Enter the diet" variant="outlined" label="Enter the diet" required className="components" onChange={(e) => changeDiet(obj.id, e.target.value)}></TextField>
                    </Grid>
                    <Grid item lg={1} xl={1} xs={4} sm={3} md={2}>
                        <IconButton aria-label="add-new-entry" className="crud-icons" onClick={() => addRow(obj.id)}>
                            <AddOutlined color="primary" fontSize="medium"/>
                        </IconButton>
                        <IconButton aria-label="delete-entry" className="crud-icons delete" onClick={() => deleteRow(obj.id)} {...(rows.length<2 && {disabled:true})}>
                            <DeleteOutline color="error" fontSize="medium" />
                        </IconButton>
                    </Grid>
                </Grid>
            ))}
            <Tooltip title='Save Diet'>
                <Fab color="success" sx={{ position: "fixed", bottom: 30, right: 110 }} >
                    <SaveIcon />
                </Fab>
            </Tooltip>
        </div>
    )
}

export default DietCreation;
