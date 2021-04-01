import React, { useEffect } from 'react';
import {
    Box,
    Button,
    Grid,
    Typography,
} from '@material-ui/core';
import AOS from 'aos';
import "aos/dist/aos.css";
import categoryHomeStyles, { theme } from "./categoryhomeStyles";
import ListFields from '../../../components/serviceCategory/categoryHome/listField/listField';
const CategoryHome = (props: any) => {
    const classes = categoryHomeStyles();
   
    useEffect(() => {
        AOS.init({ duration: 3000 })
    }, [])
    return (
        <Grid>
            <Grid item className={classes.banner}>
                <Box component='div' className={classes.container}>
                    <Box className={classes.headings} zIndex="modal">
                        <Typography className={classes.title}>A nice section heading goes here</Typography>
                        <Typography className={classes.description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item>
                <ListFields />
            </Grid>
            <Grid item className={classes.sectionJoin}>
                <Box className={classes.joinNowWrap}>
                    <Grid container>
                        <Grid item xs={10}>
                            <div data-aos="fade-left">
                                <Typography variant='h4' className={classes.joinHeading}>Professionals Are you looking for Customers?</Typography>
                            </div>
                        </Grid>
                        <Grid item>
                            <div data-aos="fade-left">
                                <Button className={classes.joinButton}>
                                    JOIN NOW
                        </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}
export default CategoryHome;