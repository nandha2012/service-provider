// node modules imports
import { Button, Grid, TextareaAutosize, TextField, Typography, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import clsx from 'clsx';
import Compressor from 'compressorjs';
//Actions imports
import {
    addChange, addError,
    addFiles, removeError,
    addUser,
    removeAlert
} from '../../../redux/actions/registerAction';
import { isValid } from '../../../validation/registrationValidation';
import { useAuth } from '../../../context/authContext';

//styles imports        
import useStyles from './userRegisterStyles';

//Assets imports
import imageIcon from '../../../assets/img/photos.svg';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

function UserRegister(props) {
    // const { signup } = useAuth()
    // const history = useHistory()
    // const [error, setError] = useState("")
    // const [loading, setLoading] = useState(false)
    const [upload, setFiles] = useState({
        GST_certificate: '',
        profile_pic: '',
    })
    //validation for confirm password
    const validateConfirmPassword = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        let password = props.state.userRegistrationReducer.password;
        console.log(password);
        let confirmPassword = event.target.value;
        if ((confirmPassword !== "") && confirmPassword === password) {
            props.removeError("error_confirmPassword");
            props.addError("error_validate");
        }
        else {
            props.addError("error_confirmPassword");
            props.removeError("error_validate");

        }
    }

    //validate every field on onBlur event  
    const validateField = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        let field = event.target.id;
        let fieldVale = event.target.value;
        isValid(field, fieldVale, props);
    }

    //change event handling for text only
    function handleChangeText(event: React.ChangeEvent<HTMLInputElement>) {
        let value = event.target.value;
        value = value.replace(/[^A-Za-z]/gi, "");
        console.log(event.target.name);
        props.addChange(event.target.name, value);

    }

    //change event handling for numbers only
    function handleChangeNumber(event: React.ChangeEvent<HTMLInputElement>) {
        const regex = /^[0-9\b]+$/;
        const value = event.target.value;
        if (value === '' || regex.test(value)) {
            props.addChange(event.target.name, value);
        }
    }

    //change event handling for both
    function handleTextArea(event: React.ChangeEvent<HTMLTextAreaElement>) {
        let value = event.target.value;
        props.addChange(event.target.id, value);
    }

    //change event for the select input
    function handleSelect(event: React.ChangeEvent<{ name?: string; value: unknown }>) {
        let value = event.target.value;
        const name = event.target.name;
        props.addChange(name, value)
    }

    //change event handle for files
    function handleFiles(event: React.ChangeEvent<HTMLInputElement>) {
        let target = event.target.id;
        let fileList = event.target.files;
        if (fileList) {
            //compress the image 
            new Compressor(fileList[0], {
                quality: 0.8,
                convertSize: 1000000,
                success(result) {
                    props.addFiles(target, result);
                },
                error(err) {
                    console.log(err.message);
                },
            });
        }
        setFiles((event) => ({ ...upload, [target]: fileList }))
    }

    //handle the submit event 
    const handleSubmit = (event) => {
        console.log(props.state.userRegistrationReducer);

        event.preventDefault();
        const formData = new FormData();
        for (const key in props.state.userRegistrationReducer) {
            let keys = key;
            let value = props.state.userRegistrationReducer[key];
            formData.append(keys, value)
        }
        for (const key in props.state.fileReducer) {
            let keys = key;
            let value = props.state.fileReducer[key];
            formData.append(keys, value)
        }
        props.addUser(formData);
    }
  
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
      console.log(props.state.registerErrorReducer);
    return (
        <>
            <Grid item sm={6} xs={12}>
                <Typography>First Name</Typography>
                <TextField variant="outlined"
                    className={classes.inputField}
                    name="first_name"
                    id='first_name'
                    value={props.state.userRegistrationReducer.first_name}
                    onChange={handleChangeText}
                    color="secondary"
                />
            </Grid>
            <Grid item sm={6} xs={12}>
                <Typography>Last Name</Typography>
                <TextField variant="outlined"
                    className={classes.inputField}
                    name="last_name"
                    id='last_name'
                    value={props.state.userRegistrationReducer.last_name}
                    onChange={handleChangeText}
                    color="secondary"
                />
            </Grid>
            <Grid item sm={12} xs={12}>
                <Typography>User Name</Typography>
                <TextField variant="outlined"
                    className={classes.inputField}
                    name="username"
                    id='username'
                    value={props.state.userRegistrationReducer.username}
                    onChange={handleChangeText}
                    color="secondary"
                />
            </Grid>
            <Grid item sm={12} xs={12}>
                <Typography>Email id</Typography>
                <TextField variant="outlined"
                    className={classes.inputField}
                    name="userid"
                    id='userid'
                    color="secondary"
                    error={props.state.registerErrorReducer.error_email}
                    helperText={props.state.registerErrorReducer.error_email ? "Enter valid email" : ""}
                    onChange={handleTextArea}
                    onBlur={validateField}
                />
            </Grid>
            <Grid item sm={4} xs={12}>
                <Typography>Password</Typography>
                <TextField variant="outlined"
                    className={classes.inputField}
                    name="password"
                    type='password'
                    id='password'
                    onChange={handleTextArea}
                    error={props.state.registerErrorReducer.error_password}
                    helperText={props.state.registerErrorReducer.error_password ? "Password should consist of one alphabet,one number,one symbol" : ""}
                    color="secondary"
                    onBlur={validateField}
                />
            </Grid>
            <Grid item sm={4} xs={12}>
                <Typography>Confirm Password</Typography>
                <TextField variant="outlined"
                    className={classes.inputField}
                    id='confirmPassword'
                    name='confirmPassword'
                    type='password'
                    error={props.state.registerErrorReducer.error_confirmPassword}
                    helperText={props.state.registerErrorReducer.error_confirmPassword ? "Required same as password" : ""}
                    onChange={handleTextArea}
                    onBlur={validateConfirmPassword}
                />
            </Grid>

            <Grid item sm={4} xs={12}>
                <Typography>Phone No</Typography>
                <TextField variant="outlined"
                    className={classes.inputField}
                    name="primary_phone_no"
                    id='mobile'
                    value={props.state.userRegistrationReducer.primary_phone_no}
                    onChange={handleChangeNumber}
                    color="secondary"
                />
            </Grid>
            {props.isProfessional ? <><Grid item sm={4} xs={12}>
                <Typography>Alternative Phone No</Typography>
                <TextField variant="outlined"
                    className={classes.inputField}
                    name="secondary_phone_no"
                    id='Alternate_mobile'
                    value={props.state.userRegistrationReducer.secondary_phone_no}
                    onChange={handleChangeNumber}
                    color="secondary"
                />
            </Grid>
                <Grid item sm={8} xs={12}>
                    <Typography>Service</Typography>
                    <TextField
                        select
                        variant="outlined"
                        className={classes.inputField}
                        inputProps={{
                            name: 'services'
                        }}
                        value={props.state.userRegistrationReducer.services}
                        onChange={handleSelect}
                        label="service"
                    >
                        <option aria-label="None" value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </TextField>
                </Grid></> : null
            }
            <Grid item sm={6} xs={12}>
                <Typography>Address</Typography>
                <TextareaAutosize className={classes.textArea}
                    aria-label="minimum height"
                    rowsMin={11}
                    id="address"
                    name="address"
                    placeholder='Add Your address'
                    onChange={handleTextArea}
                />
            </Grid>
            <Grid item container sm={6} spacing={2}>
                <Grid item className={classes.imageField} sm={12} xs={12} >
                    <Typography >Photo</Typography>
                    <Button className={classes.imageButton}>
                        <input
                            accept="image/*"
                            style={{ display: "none" }}
                            id="profile_pic"
                            multiple
                            type="file"
                            onChange={handleFiles}
                        />
                        <label htmlFor="profile_pic">
                            <img className={classes.imageIcon} src={imageIcon} />
                        </label>
                    </Button>
                </Grid>
            </Grid>
            <Grid item sm={12} style={{ textAlign: 'center' }}>
                <Button className={clsx(classes.button, classes.cancel)}>Cancel</Button>
                <Button className={clsx(classes.button, classes.register)}
                    onClick={handleSubmit}
                    disabled={props.state.userRegistrationReducer.loading}
                >Register</Button>
            </Grid>
            <Snackbar open={props.state.registerErrorReducer.toggle} onClose={()=>{props.removeAlert()}}>
                <Alert onClose={()=>{props.removeAlert()}} severity="warning">
                   {props.state.registerErrorReducer.message}
        </Alert>
            </Snackbar>
        </>
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
        addChange: (field: any, fieldValue: string) => dispatch(addChange(field, fieldValue)),
        addFiles: (field: any, fieldVale: any) => dispatch(addFiles(field, fieldVale)),
        addError: (field: any) => dispatch(addError(field)),
        removeError: (field: any) => dispatch(removeError(field)),
        addUser: (userObj: any) => dispatch(addUser(userObj)),
        removeAlert:() =>dispatch(removeAlert()),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(UserRegister);