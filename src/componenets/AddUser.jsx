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
import { useState } from "react";
import { addUser } from "../Service/api";
import { useHistory } from "react-router-dom";
const usestyle = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "&>*": {
      marginTop: 20,
    },
  },
});
// Mkaing Initial state using Object
const initialValue = {
  name: "",
  username: "",
  email: "",
  phoneno: "",
  gender: "",
  hobbie: "",
};

const AddUser = () => {
  const style = usestyle();
  // useState Hooks to store initial data
  const [user, setUser] = useState(initialValue);
  const { name, username, email, phoneno, gender, hobbie } = user;
  // Using usehistory hooks
  const history = useHistory();

  // Functon To get data  From input boxes using onChange Event
  const onvaluec = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Functio On add employee button to get All users details and then store it in user and with the use of useHistory link to all user page
  const addUserDetails = async () => {
    await addUser(user);
    history.push("./all");
  };
  return (
    <>
      <FormGroup className={style.container}>
        <Typography variant="h4">Add New Employee Details</Typography>
        <FormControl>
          <InputLabel>Enter Employee Name</InputLabel>
          <Input onChange={(e) => onvaluec(e)} name="name" value={name} />
        </FormControl>

        <FormControl>
          <InputLabel>Enter Employee Email</InputLabel>
          <Input onChange={(e) => onvaluec(e)} name="email" value={email} />
        </FormControl>
        <FormControl>
          <InputLabel> Enter Employee Mob No</InputLabel>
          <Input onChange={(e) => onvaluec(e)} name="phoneno" value={phoneno} />
        </FormControl>
        <FormControl>
          <InputLabel></InputLabel>
          <Input
            placeholder="d"
            type="date"
            onChange={(e) => onvaluec(e)}
            name="username"
            value={username}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Gender</InputLabel>
          <Input onChange={(e) => onvaluec(e)} name="gender" value={gender} />
        </FormControl>
        <FormControl>
          <InputLabel>Hobbies</InputLabel>
          <Input onChange={(e) => onvaluec(e)} name="hobbie" value={hobbie} />
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => addUserDetails()}
        >
          Add Employee
        </Button>
      </FormGroup>
    </>
  );
};

export default AddUser;
