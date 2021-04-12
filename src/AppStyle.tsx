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
    loadingScreen: {
      margin: 'auto',
      display: 'felx',

    },
    lodingContainer: {
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
      height:'100vh',
      margin: 'auto',
    },
    spinner: {
      color:'#4fb25d',
    }
  })))
export default useStyles;