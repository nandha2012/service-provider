import {
    Grid,
    useScrollTrigger,
    Zoom,
    Fab
} from '@material-ui/core';
import { KeyboardArrowUp as KeyboardArrowUpIcon } from '@material-ui/icons'
import CategoryHome from '../category/categoryHome'
import SubCategory from '../subCategory/subCategory'
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import NavigatonBar from '../../../components/serviceCategory/main/navigationBar/navigationBar';
import Footer from '../../../components/serviceCategory/main/footer/footer';
import useStyles from './mainStyles'
import ProductList from '../productList/productList';
import Cart from '../cart/cart';
import ScheduleBooking from '../booking/scheduleBooking';
import CompanyList from '../../../components/company/companyList';
import PaymentScreen from '../../../components/payment/payment';
interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: React.ReactElement;
  }
function ScrollTop(props:Props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleBack = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );
    console.log(anchor)
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleBack} role="presentation" className={classes.backToTop}>
        {children}
      </div>
    </Zoom>
  );
}

const ServiceCategory = (props) => {
    const classes = useStyles();
    let { path, url } = useRouteMatch();
    return (
        <div className={classes.root}>
            <Grid container >
                <Grid item xs={12} sm={12} id='back-to-top-anchor'>
                    <NavigatonBar />
                </Grid>
                <Grid item xs={12} sm={12} >
                  <div className={classes.categoryBody}></div>
                    <Switch>
                        <Route exact path={path} component={CategoryHome} />
                        <Route path={`${path}/sub/:category`} component={SubCategory} />
                        <Route path={`${path}/product-list`} component={ProductList} />
                        <Route path={`${path}/cart`} component ={Cart} />
                        <Route path={`${path}/schedule-booking`} component={ScheduleBooking}/>
                        <Route path={`${path}/company-list`} component ={CompanyList} />
                        <Route path={`${path}/payment`} component={PaymentScreen} />
                    </Switch>
                   
                        <ScrollTop {...props}>
                            <Fab style={{backgroundColor:'#1acc8d',color:'#ffff'}} size="small" aria-label="scroll back to top">
                                <KeyboardArrowUpIcon fontSize="large" />
                            </Fab>
                            </ScrollTop>
                    
                </Grid>
                
                <Grid item xs={12} sm={12}>

                    <Footer />

                </Grid>
            </Grid>
        </div >
    )
}
export default ServiceCategory;