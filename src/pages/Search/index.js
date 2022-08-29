import React from "react";
import { Grid } from "@mui/material";

import Header from "../../common/Header";

const styles = {
  gridContainer: {
    border: "1px solid red",
    width: "100vw",
    height: "100vh",
    padding: "10px 30px",
  },
  title: {
    fontSize: "40px",
    color: "#fff",
    fontWeight: "200",
  },
  text: {
    fontSize: "40px",
    color: "#fff",
    margin: " 100px auto",
  },
  divider: {
    width: "98%",
    border: "1px solid #fff",
    margin: "0 auto",
  },
};

const Search = () => {
  return (
    <Grid container direction="column" sx={styles.gridContainer}>
      <Header />

      <Grid item>
        //TODO la tabla contenedora de cartas de puse reutilizar 
      </Grid>
    </Grid>
  );
};

export default Search;
