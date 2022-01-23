import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  makeStyles,
  Button,
} from "@material-ui/core";
import React from "react";
import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../Service/api";
import { Link } from "react-router-dom";

const usestyle = makeStyles({
  table: {
    width: "90%",
    margin: "50px 0 0 50px",
  },
  tab: {
    "&>*": {
      background: "red",
      color: "white",
      fontSize: 20,
    },
  },
  row: {
    "&>*": {
      fontSize: 20,
    },
  },
});

const AllUser = () => {
  // UseState Hooks to store user Data
  const [users, setUser] = useState([]);
  const style = usestyle();

  // using useState Hook for fetching data only on refreshing
  useEffect(() => {
    getAllUsers();
  }, []);

  // Function for get all Users
  const getAllUsers = async () => {
    const res = await getUsers();
    console.log(res.data);
    setUser(res.data);
  };

  // function for delete user and importing a another functiion from service{api}
  const deleteuser = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };
  return (
    <Table className={style.table}>
      {/* Table upper part for Naming */}
      <TableHead>
        <TableRow className={style.tab}>
          <TableCell> Id</TableCell>
          <TableCell> Name</TableCell>
          <TableCell>DOB </TableCell>
          <TableCell> Email</TableCell>
          <TableCell> Phone</TableCell>
          <TableCell> Gender</TableCell>
          <TableCell> Hobbie</TableCell>
          <TableCell> </TableCell>
        </TableRow>
      </TableHead>
      {/* Table Upper Part for heading End */}

      {/* Table Body for Data Displaying */}
      <TableBody>
        {users.map((user) => (
          <TableRow className={style.row}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phoneno}</TableCell>
            <TableCell>{user.gender}</TableCell>
            <TableCell> {user.hobbie}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                style={{ marginRight: "10px" }}
                component={Link}
                to={`/edit/${user.id}`}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteuser(user.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* Table Body for Data diaplaying end */}
    </Table>
  );
};

export default AllUser;
