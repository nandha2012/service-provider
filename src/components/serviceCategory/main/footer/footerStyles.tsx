import {
    Theme,
    makeStyles,
    createStyles,
    createMuiTheme,
} from '@material-ui/core/styles';
export const theme = createMuiTheme({
    overrides: {
        // Style sheet name ⚛️
        MuiLink: {
            root: {
                color: '#ffff',
            }
        },
        MuiTypography: {
            h6: {
                fontWeight: 'bold',
                marginBottom: '10%'
            }
        },
        MuiListItem: {
            gutters: {
                paddingLeft: 0
            }
        },
        MuiOutlinedInput: {
            root: {
                position: 'relative',
                '& $notchedOutline': {
                    borderColor: '#ffff',
                    borderWidth:'2px',
                    
                },
                '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
                    borderColor: '#ffff',
                    // Reset on touch devices, it doesn't add specificity
                    '@media (hover: none)': {
                        borderColor: '#ffff',
                    },
                },
                '&$focused $notchedOutline': {
                    borderColor: '#ffff',
                    borderWidth: 1,
                },
            },
        },
        MuiContainer:{
            root:{
                ['@media (min-width: 600px)']:{
                    padding:'0px',
                }
            }
        }    
    },
});
const useStyles = makeStyles((theme: Theme) => (
    createStyles({
        footer: {
            bottom: 0,
            width: '100%',
            background: '#878787 0% 0% no-repeat padding-box',
            color: '#fff',
            padding: '60px 0 15px 0',
        },
        footerContent: {

        },
        QuickLinks: {
            justifyContent: 'left'
        },
        Contactinfo: {

        },
        newsletter: {

        },
        formInput: {
            height: "40px",
            padding: '0px',
            width: '80%',
            color:'#ffff'
        },
        formButton: {
            // Some CSS
            background: `transparent linear-gradient(
                    270deg
                    , #24AE90 0%, #0D004C 100%) 0% 0% no-repeat padding-box`,
            borderRadius: 7,
            border: 0,
            textDecorationColor: '#fffff',
            height: 40,
            padding: '0 30px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            textAlign: `center`,
            color: '#FFFFFF',
            font: ` normal normal 18px/14px 'Montserrat-Bold`,
            letterSpacing: '0px',
            textTransform: 'uppercase'

        },
        divider: {
            backgroundColor: 'white',
            margin: '0 5%'

        },
        termsList: {
            display: 'flex',
            flexDirection: 'row',
            font: `normal normal normal 12px/24px Montserrat;
            letter-spacing`,
        },
        termsItems: {
            display: 'flex',
            justifyContent: 'center',

        },
        icons: {
            marginRight: '5%'
        },
        logo: {

        },
        mediaIcons: {
            lineHeight: '1',
            padding:'8px 0',
            marginRight:'4px',
            borderRadius:'50%',
            textAlign:'center',
            width: '36px',
            height: '36px',
        }

    })
)
)
export default useStyles