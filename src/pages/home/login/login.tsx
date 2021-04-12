import { Box, Button, Grid, InputLabel, Snackbar, TextField, Typography,Link } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import loginStyles, { DividerWithText } from './loginStyles';
import FacebookAuth from 'react-facebook-auth';
import logo from "../../../assets/img/logo-.png";
import { logIn, removeAlert } from '../../../redux/actions/userAction'
import clsx from 'clsx';
import logUser from '../../../services/api/login';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
const MyFacebookButton = ({ onClick }) => {
    const classes = loginStyles();
    return (
        <Button className={clsx(classes.button, classes.faceButton)} onClick={onClick}>
            Facebook
        </Button>
    )
};

const Login = (props) => {
    console.log(props);
    const classes = loginStyles();
    const [loginDetails, setValue] = useState({
        userid: "",
        password: ""
    })
    const { loginWithRedirect, isAuthenticated, user } = useAuth0();
    const responseFacebook = (response: any) => {
        console.log(response);
        localStorage.setItem("user_name",response.name);
        //localStorage.setItem("mobile_no",res.data.result[0][0].mobile_no);
        window.location.href="/userProfile";
    }
    const handleChange = (event) => {
        setValue((loginDetails) => ({
            ...loginDetails,
            [event.target.id]: event.target.value
        }))
    }
    const handleLogin = () => {
        const formData = new FormData();
        for (const key in loginDetails) {
            let keys = key;
            let value = loginDetails[key];
            formData.append(keys, value)
        }
        props.logIn(formData);
    }
    return (
        <Grid container>
            <Grid item sm={4} className={classes.leftPannel}>
            </Grid>
            <Grid container item className={classes.formContainer} sm={8}>
                <Grid item sm={12} className={classes.formHeader}>
                    <img src={logo} />
                    <h1 className={classes.heading}>SIGN IN OR SIGN UP TO CONTINUE </h1>
                </Grid>
                <Grid container item sm={12} xs={12} className={classes.inputContainer}>
                    <Grid item xs={12} >
                        <InputLabel htmlFor="userName" className={classes.formLabel}>User Name</InputLabel>
                        <TextField id="userid"
                            className={classes.formField}
                            variant="outlined"
                            color="secondary"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <InputLabel htmlFor="password" className={classes.formLabel}>Password</InputLabel>
                        <TextField id="password"
                            className={classes.formField}
                            variant="outlined"
                            color="secondary"
                            type='password'
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item sm={12} xs={12}>
                        <Button className={clsx(classes.button, classes.continueButton)} onClick={handleLogin}>
                            CONTINUE
                        </Button>
                        <Button className={clsx(classes.button, classes.otpButton)}>Generate otp</Button>
                    </Grid>
                    <Grid item>
                        <Link>
                            <Typography> Or Forgot password ?</Typography>
                        </Link>
                    </Grid>
                </Grid>
                <Grid item sm={12} xs={12}>
                    <Typography className={classes.OrDivider}>OR</Typography>
                </Grid>
                <Grid item sm={12} xs={12}>
                    <Button className={clsx(classes.button, classes.googleButton)} onClick={() => console.log(loginWithRedirect())}>
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
                    <Snackbar open={props.state.userReducer.toggle} onClose={() => { props.removeAlert() }}>
                        <Alert onClose={() => { props.removeAlert() }} severity="warning">
                            {props.state.userReducer.error_message}
                        </Alert>
                    </Snackbar>
                </Grid>
            </Grid>
        </Grid>
    )
}

//creating Alert Element
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
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
        logIn: (formDate) => dispatch(logIn(formDate)),
        removeAlert:() =>dispatch(removeAlert()),
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);