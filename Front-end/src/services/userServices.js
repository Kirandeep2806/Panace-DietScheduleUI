import axios from "axios";
import authHeader from "./authHeader";

const API_URL = "http://localhost:4001/";

const getDiet = (email,date) => {
    const data = {
      email : email,
      date : date,
    };
    return axios.post(API_URL + "dietData", data, { headers: authHeader() });
  };

const uploadDiet = (email,date,rows) => {
  const data = {
    email : email,
    date : date,
    rows : rows
  };
  return axios.post(API_URL + "diet", data, { headers: authHeader() });
};

const UserService = {
  getDiet,
  uploadDiet
};

export default UserService;