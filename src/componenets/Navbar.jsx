import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

import { NavLink } from "react-router-dom";

const Style = makeStyles({
  header: {
    background: "#081230",
    position: "static",
  },
  tabs: {
    color: "white",
    textDecoration: "none",
    marginRight: 20,
    fontSize: 20,
  },
});

const Navbar = () => {
  const styles = Style();
  return (
    <AppBar className={styles.header}>
      <Toolbar>
        <NavLink className={styles.tabs} to="./" exact>
          Home
        </NavLink>
        <NavLink className={styles.tabs} to="all" exact>
          All Employee Data
        </NavLink>
        <NavLink className={styles.tabs} to="add" exact>
          Add New Employee
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
