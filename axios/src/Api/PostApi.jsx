import axios from "axios";
import { useEffect } from "react";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});



export const getData = () => {
  return api.get("/posts");
};
