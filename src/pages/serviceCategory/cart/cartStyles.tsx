import {
    Theme,
    createStyles,
    withStyles,
    createMuiTheme
} from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import MuiTableCell from "@material-ui/core/TableCell";
export const TableCell = withStyles({
    root: {
      borderBottom: "none"
    }
  })(MuiTableCell);
export const theme = createMuiTheme({
    overrides: {
        // Style sheet name ⚛️
        MuiButton:{
            label:{
                font:"normal normal 600 22px/26px 'Montserrat-Regular'",
            }
        }
    },
});
const useStyles = makeStyles((theme: Theme) => (
    createStyles({
        serviceCategoryBanner: {
            height: '450px',
            overflow: 'gidden',
            background: 'rgb(0 0 0 / 82%)',
            color: 'white',
            textAlign: 'center',
            font: "normal normal normal 24px/36px 'Montserrat-Regular'",
        },
        cartBAnnerHeading:{
            padding: '190px 0',
        },
        cartContainer:{
            padding:'0 2%'
        },
        cartWrapper:{
            backgroundColor:'#f9f9f9',
            padding:'0',
            border: '1px solid #EBEBEB',
            borderRadius:'5px',
        },
        cartHeading:{
            font:"normal normal 600 24px/29px 'Montserrat-Regular'",
            letterSpacing:'0px',
            backgroundColor:'#f6f6f6',
            padding:'15px 0',
            textAlign:'center'
        },
        cartItems:{
            border: '1px solid rgb(112 112 112 / 33%)',
            paddingTop: '20px',
            marginBottom: '35px',
        },
        subHeading:{
            font: "normal normal 600 20px/24px 'Montserrat-Regular'", 
        },
        tabel:{
            width:'100%'
        },
        tabelRow:{
            border:'none',
        },
        totalText:{
            fontWeight:600,
            font: "normal normal 18px/22px 'Montserrat-Bold'"
        },
        total:{
            borderTopStyle:'dotted',
            borderBottomStyle:'dotted',
            color:'#cccccc',
        },
        promoArea:{
            textAlign:'center',
            backgroundColor:'#ffff'
        },
        promoHeading:{
            padding:'1.5rem 0'
        },
        payButtonArea:{
            textAlign:'center',
            padding:'1.5rem 0'
        },
        payButton:{
            background:'transparent linear-gradient(270deg, #24AE90 0%, #0D004C 100%) 0% 0% no-repeat padding-box',
            borderRadius: '4px',
            border: 'none',
            letterSpacing: '0px',
            marginTop: '25px',
            marginRight: '15px',
            color: '#ffff',
            minWidth: '300px',
            minHeight: '48px',
            font:"'Montserrat', sans-serif",
            fontWeight:600,
        }
    })
)
)
export default useStyles