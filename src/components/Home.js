import React from "react";
import '@fontsource/roboto/400.css';
import { Button, Typography } from "@mui/material";
import '../styles/Home.scss';
import { CalendarMonthOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-div">
            <Typography variant="h3">
                Wanna schedule your diet?
            </Typography><br/><br/>
            <Button variant="contained" color="success" startIcon={<CalendarMonthOutlined />} size="large" onClick={() => navigate("/schedule")}>Click Here</Button>
        </div>
    );
}

export default Home;
