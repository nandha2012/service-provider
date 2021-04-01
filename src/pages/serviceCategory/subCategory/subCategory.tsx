import { Box, Card, Grid, Paper, Typography,Link } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import serviceCategotryStyle from './subCategoryStyles';
import Plumbing from "../../../assets/img/cate-01.svg";
import FetchCategory,{IServices} from '../../../services/api/getCategory';

import {
  useParams
} from "react-router-dom";
interface ParamTypes {
  tokenName: string
}
const SubCategory = () => {
  const [list,setList] = useState<any []>([]);
  useEffect(()=>{
      FetchCategory(`http://demo.smartstorez.com/tempjson/sub_services.php`).then((result) =>
          {
              setList(result)
          }
      )
  },[])
  const { tokenName } = useParams<ParamTypes>();
  const classes = serviceCategotryStyle();
  return (
    <Grid container>
      <Grid item xs={12} className={classes.serviceCategoryBanner}>
        <Box>
          <Typography variant='h4'> A nice section heading goes here</Typography>
          <Typography > Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} className={classes.serviceMainWrap}>
       
          <Box className={classes.serviceContainer}>
          <Paper elevation={3} className={classes.serviceProductWrap}>
          <Grid item container className={classes.categoryList} spacing={3}>
                {list && list.length > 0 ? list.map((service)=>(<Grid item>
                  <Link  href={`/companyList`} key={list.indexOf(service)}>
                    <Paper elevation={3} className={classes.tiles}>
                        <img src={Plumbing} className={classes.imgFluid} />
                        <Typography className={classes.tileHeading}>{service.service_name}</Typography>
                    </Paper>
                    </Link> 
                </Grid>)):<Grid item>
                    <Paper elevation={3} className={classes.tiles}>
                        <img src={Plumbing} className={classes.imgFluid} />
                        <Typography className={classes.tileHeading}>loading...</Typography>
                    </Paper>
                </Grid>
                }
            </Grid>
          </Paper>
          </Box>
      </Grid>
    </Grid>

  )

}
export default SubCategory;