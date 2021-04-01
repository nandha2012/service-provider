import {
    Theme,
    createStyles
} from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) => (
    createStyles({
        registerHeading: {
            color: '#128D55',
            marginBottom: '65px',
            paddingTop: '15px',
        },
        registerHeader: {
            zIndex: -1,
            height: ' 252px',
            width: '100vW',
            background: `transparent linear-gradient(
                180deg
                , #0D004C 0%, #24AE90 100%) 0% 0% no-repeat padding-box`,
            padding:'30px 0',
        },
        headerContainer:{
            padding:'0 10%',
            [theme.breakpoints.down('xs')]: {
                padding: '0 8%',
            },
        },
        breadCum:{
            color:'white',
            float:'right',
            
        },
        headerImg:{
            
        },
        registerContainer: {
            background: ' #FFFFFF 0% 0% no-repeat padding-box !important',
            boxShadow: ' 0px 5px 15px #00000078 !important',
            border: '1px solid #FFFFFF !important',
            borderRadius: ' 5px !important',
            padding: '25px 25px',

        },
        containerWrapper: {
            padding:'0 5%',
            [theme.breakpoints.up('sm')]:{
                padding:'0 15%',
            },
            marginTop: '-40px !important',
            alignItems:'center',
        },
        form: {

        },
        imageField: {

        },
        button: {
            borderRadius: '4px',
            border: '2px solid #707070',
            letterSpacing: '0px',
            marginTop: '25px',
            marginRight: '15px',
            color: '#707070',
            padding: ' 16px 12px !important',
            minWidth: '120px',
            font: `normal normal 14px/12px 'Montserrat-bold'`,
        },
        cancel: {

        },
        register: {
            color: '#FFFFFF',
            background: `transparent linear-gradient(
                90deg
                , #0D004C 0%, #24AE90 100%) 0% 0% no-repeat padding-box`
        },
        imageButton: {
            width: '100%',
            backgroundColor: ' #F1F1F1',
            border: '1px solid #95989A !important',
            borderRadius: ' 5px !important',
            textTransform: 'none',

        },
        textArea: {
            width: '100%',
            '&::placeholder': {
                padding: '10px 5px'
            },
            [theme.breakpoints.up('xs')]: {
                padding: '1px',
            },
        },
        inputField: {
            width: '100%'
        },
        imageIcon: {
            padding: '50px 0'
        },
        registerFooter: {
            background: '#222223 0% 0% no-repeat padding-box',
            color: '#fff',
            padding:' 15px 0',
            textAlign: 'center',
    }
    })
)
)
export default useStyles