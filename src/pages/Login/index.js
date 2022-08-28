import { Grid, Typography } from '@mui/material';
import React from 'react';
import FormComponent from './FormComponent';

const styles = {
    title: {
        fontSize: "80px"
    }
}

const Login = () => {
    return (
        <Grid height={"100%"} container spacing={1} direction="column" justifyContent="center" alignItems="center" sx={{border: "1px solid red"}}>
            <Grid item sx={{border: "2px solid blue"}}>
                <Typography variant="h1" color="#fff" sx={styles.title}>SuperHero App</Typography>
            </Grid>
            <Grid item xs={4} sx={{border: "2px solid blue"}}>
                <FormComponent />
            </Grid>
        </Grid>
    );
}

export default Login;
