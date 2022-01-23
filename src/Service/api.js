import axios from "axios";
// Json Server Url
const url = "http://localhost:3002/users";

// Get request using Axios for both empty and with id Url
export const getUsers = async (id) => {
  id = id || " ";
  return await axios.get(`${url}/${id}`);
};

//  Post request using Axios

export const addUser = async (user) => {
  return await axios.post(url, user);
};

//Put Or Patch request using Axios

export const editUser = async (id, user) => {
  return await axios.put(`${url}/${id}`, user);
};

//delete  request using Axios
export const deleteUser = async (id) => {
  return await axios.delete(`${url}/${id}`);
};
