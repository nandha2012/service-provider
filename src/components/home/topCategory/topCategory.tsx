import { Container, Grid, Typography, Link, Paper, Card, CardContent, ThemeProvider } from "@material-ui/core"
import React from "react";
import useStyles, { theme as Theme } from "./topCategoryStyles";
import cate05 from '../../../assets/img/cate-05.svg';
const TopCategory = () => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={Theme}>
            <Grid container>
                <Grid container item sm={12} className={classes.categoryContainer}>
                    <Grid item sm={12} xs={12} md={12}>
                        <Typography className={classes.subTitleHeading}>Top Categories</Typography>
                    </Grid>
                    <Grid item sm={12} xs={12} md={6}>
                        <Typography className={classes.subTitlePragraph}>Exploree the greates our services. You won’t be disappointed</Typography>
                    </Grid>
                    <Grid item sm={12} xs={12} md={6}>
                        <Link  >
                            <Typography className={classes.subTitlePragraph} style={{ float: 'right' }} >View All</Typography>
                        </Link>
                    </Grid>
                </Grid>
                <Grid container item>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
                        <Grid item key={value} className={classes.cardContainer} >
                            <Link href='/' >
                                <Card >
                                    <CardContent className={classes.categoryBox}>
                                        <img src={cate05} />
                                        <h3>
                                            plumbing
                                        </h3>
                                    </CardContent>
                                </Card>
                            </Link>
                        </Grid>))
                    }
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}
export default TopCategory;