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
        backToTop: {
            position: 'fixed',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
      
          },
            categoryContainer:{
                padding:'3% 8%'
            }
    })))
export default useStyles;