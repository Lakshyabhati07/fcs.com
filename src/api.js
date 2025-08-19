// src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000", // Your backend API base URL
});

export default API;
