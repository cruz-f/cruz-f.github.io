import * as React from 'react';
import {Drawer, Grid, IconButton, List, ListItem} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MenuLink from "./MenuLink";


function AppDrawer() {

    const [state, setState] = React.useState(false);

    return (
        <>
            <IconButton
                onClick={() => setState(true)}>
                <MenuIcon sx={{ color: "#FFF" }} fontSize="large"/>
            </IconButton>
            <Drawer
                anchor={'right'}
                open={state}
                sx = {{
                    '& .MuiDrawer-paper': { minWidth: '100vw', minHeight: '100vh', backgroundColor: '#80ed99'}
                }}
            >
                <Grid container
                      direction="row"
                      rowSpacing={4}
                      justifyContent="space-evenly"
                      alignItems="flex-start">
                    <Grid item mt={5} xs={10}>
                        <List>
                            <ListItem>
                                <MenuLink to={"/"} text={'HOME'} handler={() => setState(false)} />
                            </ListItem>
                            <ListItem>
                                <MenuLink to={"/"} text={'ABOUT'} handler={() => setState(false)} />
                            </ListItem>
                            <ListItem>
                                <MenuLink to={"/"} text={'TOOLS'} handler={() => setState(false)} />
                            </ListItem>
                            <ListItem>
                                <MenuLink to={"/"} text={'PUBLICATIONS'} handler={() => setState(false)} />
                            </ListItem>
                            <ListItem>
                                <MenuLink to={"/"} text={'CONTACT'} handler={() => setState(false)} />
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
