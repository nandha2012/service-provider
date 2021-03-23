import React,{ useEffect,useState } from 'react';
import clsx from 'clsx';
import Carousel from 'react-multi-carousel';
import UAParser from "ua-parser-js";
import Plumbing from "../../../assets/img/cate-01.svg";
import 'react-multi-carousel/lib/styles.css';
import { Paper, Button, Box, Grid, Typography } from '@material-ui/core'
import { ButtonGroupProps, ArrowProps, DotProps } from 'react-multi-carousel/lib/types';
import { ThemeProvider } from '@material-ui/styles';
import listStyle from "../../../styles/serviceCategory/main/mainCategory/listFieldStyles";
import FetchCategory from '../../../services/api/getCategory';

interface CustomLeftArrowProps extends ArrowProps {
    myOwnStuff: string;
}
interface CarouselButtonGroupProps extends ButtonGroupProps {
    className?: string;
}


const CustomDot = ({ active, onClick }: DotProps) => {
    const classes = listStyle();
    const [categoryList, setCategoryList] = useState([] as any);
    useEffect(() => {
        // Update the document title using the browser API
        let fetchedData:string[] = FetchCategory ();
        setCategoryList([...categoryList,fetchedData]);
      });
    return (
        <li>
            <button
                className={clsx(classes.shiftDot,`custom-dot ${active ? "custom-dot--active" : ""}`)}
                onClick={() => onClick}
            />
        </li>
    );
};

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        paritialVisibilityGutter: 60
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        paritialVisibilityGutter: 50
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 30
    }
};
const details = {
    work: 'plumbing'
}

const ListFields = ({ deviceType }: any) => {
    const classes = listStyle();
    return (
        <Grid container className={classes.listContainer}>
            <Grid item >
                <Carousel ssr
                    className={classes.listCarousel}
                    partialVisbile
                    draggable
                    deviceType={deviceType}
                    itemClass="image-item"
                    responsive={responsive}
                    customDot={<CustomDot />}>
                    { [1,2,3,4,5].map(()=>(<Paper className={classes.tiles}>
                        <img src={Plumbing} className={classes.imgFluid} />
                        <Typography className={classes.tileHeading}> Plumbing</Typography>
                    </Paper>))
                    }
                </Carousel>
            </Grid>
            <Grid item container className={classes.categoryList} spacing={3}>
                <Grid item>
                    <Paper elevation={3} className={classes.tiles}>
                        <img src={Plumbing} className={classes.imgFluid} />
                        <Typography className={classes.tileHeading}> Plumbing</Typography>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper elevation={3} className={classes.tiles}>
                        <img src={Plumbing} className={classes.imgFluid} />
                        <Typography className={classes.tileHeading}> Plumbing</Typography>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper elevation={3} className={classes.tiles}>
                        <img src={Plumbing} className={classes.imgFluid} />
                        <Typography className={classes.tileHeading}> Plumbing</Typography>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper elevation={3} className={classes.tiles}>
                        <img src={Plumbing} className={classes.imgFluid} />
                        <Typography className={classes.tileHeading}> Plumbing</Typography>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper elevation={3} className={classes.tiles}>
                        <img src={Plumbing} className={classes.imgFluid} />
                        <Typography className={classes.tileHeading}> Plumbing</Typography>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper elevation={3} className={classes.tiles}>
                        <img src={Plumbing} className={classes.imgFluid} />
                        <Typography className={classes.tileHeading}> Plumbing</Typography>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper elevation={3} className={classes.tiles}>
                        <img src={Plumbing} className={classes.imgFluid} />
                        <Typography className={classes.tileHeading}> Plumbing</Typography>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper elevation={3} className={classes.tiles}>
                        <img src={Plumbing} className={classes.imgFluid} />
                        <Typography className={classes.tileHeading}> Plumbing</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}

ListFields.getInitialProps = ({ req }: any) => {
    let userAgent;
    if (req) {
        userAgent = req.headers["user-agent"];
    } else {
        userAgent = navigator.userAgent;
    }
    const parser = new UAParser();
    parser.setUA(userAgent);
    const result = parser.getResult();
    const deviceType = (result.device && result.device.type) || "desktop";
    return { deviceType };
};
export default ListFields;