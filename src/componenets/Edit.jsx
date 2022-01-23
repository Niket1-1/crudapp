import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";
import { editUser, getUsers } from "../Service/api";
import { useHistory, useParams } from "react-router-dom";

const usestyle = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "&>*": {
      marginTop: 20,
    },
  },
});

const initialValue = {
  name: "",
  username: "",
  email: "",
  phoneno: "",
  gender: "",
  hobbie: "",
};
const UserEdit = () => {
  const style = usestyle();
  const [user, setUser] = useState(initialValue);
  const { name, username, email, phoneno, gender, hobbie } = user;
  const { id } = useParams();
  // UseHistory hooks to get history and move to another page
  const history = useHistory();

  // UseEffect Hooks to run function only once
  useEffect(() => {
    loaddata();
  }, []);

  // Function to load data
  const loaddata = async () => {
    const res = await getUsers(id);
    setUser(res.data);
  };

  // Function to get values from input Boxes
  const onvaluec = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Functon to Edit User and pass useHistory to refer to other all page
  const editUserDetails = async () => {
    await editUser(id, user);
    history.push("/all");
  };
  return (
    <>
      <FormGroup className={style.container}>
        <Typography variant="h4">Edit Employee Details</Typography>
        <FormControl>
          <InputLabel>Edit Employee Name</InputLabel>
          <Input onChange={(e) => onvaluec(e)} name="name" value={name} />
        </FormControl>

        <FormControl>
          <InputLabel>Edit Employee Email</InputLabel>
          <Input onChange={(e) => onvaluec(e)} name="email" value={email} />
        </FormControl>
        <FormControl>
          <InputLabel>Edit Employee Phone</InputLabel>
          <Input onChange={(e) => onvaluec(e)} name="phoneno" value={phoneno} />
        </FormControl>
        <FormControl>
          <InputLabel>Edit DOB</InputLabel>
          <Input
            type="date"
            onfocus="(this.type='date')"
            onChange={(e) => onvaluec(e)}
            name="username"
            value={username}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Edit Gender</InputLabel>
          <Input onChange={(e) => onvaluec(e)} name="gender" value={gender} />
        </FormControl>
        <FormControl>
          <InputLabel>Edit Hobbies</InputLabel>
          <Input onChange={(e) => onvaluec(e)} name="hobbie" value={hobbie} />
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => editUserDetails()}
        >
          Edit Employee Details
        </Button>
      </FormGroup>
    </>
  );
};

export default UserEdit;
