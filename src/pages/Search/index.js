import React from "react";
import { Grid, Button, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";

import LayoutContainer from "../../common/LayoutContainer";
import SearchForm from "./SearchForm";

const styles = {
  gridContainer: {
    border: "2px solid blue",
    // width: "100vw",
    // height: "100vh",
    padding: "20px 20px",
  },
  title: {
    fontSize: "40px",
    color: "#fff",
    fontWeight: "200",
  },
  text: {
    fontSize: "60px",
    color: "#fff",
    margin: " 50px auto",
  },
  divider: {
    width: "98%",
    border: "1px solid #fff",
    margin: "0 auto",
  },
};

const Search = () => {
  const navigate = useNavigate();

  return (
    <LayoutContainer>
      <Grid container sx={styles.gridContainer}>
        <Button onClick={() => navigate("/home")} variant="contained">
          volver al equipo
        </Button>
      </Grid>

      <Grid item container sx={{border: "2px solid yellow"}}>
        <Typography variant="h2" sx={styles.text}>Agregar Superheroe</Typography>
      </Grid>

      <Grid item container justifyContent={"center"}>
        <SearchForm />
      </Grid>
    </LayoutContainer>
  );
};

export default Search;
