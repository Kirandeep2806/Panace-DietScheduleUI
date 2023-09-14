import axios from "axios";

const API_URL = "http://localhost:4001/";

const register = async (first_name,last_name, email, password) => {
  const response = await axios.post(API_URL + "register", {
    first_name,
    last_name,
    email,
    password,
  });
  localStorage.setItem("user", JSON.stringify(response.data));
};

const login = async (email, password) => {
  const response = await axios.post(API_URL + "login", {
      email,
      password,
    });
    localStorage.setItem("user", JSON.stringify(response.data));
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default authService;