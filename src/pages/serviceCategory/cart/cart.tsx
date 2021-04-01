import { Grid, Typography, Box, Button } from '@material-ui/core';
import { GroupedButtons } from "../productList/productList"
import cleanKit from '../../../assets/img/cleaning-kit3.png';

import React from 'react';
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

    return (
        <Grid container>
            <Grid item xs={12}>
                My Cart
            </Grid>
            <Grid container item xs={12}>
                <Grid container item xs={8} >
                    <Grid item xs={12}>
                        <h1>PRODUCT</h1>
                    </Grid>
                    <Grid container item>
                        <CartList />
                    </Grid>
                </Grid>
                <Grid container item xs={4}>
                    <Grid item xs={12} >
                        <h1>SUBTOTAL</h1>
                    </Grid>
                    <Grid item >
                        <h3> $Price</h3>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )

}
const CartList = () => {
    return (
        <>
            <Grid item xs={2}>
                <img src={Products[0].image} style={{ width: "100%" }} />
            </Grid>
            <Grid container item xs={10}> 
                <Grid item xs={12}>
                    <Typography>${Products[0].discountPrice}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>Quantity</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Box component='span'>
                        <GroupedButtons />
                    </Box>
                    <Box component='span'>
                        <Button>REMOVE</Button>
                    </Box>
                    <Box component='span'>
                        <Button>UPDATE BAG</Button>
                    </Box>
                </Grid>
            </Grid>

        </>
    )
}
export default Cart;