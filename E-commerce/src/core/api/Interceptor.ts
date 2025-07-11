import axios from "axios";

const Interceptor = axios.create({
  baseURL: "https://fakestoreapi.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default Interceptor; 