import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8081/init",
  headers: {
    "Content-type": "application/json",
  },
});
