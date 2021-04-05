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
        homeBanner: {
            width: '100%',
            background: `url(${bannerimg}) no-repeat`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height:'410px',
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
        bannerCarousel: {
        },
        bannerContent:{
            top:'150px',
            position:'absolute',
            textAlign: 'center',
            color:'#ffff',
        },
        bannercontainer:{
            height:'250px',
        }
    })))
export default useStyles;