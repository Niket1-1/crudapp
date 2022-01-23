import React from "react";
import back from "../Assests/Images/backend.jpg";
import { makeStyles } from "@material-ui/core";

const usestyle = makeStyles({
  conta: {
    widht: "3000px",
    height: "91.3vh",
    margin: "0 0 0 15%",
  },
});
const Landing = () => {
  const style = usestyle();
  return (
    <>
      <img className={style.conta} src={back} alt="" />
    </>
  );
};

export default Landing;
