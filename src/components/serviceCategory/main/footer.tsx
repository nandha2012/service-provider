import {
    Grid,
    Box,
    List,
    Button,
    ListItem,
    OutlinedInput,
    InputAdornment,
    Divider,
    Link,
    Typography
} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import logo from '../../../assets/img/logo.png';
import locationIcon from "../../../assets/img/contacticon1.svg";
import mailIcon from "../../../assets/img/contacticon3.svg";
import appleStore from "../../../assets/img/downapp-1.svg";
import googleStror from "../../../assets/img/downapp-2.svg"
import useStyles, { theme } from '../../../styles/serviceCategory/main/footerStyles'
import { Icon, InlineIcon } from '@iconify/react';
import bxlInstagram from '@iconify-icons/bx/bxl-instagram';
import bxlFacebook from '@iconify-icons/bx/bxl-facebook';
import bxlLinkedin from '@iconify-icons/bx/bxl-linkedin';
const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
        <ThemeProvider theme={theme}>      
            <Grid container className={classes.footerContent}>
                <Grid item xs={12} sm={3}>
                    <Box className="footer-logo">
                        <img className={classes.logo}src={logo} />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Box className={classes.QuickLinks}>
                        <Typography variant='h6'>Quick Links</Typography>
                        <List >
                            <ListItem><Link underline='none' href="#">About us</Link></ListItem>
                            <ListItem><Link underline='none' href="#">Service</Link></ListItem>
                            <ListItem><Link underline='none' href="#">Blog</Link></ListItem>
                        </List>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Box className={classes.Contactinfo}>
                    <Typography variant='h6'>Contact info</Typography>
                    <List className="contactList">
                        <ListItem>
                            <img src={locationIcon} className={classes.icons} />
                            <span>52, 3rd main Arekere, Bannerghatta Road Bangalore 560076</span>
                        </ListItem>
                        <ListItem>
                            <img src={mailIcon} className={classes.icons} />
                            <Link underline='none' href="mailto:info@ourgenieapp.com">
                                <span>info@ourgenieapp.com</span>
                            </Link>
                        </ListItem>
                    </List>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box className={classes.newsletter}>
                    <Typography variant='h6'>Subscribe to our newsletter</Typography>
                    <form action="" method="post">
                        <OutlinedInput
                            className={classes.formInput}
                            placeholder='Email Address'
                            endAdornment={<InputAdornment position="end">
                                <Button variant="contained" className={classes.formButton}>
                                    Send
                            </Button>
                            </InputAdornment>}
                            labelWidth={0}
                        />

                    </form>
                    <div className="social-links mt-3 mb-4">
                        <Link underline='none' href="https://www.instagram.com/ourgenie?r=nametag" className="instagram">
                            <Icon icon={bxlInstagram} className={classes.mediaIcons}/>
                        </Link>
                        <Link underline='none' href="https://www.facebook.com/ourgenieapp/" className="facebook">
                        <Icon icon={bxlFacebook} className={classes.mediaIcons}/>

                        </Link>
                        <Link underline='none' href="https://www.linkedin.com/company/ourgenie" className="linkedin">
                        <Icon icon={bxlLinkedin} className={classes.mediaIcons}/>
                        </Link>
                    </div>
                    <div className="downapp-group mb-3">
                        <Link underline='none' href="#"><img src={appleStore} className={classes.icons} /></Link>
                        <Link underline='none' href="#"><img src={googleStror} className={classes.icons} /></Link>
                    </div>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Divider className={classes.divider} />
                    <List className={classes.termsList}>
                        <ListItem className={classes.termsItems}> <Link underline='none' href="#">Terms & Conditions</Link></ListItem>
                        <ListItem className={classes.termsItems}> <Link underline='none' href="#">Privacy policy</Link></ListItem>
                        <ListItem className={classes.termsItems}> <Link underline='none' href="#">@2020 Our Gine company</Link></ListItem>
                    </List>
                </Grid>
            </Grid>
        </ThemeProvider>
        </div>
    )

}
export default Footer;