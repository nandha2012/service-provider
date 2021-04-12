import {
    makeStyles,
    createStyles,
    createMuiTheme,
    Theme
} from '@material-ui/core/styles'
import bannerimg from '../../../assets/img/home-bg.png';
export const theme = createMuiTheme({
    overrides: {
        MuiCardContent: {
            root: {
               
            }
        }
    }
})
const useStyles = makeStyles((theme: Theme) => (
    createStyles({
        categoryContainer: {
            marginBottom: '24px',
        },
        cardContainer:{
            marginTop: '24px',
            padding:'0 10px',
        },
        cardContent:{
        },
        categoryBox: {
            background: '#FFFFFF 0% 0% no-repeat padding-box',
            border: '1px solid #E6E6E6',
            borderRadius: '8px',
            textAlign: 'center',
            padding: '33px 0px',
            width:"180px",
            [`@media (max-width: 464px)`]: {
                width:"143px",
            },
            [`@media (min-width: 464px)`]: {
                width:"270px",
            },
            [`@media (min-width: 981px)`]: {
                width:"180px",
            },
            "& a": {
                color: '#878787',
            },
            "& img": {
                width:'25%'
            },
            "& h3":{
                font: "normal normal 16px/40px 'Montserrat-Medium'",
                letterSpacing: '0px',
                textTransform: 'capitalize',
                margin:'5px 0 0 0 '
            }
        },
        cardTitle:{

        },
        subTitleHeading: {
            font: 'normal normal 600 24px/29px "Montserrat-Regular"'
        },
        subTitlePragraph: {
            font: "normal normal 16px/19px 'Montserrat-medium' !important",
            letterSpacing: '0px',
            color: '#A8A8A7 !important',
        }

    })))
export default useStyles;