import React from 'react';
import { Grid, Divider, Typography, Button } from '@mui/material';



const styles = {
    gridContainer: {
        border: "1px solid red",
        padding: "40px 60px",
        backgroundColor: "#222629",
        borderRadius: "60px"
    },
    title: {
        fontSize: "40px",
        color: "#fff",
        fontWeight: "200"
    },
    text: {
        fontSize: "40px",
        color: "#fff",
        margin: " 100px auto"
    },
    divider: {
        width: "98%",
        border: "1px solid #fff",
        margin: "0 auto"
    }
}

const TeamList = () => {
    return (
        <Grid container sx={styles.gridContainer}>
            <Grid padding={2} container item justifyContent="space-between" sx={{border: "1px solid green"}}>
                <Typography sx={styles.title} variant="h3">Mi equipo</Typography>
                <Button  variant="contained">
                    Agregar heroe
                </Button>
            </Grid>
            <div style={styles.divider}></div>
            <Grid container item sx={{border: "1px solid green"}}>
                <Typography sx={styles.text}>Agrega heroes a tu equipo</Typography>
            </Grid>
        </Grid>
    );
}

export default TeamList;

