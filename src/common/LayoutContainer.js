import React from 'react';
import { Grid } from "@mui/material";
import Header from './Header';



const LayoutContainer = ({children}) => {
    return (
        <Grid container sx={{border: "1px solid red"}}>
            <Header />
            {children}
        </Grid>
    );
}

export default LayoutContainer;
