import {
    makeStyles,
    Theme,
    createStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => (
    createStyles({
        root: {
            position: 'fixed',
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
            height:'auto'
        },
        sectionDesktop: {
            display: 'none',

            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
        },
        button:{
            padding:' 10px 0 10px 25px',
            font: 'normal normal normal 20px/19px Montserrat',
            textTransform: 'none',
            color:'#ffff',
            textAlign:'left',
            letterSpacing:'0px'
        }
    })
)
)
export default useStyles