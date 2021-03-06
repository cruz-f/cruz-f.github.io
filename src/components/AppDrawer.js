import * as React from 'react';
import {Drawer, Grid, IconButton, List, ListItem} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MenuLink from "./MenuLink";


function AppDrawer() {

    const scrollToHome = () => {
        const homeSection = document.querySelector( '#home' );
        homeSection.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
    }
    const scrollToAbout = () => {
        const aboutSection = document.querySelector( '#about' );
        aboutSection.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
    };

    const [state, setState] = React.useState(false);

    return (
        <>
            <IconButton
                onClick={() => setState(true)}>
                <MenuIcon sx={{ color: '#FFF' }} fontSize="large"/>
            </IconButton>
            <Drawer
                position={"fixed"}
                type={'temporary'}
                anchor={'right'}
                open={state}
                disableRestoreFocus={true}
                onClose={() => setState(false)}
                sx = {{
                    '& .MuiDrawer-paper': { minWidth: '60vw', maxWidth: '60vw', maxHeight: '100vh',
                        backgroundColor: '#80ed99'}
                }}>
                <Grid container
                      direction="row"
                      rowSpacing={4}
                      justifyContent="space-evenly"
                      alignItems="flex-start">
                    <Grid item mt={5} xs={10}>
                        <List>
                            <ListItem>
                                <MenuLink text={'HOME'}
                                          handler={() => {setState(false); scrollToHome()}}/>
                            </ListItem>
                            <ListItem>
                                <MenuLink text={'ABOUT'}
                                          handler={() => {setState(false); scrollToAbout()}} />
                            </ListItem>
                            <ListItem>
                                <MenuLink text={'TOOLS'} handler={() => setState(false)} />
                            </ListItem>
                            <ListItem>
                                <MenuLink text={'PUBLICATIONS'} handler={() => setState(false)} />
                            </ListItem>
                            <ListItem>
                                <MenuLink text={'CONTACT'} handler={() => setState(false)} />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item mt={5} xs={"auto"}>
                        <IconButton
                            onClick={() => setState(false)}>
                            <CloseIcon sx={{ color: "#22577a" }} fontSize="large"/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Drawer>
        </>
    );
}

export default AppDrawer;
