import {
    AppBar,
    Badge,
    Button,
    Toolbar
} from '@material-ui/core';
import React from 'react';
import logo from '../../../../assets/img/header-logo.png';
import navStyles from './navigationStyle'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const CartCount = 4;
const NavigatonBar = () => {
    const classes = navStyles();
    return (<div>
        <AppBar className={classes.root} position='fixed'>
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
    </div>)

}
export default NavigatonBar;