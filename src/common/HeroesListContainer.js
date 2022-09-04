import React from "react";
import { Grid, Typography } from '@mui/material';


const styles = {
    text: {
        fontSize: "40px",
        color: "#fff",
        margin: " 100px auto"
    },
    gridContainer: {
        backgroundColor: "#222629",
        borderRadius: "60px",
        border: "2px solid pink",
        maxWidth: "90%",
        margin: "4% auto"
        // height: "30vh"
    }
    
}

const HeroesListContainer = ({heroes=[], children}) => {

  return (
    <Grid container item columns={{xs: 4}} sx={styles.gridContainer}>
    {/* podria usar el mismo children para hacer el contenedor de heroes list tanto para home como para lisst 
    y el agrega heroes solo apareceria ene l home */}
      {/* {heroes.lenght > 0 ? <Typography sx={styles.text}>Agrega heroes a tu equipo</Typography> : null} */}

      {children}

    </Grid>
  );
};

export default HeroesListContainer;
