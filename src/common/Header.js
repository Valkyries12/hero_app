import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const styles = {
  title: {
    fontSize: "50px",
    color: "#fff",
    display: "inline-block",
  },
//   gridContainer: {
//     border: "1px solid red",
//     width: "100vw",
//     height: "100vh",
//     padding: "10px 30px",
//   },
};

const Header = () => {
  const navigate = useNavigate();

  const closeSession = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
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
  );
};

export default Header;
