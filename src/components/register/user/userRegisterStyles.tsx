import {
    Theme,
    createStyles
} from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) => (
    createStyles({
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
    })
)
)
export default useStyles