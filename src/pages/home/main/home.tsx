import {
    Grid
} from '@material-ui/core';
import NavBar from '../../../components/serviceCategory/main/navigationBar/navigationBar';
import Footer from '../../../components/serviceCategory/main/footer/footer';
import useStyles, { theme as Theme } from './homestyles';
import React from 'react';
import Banner from '../../../components/home/banner/banner';
const HomePage = () => {
    const classes = useStyles();
    return (
            <div>
                <NavBar backGround='transparent' shadow='none' />
                <Grid container>
                    <Grid item sm={12}>
                    <Banner />
                    </Grid> 
                    <Footer/>
                </Grid>
            </div>
    )
}

export default HomePage;