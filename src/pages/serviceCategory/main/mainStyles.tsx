import {
    Theme,
    createStyles,
    createMuiTheme
  } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
export const theme = createMuiTheme({
  overrides:{

  }
})
const useStyles = makeStyles((theme: Theme) => (
    createStyles({
        root:{
            height:'100%',
        },
        backToTop:{
            position: 'fixed',
            bottom: theme.spacing(2),
            right:  theme.spacing(2),
            
          },
        categoryBody:theme.mixins.toolbar,
        
    })
    )
)
export default useStyles