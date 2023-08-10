import React from "react";
import "../styles/CreateSchedule.scss";
import EditCalendarRoundedIcon from '@mui/icons-material/EditCalendarRounded';
import { Tooltip, Fab } from "@mui/material";
import Content from "./Content";

export default function CreateSchedule() {
  return (
    <React.Fragment>
      <Content />
      <Tooltip title="Create Diet Plan">
        <Fab color="success" aria-label="create-diet" sx={{ position: "fixed", bottom: 30, right: 30 }}>
            <EditCalendarRoundedIcon />
        </Fab>
      </Tooltip>
    </React.Fragment>
  );
}
