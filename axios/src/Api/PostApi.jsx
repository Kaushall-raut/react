import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

//Get method to get data
export const getData = () => {
  return api.get("/posts");
};

//delete method to delete api data
export const deleteData = (id) => {
  return api.delete(`/posts/${id}`);
};

//post method to add data in the api
export const addData = (data) => {
  return api.post("/posts", data); //payload ,data that will added in the api
};
