import {
    Grid,
    useScrollTrigger,
    Zoom,
    Fab,
    Box,
    Container
} from '@material-ui/core';
import { KeyboardArrowUp as KeyboardArrowUpIcon } from '@material-ui/icons';
import NavBar from '../../../components/serviceCategory/main/navigationBar/navigationBar';
import Footer from '../../../components/serviceCategory/main/footer/footer';
import useStyles, { theme as Theme } from './homestyles';
import React from 'react';
import Banner from '../../../components/home/banner/banner';
import TopCategory from '../../../components/home/topCategory/topCategory';
interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: React.ReactElement;
}
const HomePage = (props: Props) => {
    const classes = useStyles();
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });
    const handleBack = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );
        console.log(anchor)
        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

    };
    return (
        <div className={classes.root}>
            <Box id='back-to-top-anchor' >
                <NavBar backGround={trigger ? '#239889 0% 0% no-repeat padding-box' : 'transparent'}
                    shadow='none' />
            </Box>
            <Grid container>
                <Grid item sm={12} xs={12}>
                    <Banner />
                </Grid>
                <Grid item sm={12} className={classes.SectionCategory}>
                    <Container className={classes.categoryContainer}>
                        <TopCategory />
                    </Container>
                </Grid>
                <Zoom in={trigger}>
                    <div onClick={handleBack} role="presentation" className={classes.backToTop}>
                        <Fab style={{ backgroundColor: '#1acc8d', color: '#ffff' }} size="small" aria-label="scroll back to top">
                            <KeyboardArrowUpIcon fontSize="large" />
                        </Fab>
                    </div>
                </Zoom>
                <Footer />
            </Grid>
        </div>
    )
}

export default HomePage;