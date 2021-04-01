import {
    Theme,
    createStyles
  } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) => (
    createStyles({
        serviceCategoryBanner:{
            height:'450px',
            background: 'rgb(0 0 0 / 82%)',
            padding:'190px 0 0',
            color:'white',
        },
        serviceMainWrap:{
            padding:'60px 0',
            textAlign:'center',
        },
        serviceContainer:{
            margin:'0 15%'
        },
        serviceProductWrap:{
        
        },
        tiles: {
            width: ' 282.813px',
            marginRight: ' 30px',
            marginBottom: ' 30px',
            padding: '33px 0',
            border: '1px solid #E6E6E6',
            borderRadius: '8px',

        },
        tileContent:{
            height:'100%',
            width:'100%',
        },  
        imgFluid: {
            Width: 'auto',
            margin: '0',
            padding: '0 100PX'
        },
        tileHeading: {
            textAlign: "center",
            font: "normal normal 16px/40px 'Montserrat-Medium'",
            letterSpacing: ' 0px',
            color: ' #878787',
            textTransform: 'capitalize',
            margin: 0,
            marginTop: '5px'
        },
        categoryList: {
            display: 'flex',
            padding: '0 15%'
        }    
    })
    )
)
export default useStyles