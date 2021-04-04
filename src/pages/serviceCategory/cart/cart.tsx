import {
    Grid,
    Typography,
    Button,
    Container,
    Box,
    Table,
    TableContainer,
    TableBody,
    TableRow
} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { GroupedButtons } from "../productList/productList"
import cleanKit from '../../../assets/img/cleaning-kit3.png';
import useStyles, { TableCell,theme } from './cartStyles';
import Percentage from '../../../assets/img/offer.svg';
import React, { useState } from 'react';
import { Paper } from '@material-ui/core';
import clsx from 'clsx';
const Products = [{
    id: "1001",
    name: "Avaon Mop Cleaning Bruch..",
    image: cleanKit,
    description: "this the product description",
    rating: '4.3',
    orginalPrice: "250",
    discountPrice: "100 ",
    viewsCount: '200',
}]
const Cart = () => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
        <div>
            <Box className={classes.serviceCategoryBanner}>
                <Box className={classes.cartBAnnerHeading}>
                    <Typography variant='h2'>A nice section heading goes here</Typography>
                    <Typography variant='h5'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</Typography>
                </Box>
            </Box>
            <Container maxWidth='lg' className={classes.cartWrapper}>
                <Grid container item xs={12} >
                    <Grid container item className={classes.cartContainer}>
                        <Grid item sm={12} className={classes.cartHeading}>
                            <Typography variant='h4'>PAY YOUR SERVICE</Typography>
                        </Grid>
                        <Grid container item xs={12} sm={8} spacing={1}>
                            <Grid item xs={12}>
                                <h1>Added items</h1>
                            </Grid>
                            <Grid container item sm={11}>
                                <CartList />
                            </Grid>
                        </Grid>
                        <Grid container item sm={4} xs={12}>
                            <Pricing />
                        </Grid>
                    </Grid>
                    <Grid item sm={12} className={classes.promoArea}>
                                <Button disabled className={classes.promoHeading}>
                                    <img src={Percentage} />
                                    <Typography>Offers and Promocode</Typography> 
                                </Button>
                    </Grid>
                    <Grid item sm={12} className={classes.payButtonArea}>
                        <Button className={classes.payButton} href='/category/payment'>PAY RS 900</Button>
                    </Grid>
                </Grid>

            </Container>
        </div>
        </ThemeProvider>
    )

}
const CartList = () => {
    const classes = useStyles();

    return (
        <Grid container item className={classes.cartItems} xs={12} spacing={2}>
            <Grid item sm={12}>
                <Typography className={classes.subHeading}>Product Name</Typography>
            </Grid>
            <Grid item xs={2} >
                <img src={Products[0].image} style={{ width: "100%" }} />
            </Grid>
            <Grid container item xs={10} spacing={2}>
                <Grid item xs={12}>
                    <Typography>${Products[0].discountPrice}</Typography>
                </Grid>
                <Grid item sm={2}>
                    <Typography>Quantity</Typography>
                </Grid>
                <Grid container item sm={8} spacing={2}>
                    <Grid item sm={11}>
                        <GroupedButtons />
                    </Grid>
                    <Grid item sm={1}>
                        <Button>REMOVE</Button>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}
const Pricing = () => {
    const classes = useStyles();
    return (
        <>
            <Grid item xs={12} >
                <h1>SUBTOTAL</h1>
            </Grid>
            <Grid item sm={12}>
                <Table>
                    <TableBody>
                        <TableRow className={classes.tabelRow}>
                            <TableCell colSpan={2}>Item total</TableCell>
                            <TableCell>800</TableCell>
                        </TableRow>
                        <TableRow className={classes.tabelRow}>
                            <TableCell colSpan={2}>Tax</TableCell>
                            <TableCell>100</TableCell>
                        </TableRow>
                        <TableRow className={clsx(classes.total, classes.tabelRow)}>
                            <TableCell colSpan={2} className={classes.totalText}>Total</TableCell>
                            <TableCell className={classes.totalText}>900</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Grid>
        </>
    )
}
export default Cart;