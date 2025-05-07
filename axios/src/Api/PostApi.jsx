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
