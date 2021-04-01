import React,{ useEffect,useState } from 'react';
import Carousel from 'react-multi-carousel';
import UAParser from "ua-parser-js";
import Plumbing from "../../../../assets/img/cate-01.svg";
import 'react-multi-carousel/lib/styles.css';
import { Paper,Grid, Typography, Link } from '@material-ui/core'
import listStyle from "./listFieldStyles";
import FetchCategory,{IServices} from '../../../../services/api/getCategory';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
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
    const [list,setList] = useState<any []>([]);
    useEffect(()=>{
        FetchCategory(`http://demo.smartstorez.com/tempjson/services.php`).then((result) =>
            {
                setList(result)
            }
        )
    },[])
    return (
        <Grid container className={classes.listContainer}>
            <Grid item >
                <Carousel
                    className={classes.listCarousel}
                    draggable
                    keyBoardControl
                    partialVisbile
                    renderButtonGroupOutside={false}
                    deviceType={deviceType}
                    itemClass="image-item"
                    responsive={responsive}
                    >
                    {list && list.length > 0 ? list.map((value:IServices)=>(
                                    <Link  href={`/category/sub${value.service_url}`} key={list.indexOf(value)}>
                                        <Paper elevation={3} className={classes.tiles}>
                                            <img src={Plumbing} className={classes.imgFluid} />
                                            <Typography className={classes.tileHeading}>{value.service_name}</Typography>
                                        </Paper>
                                    </Link>)) : <Link  href={`/category}`}>
                                        <Paper elevation={3} className={classes.tiles}>
                                            <img src={Plumbing} className={classes.imgFluid} />
                                            <Typography className={classes.tileHeading}>loading....</Typography>
                                        </Paper>
                                    </Link> 
                    }
                </Carousel>
            </Grid>
            <Grid item container className={classes.categoryList} spacing={3}>
                {list && list.length > 0 ? list.map((service)=>(<Grid item>
                    <Paper elevation={3} className={classes.tiles}>
                        <img src={Plumbing} className={classes.imgFluid} />
                        <Typography className={classes.tileHeading}>{service.service_name}</Typography>
                    </Paper>
                </Grid>)):<Grid item>
                    <Paper elevation={3} className={classes.tiles}>
                        <img src={Plumbing} className={classes.imgFluid} />
                        <Typography className={classes.tileHeading}>loading...</Typography>
                    </Paper>
                </Grid>
                }
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