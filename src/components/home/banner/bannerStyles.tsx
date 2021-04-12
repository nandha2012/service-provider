import {
    makeStyles,
    createStyles,
    createMuiTheme,
    Theme
} from '@material-ui/core/styles'
import bannerimg from '../../../assets/img/home-bg.png';
export const theme = createMuiTheme({
    overrides: {
        MuiTextField:{
            root:{
                
            }
        }	
    }
})
const useStyles = makeStyles((theme: Theme) => (
    createStyles({
        homeBanner: {
            width: '100%',
            background: `url(${bannerimg}) no-repeat`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height:'521px',
            justifyContent:'center',
            '&:before':{
                height:'100%',
                width:'100%',
                left: 0,
                top: 0,
                position: 'absolute',
                content: '""',
                background:'rgb(0 0 0 / 55%)',
            }
        },
        bannerHeading: {
            top:'150px',
            position:'absolute',
            textAlign: 'center',
            color:'#ffff',
           
        },
        bannerContent:{
            display: 'flex',
            justifyContent:'center',
            alignItems:'center',
            height:'100vh',
            margin: 'auto',
        },
        bannercontainer:{
            height:'250px',
        },
        bannerInput:{
            backgroundColor:'white',
        },
        locationSelect:{
            borderRadius:'30px 0px 0px 30px',
            backgroundColor:'white',
            width:'101.3px',
            float:"left",
            
        },
        bannerForm:{
            width:'80%',
            margin:'60px 109.500px 16px 109.500px',    
        },
        locationInput:{
            borderRadius:'0px 30px 30px 0px',
            background:'white',
            float:"left",
            width:'650px',
            "&:before": {
                position: 'absolute',
                backgroundColor:'#999999',
                top:'12px',
                zIndex:1,
                left:'16.4%',
                content:'',
                width:'1px',
                height:'25px',
              },
        },
        input:{
            height:"52px",
            "&&&:before": {
                borderBottom: "none"
              },
              "&&:after": {
                borderBottom: "none"
              }
        }
    })))
export default useStyles;