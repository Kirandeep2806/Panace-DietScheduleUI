import React from 'react';
import EditCalendarRoundedIcon from '@mui/icons-material/EditCalendarRounded';
import { Tooltip, Fab } from "@mui/material";

export default function BottomCalendar() {
    return (
        <Tooltip title="Create Diet Plan">
            <Fab color="success" aria-label="create-diet" sx={{ position: "fixed", bottom: 30, right: 30 }} >
                <EditCalendarRoundedIcon />
            </Fab>
        </Tooltip>
    );
}
