import React,{useState,useEffect} from "react";
import '@fontsource/roboto/400.css';
import { Button, Typography } from "@mui/material";
import '../styles/Home.scss';
import { CalendarMonthOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";

const Home = () => {
    const navigate = useNavigate();
    const [currentUser,setCurrentUser] = useState(undefined);
    useEffect(()=>{
        const user = authService.getCurrentUser();
        if (user) {
            setCurrentUser(user);
        }
    },[]);
    const handleNavigate = () => {
        if(currentUser !== undefined) navigate("/schedule");
        else navigate("/login");
    }
    return (
        <div className="home-div">
            <Typography variant="h3">
                Wanna schedule your diet?
            </Typography><br/><br/>
            <Button variant="contained" color="success" startIcon={<CalendarMonthOutlined />} size="large" onClick={() => {handleNavigate()}}>Click Here</Button>
        </div>
    );
}

export default Home;
