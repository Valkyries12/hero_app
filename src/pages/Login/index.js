import { Grid, Typography } from '@mui/material';
import React from 'react';
import FormComponent from './FormComponent';
import { Navigate } from "react-router-dom";

const styles = {
    title: {
        fontSize: "80px"
    }
}

const Login = () => {
    const token = localStorage.getItem("token");
    return (
        <>
            { token && <Navigate to="/home" /> }
            <Grid height={"100%"} container spacing={1} direction="column" justifyContent="center" alignItems="center" >
                <Grid item >
                    <Typography variant="h1" color="#fff" sx={styles.title}>SuperHero App</Typography>
                </Grid>
                <Grid item xs={4}>
                    <FormComponent />
                </Grid>
            </Grid>
        </>
    );
}

export default Login;
