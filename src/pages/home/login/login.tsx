import { Box, Button, Grid, InputLabel, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useAuth0} from '@auth0/auth0-react';
import loginStyles, { DividerWithText } from './loginStyles';
import FacebookAuth from 'react-facebook-auth';
import logo from "../../../assets/img/logo-.png";
import clsx from 'clsx';
const MyFacebookButton = ({ onClick }) => {
    const classes = loginStyles();
return(
    <Button className={clsx(classes.button, classes.faceButton)} onClick={onClick}>
        Facebook
    </Button>
)};
const Login = () => {
    const classes = loginStyles();
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const responseFacebook = (response: any) => {
       window.location.href="/OurGenie/user-profile.html"
    }
    return (
       
        <Grid container>
            <Grid item sm={4} className={classes.leftPannel}>
            </Grid>
            <Grid container className={classes.formContainer} item sm={8}>
                <Grid item sm={12} className={classes.formHeader}>
                    <img src={logo} />
                    <h1 className={classes.heading}>SIGN IN OR SIGN UP TO CONTINUE </h1>
                </Grid>
                <Grid container item sm={12} xs={12} className={classes.inputContainer}>
                    <Grid item xs={12} >
                        <InputLabel htmlFor="userName" className={classes.formLabel}>User Name</InputLabel>
                        <TextField id="userName"
                            className={classes.formField}
                            variant="outlined"
                            color="secondary"
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <InputLabel htmlFor="password" className={classes.formLabel}>Password</InputLabel>
                        <TextField id="password"
                            className={classes.formField}
                            variant="outlined"
                            color="secondary"
                            type='password'
                        />
                    </Grid>

                    <Grid item sm={12} xs={12}>
                        <Button className={clsx(classes.button, classes.continueButton)}>CONTINUE</Button>
                        <Button className={clsx(classes.button, classes.otpButton)}>Generate otp</Button>
                    </Grid>
                </Grid>
                <Grid item sm={12} xs={12}>
                    <Typography className={classes.OrDivider}>OR</Typography>
                </Grid>
                <Grid sm={12} xs={12}>
                    <Button className={clsx(classes.button, classes.googleButton)} onClick={() => loginWithRedirect()}>
                        Google
                    </Button>
                    <FacebookAuth
                        appId="433292361077876"
                        callback={responseFacebook}
                        component={MyFacebookButton}
                    />

                </Grid>
                <Grid item xs={12}>
                    <Box className={classes.terms}>
                        <Typography style={{ font: ` normal normal normal 16px/19px 'Montserrat-Regular'` }}>
                            Don't have account?<a href="/">Sign up</a>
                        </Typography>
                        <Typography className={classes.footerText}>
                            By creating an account you agree to our Terms of Service and Privacy Policy
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
       
    )
}
export default Login;