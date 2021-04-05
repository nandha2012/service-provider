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
  })))
export default useStyles;