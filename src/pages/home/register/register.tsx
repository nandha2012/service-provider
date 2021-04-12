// node module Imports
import React, { useState, useRef } from 'react';
import {
    Container, Typography,
    Grid, Box,
    Breadcrumbs, Link,
    Dialog, Button, Zoom,
    Slide,
} from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    useHistory
} from "react-router-dom";
import { TransitionProps } from '@material-ui/core/transitions';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';

// Assets  imports
import logo from '../../../assets/img/ourgenie-logo.svg';
//Styles imports
import registerStyles from './registerStyles';

//Component imports
import UserRegister from '../../../components/register/user/userRegister';
import { ThunkDispatch } from 'redux-thunk';
import { addChange } from '../../../redux/actions/registerAction';
import { connect } from 'react-redux';
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const Register: React.FC = (props: any): JSX.Element => {
    const history = useHistory();
    const [open,toggle] = useState(true);
    const [isProfessional,setProfession]= useState(false);
    const classes = registerStyles();
    const handleForm = (event)=>{
        if(event.target.id === "professional"){
            setProfession(true);
            console.log('isprofessional')
        }
        
    }
    return (
        <div>
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
                            <form noValidate>
                                <Grid container spacing={2}>
                                    <UserRegister isProfessional={isProfessional}/>
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
            <Dialog fullScreen open={open} TransitionComponent={Transition}>
                <Container maxWidth='sm' className={classes.dialogContainer}>
                    <Grid container className={classes.dialogContent}>
                        <Grid item sm={12}>
                            <Typography variant='h3' className={classes.dialogHeading}>May I Know Who are?</Typography>
                        </Grid>
                        <Grid item container sm={12}>
                            <Grid item sm={12}>
                                <Button className={classes.button} id='professional' onClick={()=>{ 
                                    setProfession(true);
                                    toggle(false);
                                    props.addChange('user_type', "professional")
                                }}>Professional</Button>
                            </Grid>
                            <Grid item sm={12}>
                                <Button className={classes.button} id='user' onClick={()=>{ 
                                                                        setProfession(false);
                                                                        toggle(false);
                                                                        props.addChange("user_type", "customer")
                                                                    }} 
                                >User</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Dialog>
        </div>
    )
}
const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
    return ({
        addChange: (field: any, fieldValue: string) => dispatch(addChange(field, fieldValue)),
    })
}
export default connect(null,mapDispatchToProps)(Register);