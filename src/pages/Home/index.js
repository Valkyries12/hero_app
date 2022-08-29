import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Grid, Typography, Button } from "@mui/material";
import TeamList from "./TeamList";

const styles = {
  title: {
    fontSize: "50px",
    color: "#fff",
    display: "inline-block",
  },
  gridContainer: {
    border: "1px solid red",
    width: "100vw",
    height: "100vh",
    padding: "10px 30px",
  },
};

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const closeSession = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      {!token && <Navigate to="/" />}
      <Grid container direction="column" sx={styles.gridContainer}>
        <Grid
          container
          item
          justifyContent="space-between"
          sx={{ border: "3px solid blue" }}
        >
          <Typography sx={styles.title} variant="h2">
            SuperHero App
          </Typography>
          <Button onClick={closeSession} variant="contained">
            Cerrar sesión
          </Button>
        </Grid>

        <Grid>
            //TODO hace listado de heroes si encontro como si no
            <TeamList />

        </Grid>
      </Grid>
    </>
  );
};

export default Home;
