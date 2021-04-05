import {
    makeStyles,
    createStyles,
    createMuiTheme,
    Theme
} from '@material-ui/core/styles'
import bannerimg from '../../../assets/img/home-bg.png';
export const theme = createMuiTheme({
    overrides: {
        MuiCardContent:{
            root:{
                padding:'33px 33px',
            }
        }
    }
})
const useStyles = makeStyles((theme: Theme) => (
    createStyles({
       categoryBox:{
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        border: '1px solid #E6E6E6',
        borderRadius: '8px',
        textAlign: 'center',

        "& p":{
            font: "normal normal 16px/40px 'Montserrat-Medium'",
            letterSpacing: '0px',
            color: '#878787',
            textTransform: 'capitalize',
        },
        "& img":{
            width:'30%',
        }
    },
  
       
})))
export default useStyles;