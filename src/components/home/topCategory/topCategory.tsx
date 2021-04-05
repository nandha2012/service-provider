import { Container, Grid, Typography, Link, Paper, Card, CardContent, ThemeProvider } from "@material-ui/core"
import React from "react";
import useStyles,{theme as Theme} from "./topCategoryStyles";
import cate05 from '../../../assets/img/cate-05.svg';
const TopCategory = () => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={Theme}>
            <Grid container>
                <Grid container item sm={12}>
                    <Grid item sm={6}>
                        <Typography>Top Categories</Typography>
                        <Typography>Explore the greates our services. You won’t be disappointedTop Categories</Typography>
                    </Grid>
                    <Grid item sm={6}>
                        <Link  >
                            <Typography style={{ color: 'black', right: '-1' }} >View All</Typography>
                        </Link>
                    </Grid>
                </Grid>
                <Grid container item spacing={3}>
                    {[0, 1, 2, 3, 4, 5, 0, 1, 2, 3].map(() => (
                        <Grid item>
                            <Link href='/'>
                                <Card variant="outlined" className={classes.categoryBox}>
                                    <CardContent>
                                        <img src={cate05}/>
                                        <Typography>Plumbing</Typography>
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