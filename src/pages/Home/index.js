import React from "react";
import { Navigate } from "react-router-dom";
import { Grid } from "@mui/material";
import TeamList from "./TeamList";
import LayoutContainer from "../../common/LayoutContainer";


const styles = {
  title: {
    fontSize: "50px",
    color: "#fff",
    display: "inline-block",
  },
  gridContainer: {
    border: "1px solid red",
    width: "100vw",
    // height: "100vh",
    padding: "10px 30px",
  },
};

const Home = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      {!token && <Navigate to="/" />}
      <LayoutContainer>
        <TeamList />
      </LayoutContainer>
    </>
  );
};

export default Home;
