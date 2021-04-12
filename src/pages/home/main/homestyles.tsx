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
        root: {
            backgroundColor:'#f9f9f9'
        },
        backToTop: {
            position: 'fixed',
            bottom: theme.spacing(2),
            right: theme.spacing(2),

        },
        categoryContainer: {
           padding:'15px',
           [`@media (min-width: 600px)`]: {
            maxWidth: '1050px',
            }
        },
        SectionCategory:{
            padding:'60px 0',
            background:'#F9F9F9 0% 0% no-repeat padding-box',
        },
    })))
export default useStyles;