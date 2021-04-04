import { Grid } from '@material-ui/core';
import NavBar from '../../../components/serviceCategory/main/navigationBar/navigationBar';
import Footer from '../../../components/serviceCategory/main/footer/footer';
import useStyles from './homestyles';
import React from 'react';
const HomePage = () => {
    const classes = useStyles();
    return (
        <div>
            <NavBar />
            <Grid container>
                <Grid item>

                </Grid>
            </Grid>
            <Footer />
        </div>
    )
}
export default HomePage;