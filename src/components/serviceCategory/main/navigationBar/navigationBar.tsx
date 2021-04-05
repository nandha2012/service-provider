import {
    AppBar,
    Badge,
    Button,
    Toolbar
} from '@material-ui/core';
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import logo from '../../../../assets/img/logo.png';
import navStyles,{theme as Theme} from './navigationStyle'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const CartCount = 4;
const NavigatonBar = (props) => {
    const classes = navStyles();
    return (
        <ThemeProvider theme={Theme}>
        <div>
        <AppBar className={classes.root} position='fixed' style={{ background: props.backGround,boxShadow:props.shadow}}>
            <Toolbar>
                <img src={logo} alt='Company name' className={classes.img} />
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                    <Button className={classes.button}>About us</Button>
                    <Button className={classes.button}>Services <ExpandMoreIcon /></Button>
                    <Button className={classes.button}>Blog</Button>
                    <Button className={classes.button} href='/category/cart'>
                        <Badge badgeContent={CartCount} color="primary">
                            <ShoppingCartIcon />
                        </Badge>
                    </Button>
                    <Button className={classes.button} href="/">Sign in/Sign up</Button>
                </div>
            </Toolbar>
        </AppBar>
    </div>
    </ThemeProvider>)

}
export default NavigatonBar;