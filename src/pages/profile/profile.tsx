import { Box, Container, Grid, Typography, Link } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Footer from '../../components/serviceCategory/main/footer/footer';
import NavigatonBar from '../../components/serviceCategory/main/navigationBar/navigationBar';
import useStyles from './profileStyles';
import profileIcon_1 from '../../assets/img/profileicon-1.svg';
import profileIcon_2 from '../../assets/img/profileicon-2.svg';
import profileIcon_3 from '../../assets/img/profileicon-3.svg';
import profileIcon_4 from '../../assets/img/profileicon-4.svg';
import profileIcon_5 from '../../assets/img/profileicon-5.svg';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';

function Profile(props) {
    const classes = useStyles();
    const [user_details,setUser] = useState({
        userName:'',
        phoneNo:"",
    })
    console.log(props)
    //const userName:;
    //const phoneNo:;
    useEffect(()=>{
        const name= localStorage.getItem('user_name')
        const phone = localStorage.getItem('mobile_no')
        if(name && phone){
            setUser({
            ...user_details,
                userName:name,
                phoneNo:phone
                    })
        }
        
    },[])
    return (
        <div>
            <NavigatonBar />
            <div className={classes.categoryBody}></div>
            <Box className={classes.userProfileArea}>
                <Container maxWidth="sm" className={classes.profileContainer}>
                    <Grid container >
                        <Grid item sm={12} className={classes.userHeading}>
                            <Typography>Profile Information</Typography>
                        </Grid>
                        <Grid item container sm={12} className={classes.contentBlock}>
                            <Grid item sm={12}>
                                <Typography>{user_details.userName}</Typography>
                            </Grid>
                            <Grid item sm={12}>
                                <Typography>{`"+91 ${user_details.phoneNo}"`}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item sm={12} className={classes.contentBlock}>
                                <Link className={classes.content}>
                                    <img src={profileIcon_1} className={classes.imgFluid} />
                                    Manage Address
                                </Link>
                        </Grid>
                        <Grid item sm={12} className={classes.contentBlock}>
                                <Link className={classes.content}>
                                    <img src={profileIcon_2} className={classes.imgFluid} />
                        Contact us
                        </Link>
                        </Grid>
                        <Grid item sm={12} className={classes.contentBlock}>
                            <Link className={classes.content}>
                                <img src={profileIcon_3} className={classes.imgFluid} />
                        Privacy Policy
                        </Link>
                        </Grid>
                        <Grid item sm={12} className={classes.contentBlock}>
                            <Link className={classes.content}>
                                <img src={profileIcon_4} className={classes.imgFluid} />
                            About us
                            </Link>
                        </Grid>
                        <Grid item sm={12} className={classes.contentBlock}>
                            <Link className={classes.content}>
                                <img src={profileIcon_5} className={classes.imgFluid} />
                            FAQ & Terms
                            </Link>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </div>
    )
}
//mapping the redux store state to the component
const mapStateToProps = (states: any) => {
    return {
        state: states
    }
}

//mapping the redux dispatch action to the component
const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
    return ({
        
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)