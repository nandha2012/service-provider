import {
    makeStyles,
    createStyles,
    createMuiTheme,
    Theme
} from '@material-ui/core/styles'
import bannerimg from '../../../assets/img/home-bg.png';
export const theme = createMuiTheme({
    overrides: {
        MuiAppBar: {
            root: {

            }
        }
    }
})
const useStyles = makeStyles((theme: Theme) => (
    createStyles({
        categoryBody: {
            [`@media (min-width: 600px)`]: {
                minHeight: '80px'
            },
            background: 'transparent',
            boxShadow: 'none'
        },
        profileContainer: {
            textAlign:'center',
        },
        userProfileArea: {
            padding: '60px 0'
        },
        userHeading: {
            backgroundColor: '#219988',
            minHeight: '145px',
        },
        contentBlock: {
            marginBottom: '13px',
            font: "normal normal 16px/19px 'Montserrat-medium'",
            color: '#000000',
            display: 'flex',
            width: '100%',
            borderBottom: '1px solid #ddd',
            padding:'1rem 0',
        },
        content:{
            color:'black',
            margin:'0 0 0 40%',
        },
        imgFluid:{
            maxWidth:'100%',
            height:'auto',
            paddingRight:'1rem',
        }
    })
))
export default useStyles;