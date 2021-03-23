import {
    TextareaAutosize,
    Container,
    TextField,
    Typography,
    Grid,
    Button,
    Box,
    Breadcrumbs,
    Link
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import React, { useState, useRef } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { addChange, addError, removeError } from '../../redux/actions/registerAction';
import store from '../../redux/store';
import { isValid } from '../../validation/registrationValidation';
import registerStyles from '../../styles/main/registerStyles';
import imageIcon from '../../../src/assets/img/photos.svg';
import dragImage from '../../../src/assets/img/fileupload.svg';
import { useAuth } from '../../context/authContext';
import { useHistory } from "react-router-dom";
import logo from '../../assets/img/ourgenie-logo.svg';
const Register: React.FC = (props: any): JSX.Element => {
    const classes = registerStyles();
    const { signup } = useAuth()
    const history = useHistory()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [formState, setFormState] = useState({
        BusinessName: '',
        OwnerName: '',
        registredPhone: '',
        alternatePhone: '',
        whatsupNumber: '',
        Category: '',
        subCategory: '',
        address: '',
        description: '',
        emailId: '',
        GST_Number: '',
        AccountName: '',
        IFSC_code: '',
        Branch: '',
        PaymentTerm: '',
    })
    const [upload, setFiles] = useState({
        GST_certificate: '',
        photo1: '',
        photo2: '',
        photo3: ''
    })

    const validateField = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        let field = event.target.id;
        let fieldVale = event.target.value;
        isValid(field, fieldVale, props);
    }
    function handleChangeText(event: React.ChangeEvent<HTMLInputElement>) {
        let value = event.target.value;
        value = value.replace(/[^A-Za-z]/gi, "");
        console.log(event.target.name);
        props.addChange(event.target.name, value);

    }
    function handleChangeNumber(event: React.ChangeEvent<HTMLInputElement>) {
        const regex = /^[0-9\b]+$/;
        const value = event.target.value;
        if (value === '' || regex.test(value)) {
            props.addChange(event.target.name, value);
        }
    }
    function handleSelect(event: React.ChangeEvent<{ name?: string; value: unknown }>) {
        let value = event.target.value;
        const name = event.target.name;
        props.addChange(name, value)
    }
    function handleTextArea(event: React.ChangeEvent<HTMLTextAreaElement>) {
        let value = event.target.value;
        props.addChange(event.target.id, value);
    }
    function handleFiles(event: React.ChangeEvent<HTMLInputElement>) {
        let target = event.target.id;
        let fileList = event.target.files;
        setFiles((event) => ({ ...upload, [target]: fileList }))
    }
    async function handleSubmit(event) {
        event.preventDefault()

        try {
            setError("")
            setLoading(true)
            await signup(props.state.registrationReducer.emailId, props.state.registrationReducer.password)
            history.push("/login")
        } catch {
            setError("Failed to create an account")
        }

        setLoading(false)
    }
    return (
        <Grid container>
            <Grid item className={classes.registerHeader}>
                <Box className={classes.headerContainer}>
                    <img src={logo} alt="App Logo" className={classes.headerImg} />
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} className={classes.breadCum} >
                        <Link color="inherit" href="/login">
                            Home
                        </Link>
                        <Link color="inherit" href="/getting-started/installation/">
                            Register
                        </Link>
                    </Breadcrumbs>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12}>
                <Box className={classes.containerWrapper}>
                    <Container className={classes.registerContainer} fixed>
                        <Typography align='center' variant='h2' className={classes.registerHeading}>Register</Typography>
                        <form className={classes.form} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={4}>
                                    <Typography>Business name</Typography>
                                    <TextField name="BusinessName"
                                        variant="outlined"
                                        value={props.state.registrationReducer.BusinessName}
                                        className={classes.inputField}
                                        onChange={handleChangeText}
                                        color="secondary"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Typography>Owner name</Typography>
                                    <TextField
                                        name="OwnerName"
                                        variant="outlined"
                                        className={classes.inputField}
                                        value={props.state.registrationReducer.OwnerName}
                                        onChange={handleChangeText}
                                        color="secondary"
                                    />
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    <Typography>Category</Typography>
                                    <TextField
                                        select
                                        className={classes.inputField}
                                        value={props.state.registrationReducer.Category}
                                        variant="outlined"
                                        onChange={handleSelect}
                                        inputProps={{
                                            name: 'Category'
                                        }}
                                    >
                                        <option aria-label="None" value="" />
                                        <option value={10}>Ten</option>
                                        <option value={20}>Twenty</option>
                                        <option value={30}>Thirty</option>
                                    </TextField>
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    <Typography>User Name</Typography>
                                    <TextField variant="outlined"
                                        className={classes.inputField}
                                        name="userName"
                                        id='userName'
                                        value={props.state.registrationReducer.registredPhone}
                                        onChange={handleChangeText}
                                        color="secondary"
                                    />
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    <Typography>Password</Typography>
                                    <TextField variant="outlined"
                                        className={classes.inputField}
                                        name="password"
                                        type='password'
                                        id='password'
                                        onChange={handleChangeText}
                                        error={props.state.registrationReducer.error_password}
                                        helperText={props.state.registrationReducer.error_password ? "Password should consist of one alphabet,one number,one symbol" : ""}
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
                                        error={props.state.registrationReducer.error_confirmPassword}
                                        helperText={props.state.registrationReducer.error_confirmPassword ? "Required same as password" : ""}
                                        onChange={handleChangeText}
                                        onBlur={validateField}
                                    />
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    <Typography>Sub Category</Typography>
                                    <TextField
                                        select
                                        value={props.state.registrationReducer.subCategory}
                                        className={classes.inputField}
                                        variant="outlined"
                                        onChange={handleSelect}
                                        inputProps={{
                                            name: 'subCategory',
                                        }}
                                    >
                                        <option aria-label="None" value="" />
                                        <option value={10}>Ten</option>
                                        <option value={20}>Twenty</option>
                                        <option value={30}>Thirty</option>
                                    </TextField>
                                </Grid>
                                <Grid item sm={8} xs={12}>
                                    <Typography>Address</Typography>
                                    <TextareaAutosize className={classes.textArea}
                                        aria-label="minimum height"
                                        rowsMin={3}
                                        name="address"
                                        placeholder='Add Your address'
                                        onChange={handleTextArea}
                                    />
                                </Grid>
                                <Grid item sm={12} xs={12}>
                                    <Typography>About your service / description</Typography>
                                    <TextField variant="outlined"
                                        className={classes.inputField}
                                        name="description"
                                        color="secondary"
                                        onChange={handleChangeText} />
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    <Typography>Registred Phone No</Typography>
                                    <TextField variant="outlined"
                                        className={classes.inputField}
                                        name="registredPhone"
                                        id='mobile'
                                        value={props.state.registrationReducer.registredPhone}
                                        onChange={handleChangeNumber}
                                        color="secondary"
                                    />
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    <Typography>Alternate phone no</Typography>
                                    <TextField variant="outlined"
                                        className={classes.inputField}
                                        name="alternatePhone"
                                        id='mobile'
                                        value={props.state.registrationReducer.alternatePhone}
                                        onChange={handleChangeNumber}
                                        color="secondary"
                                    />
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    <Typography>Email id</Typography>
                                    <TextField variant="outlined"
                                        className={classes.inputField}
                                        name="emailId"
                                        id='emailId'
                                        color="secondary"
                                        error={props.state.registrationReducer.error_email}
                                        helperText={props.state.registrationReducer.error_email ? "Enter valid email" : ""}
                                        onChange={handleTextArea}
                                        onBlur={validateField}
                                    />
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    <Typography>GST number </Typography>
                                    <TextField variant="outlined"
                                        className={classes.inputField}
                                        name="GST_Number"
                                        color="secondary"
                                        onChange={handleChangeText}
                                    />
                                </Grid>
                                <Grid item sm={8} xs={12}>
                                    <Typography>GST certificate</Typography>
                                    <Button className={classes.imageButton} >
                                        <input
                                            accept="image/*"
                                            style={{ display: "none" }}
                                            name="GST_certificate"
                                            multiple
                                            type="file"
                                            onChange={() => { console.log("test") }}
                                        />
                                        <label htmlFor="GST_certificate">
                                            <img className={classes.imageIcon} src={dragImage} />
                                            <Typography style={{ marginTop: '20px' }}>Drag it Here</Typography>
                                        </label>
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <Typography variant='h5'>Bank details</Typography>
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    <Typography>Account name</Typography>
                                    <TextField variant="outlined"
                                        className={classes.inputField}
                                        name="AccountName"
                                        color="secondary"
                                        onChange={handleChangeText}
                                    />
                                </Grid>
                                <Grid item sm={2} xs={12}>
                                    <Typography>IFSC code </Typography>
                                    <TextField variant="outlined"
                                        className={classes.inputField}
                                        name="IFSC_code"
                                        color="secondary"
                                        onChange={handleChangeText}
                                    />
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    <Typography>Branch</Typography>
                                    <TextField variant="outlined"
                                        className={classes.inputField}
                                        name="Branch"
                                        color="secondary"
                                        onChange={handleChangeText}
                                    />
                                </Grid>
                                <Grid item container sm={2} xs={12}>
                                    <Typography>Payment term</Typography>
                                    <TextField
                                        select
                                        className={classes.inputField}
                                        name="PaymentTerm"
                                        value={props.state.registrationReducer.PaymentTerm}
                                        variant="outlined"
                                        onChange={handleSelect}
                                        inputProps={{
                                            name: 'PaymentTerm'
                                        }}
                                    >
                                        <option aria-label="None" value="" />
                                        <option value={10}>Ten</option>
                                        <option value={20}>Twenty</option>
                                        <option value={30}>Thirty</option>
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <Typography >Photo</Typography>
                                </Grid>
                                <Grid item container sm={12} spacing={2}>
                                    <Grid item className={classes.imageField} sm={4} xs={12} >
                                        <Button className={classes.imageButton}>
                                            <input
                                                accept="image/*"
                                                style={{ display: "none" }}
                                                id="photo1"
                                                multiple
                                                type="file"
                                                onChange={handleFiles}
                                            />
                                            <label htmlFor="photo1">
                                                <img className={classes.imageIcon} src={imageIcon} />
                                            </label>
                                        </Button>
                                    </Grid>

                                    <Grid item className={classes.imageField} sm={4} xs={12}>
                                        <Button className={classes.imageButton} >
                                            <input
                                                accept="image/*"
                                                style={{ display: "none" }}
                                                id="photo2"
                                                type="file"
                                                onChange={handleFiles}
                                            />
                                            <label htmlFor="photo2">
                                                <img className={classes.imageIcon} src={imageIcon} />
                                            </label>
                                        </Button>
                                    </Grid>
                                    <Grid item className={classes.imageField} sm={4} xs={12}>
                                        <Button className={classes.imageButton} >
                                            <input
                                                accept="image/*"
                                                style={{ display: "none" }}
                                                id="photo3"
                                                multiple
                                                type="file"
                                                onChange={() => { console.log("test") }}
                                            />
                                            <label htmlFor="photo3">
                                                <img className={classes.imageIcon} src={imageIcon} />
                                            </label>
                                        </Button>
                                    </Grid>
                                </Grid>
                                <Grid item sm={8} xs={12}>
                                    <Typography>Whatsup number</Typography>
                                    <TextField name="whatsupNumber"
                                        id='mobile'
                                        variant="outlined"
                                        value={props.state.registrationReducer.whatsupNumber}
                                        onChange={handleChangeNumber}
                                        className={classes.inputField}
                                        color="secondary" />
                                </Grid>
                                <Grid item sm={4}>
                                    <Button className={clsx(classes.button, classes.cancel)}>Cancel</Button>
                                    <Button className={clsx(classes.button, classes.register)}
                                        onClick={handleSubmit}
                                        disabled={loading}
                                    >Register</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Container>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} >
                <Box className={classes.registerFooter}>
                    <Typography>@2020, Our Genie</Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

const mapStateToProps = (states: any) => {
    return {
        state: states
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return ({
        addChange: (field: any, fieldValue: string) => dispatch(addChange(field, fieldValue)),
        addError: (field: any) => dispatch(addError(field)),
        removeError: (field: any) => dispatch(removeError(field)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);