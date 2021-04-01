import {
    Theme,
    createStyles
} from '@material-ui/core/styles';
import leftBackground from '../../../assets/img/front-login-img.png'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) => (
    createStyles({
        leftPannel: {
            background: `url(${leftBackground}) no-repeat`,
            height: '100VH',
           
            backgroundColor: ' #060818',
            backgroundPosition: ' center center',
            backgroundRepeat: ' no-repeat',
            backgroundPositionX: 'center',
            backgroundPositionY: 'center',
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            }
        },
        formContainer:{
            padding:'.71428571rem 2.85714286rem',
        },
        formHeader:{
            textAlign:'center'
        },
        heading:{
            margin:"20px 0 ",
            textAlign:'center',
            font:"normal normal 24px/29px 'Montserrat-medium'",
            letterSpacing:' 0px',
            color: '#000000',
            textTransform:'uppercase',
        },
        OrDivider: {
            position: 'relative',
            textAlign: 'center',
            fontSize: '16px',
            '&:before': {
                position: 'absolute',
                content: '""',
                width: '45%',
                left: 0,
                top: '10px',
                backgroundColor: '#2d2d2d',
                height: '1px',
            },
            '&:after':{
                position: 'absolute',
                content: '""',
                width: '45%',
                right: 0,
                top: '10px',
                backgroundColor: '#2d2d2d',
                height: '1px',
            }
        },
        inputContainer:{
            marginBottom:'5%',
            paddingLeft:'35%',
            [theme.breakpoints.down('sm')]: {
            paddingLeft:'0%'
            }
        },
        googleButton:{
            float:'left',
            background: '#DD4B39 0% 0% no-repeat padding-box',
        },
        faceButton:{
            float:'right',
            background:'#3B5998 0% 0% no-repeat padding-box',
        },
        formField:{
            width:'50%',
            marginBottom:'5%',
            [theme.breakpoints.down('sm')]: {
                width:'100%',
            }
        },
        formLabel:{
            marginBottom:'10px'
        },
        continueButton:{
            marginLeft:'0px',   
            background:`transparent linear-gradient(
                270deg
                , #24AE90 0%, #0D004C 100%) 0% 0% no-repeat padding-box;
                    border-radius: 5px`
        },
        otpButton:{
            marginLeft:'50px',
            background:`transparent linear-gradient(
                270deg
                , #24AE90 0%, #0D004C 100%) 0% 0% no-repeat padding-box;
                    border-radius: 5px`
        },
        button:{
            color:'#ffff',   
        },
        terms:{
            display:'grid',
            justifyContent:'center',
            textAlign:'center',
            marginTop:'20px'
        },
        footerText:{
            width:'400px',
            font:` normal normal normal 16px/19px 'Montserrat-Regular'`
        },
    })
)
)
export const DividerWithText = ({ children }: any) => {
    const classes = useStyles();
    return (
        <div>

        </div>
    )
};
export default useStyles