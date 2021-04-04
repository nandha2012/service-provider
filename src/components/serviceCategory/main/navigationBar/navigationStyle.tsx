import {
    makeStyles,
    Theme,
    createStyles,
    createMuiTheme
} from '@material-ui/core/styles';
export const theme = createMuiTheme({
    overrides:{
      MuiToolbar:{
        regular:{
            [`@media (min-width: 600px)`]:{
                minHeight:'80px'
            }
         
        }
      },
      MuiButton:{
          label:{
            font:'normal normal normal 16px/19px Montserrat'
          }
        },
    }
  })
const useStyles = makeStyles((theme: Theme) => (
    createStyles({
        root: {
            background: `transparent linear-gradient(
                180deg
                , #0D004C 0%, #24AE90 100%) 0% 0% no-repeat padding-box`,
            listStyle: 'none',
            width:'100%',
        },
        grow: {
            flexGrow: 1,
        },
        img:{
            height:'auto',
            marginLeft:"37.5px"
        },
        sectionDesktop: {
            display: 'none',

            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
        },
        button:{
            padding:' 10px 0 10px 25px',
            //font: 'normal normal normal 25px/25px Montserrat',
            textTransform: 'none',
            color:'#ffff',
            textAlign:'left',
            letterSpacing:'0px'
        }
    })
)
)
export default useStyles