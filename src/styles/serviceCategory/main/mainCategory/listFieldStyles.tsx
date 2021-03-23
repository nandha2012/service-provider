import {
    Theme,
    createStyles
} from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles((theme: Theme) => (
    createStyles({
        tiles: {
            width: ' 282.813px',
            marginRight: ' 30px',
            marginBottom: ' 30px',
            padding: '33px 0',
            border: '1px solid #E6E6E6',
            borderRadius: '8px'

        },
        listCarousel: {
            position: 'relative',
            top: '-80px',
            left: '10%',
            width: '80vW',
            paddingRight: '15px',
            paddingLeft: '15px',
            marginRight: 'auto',
            marginLeft: ' auto',
            [" @media (min-width: 1200px)"]: {
                width: '1350px',
                maxWidth: '1350px'
            }
        },
        shiftDot: {
            color: 'red'
        },
        listContainer: {

        },
        imgFluid: {
            Width: 'auto',
            margin: '0',
            padding: '0 100PX'
        },
        tileHeading: {
            textAlign: "center",
            font: "normal normal 16px/40px 'Montserrat-Medium'",
            letterSpacing: ' 0px',
            color: ' #878787',
            textTransform: 'capitalize',
            margin: 0,
            marginTop: '5px'
        },
        categoryList: {
            display: 'flex',
            padding: '0 50px'
        }
    })
)
)
export default useStyles