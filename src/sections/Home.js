import * as React from 'react';
import {Grid, Typography, IconButton} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AppDrawer from "../components/AppDrawer";
import DownButton from "../components/DownButton";


function Home() {
    const scrollToAbout = () => {
        const aboutSection = document.querySelector( '#about' );
        aboutSection.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
    };
    return (
        <Grid container
              id={'home'}
              direction="row"
              sx={{
                  backgroundColor: '#212529',
                  minHeight: '100vh',
                  paddingX: '2rem',
              }}
              justifyContent="space-between"
              alignItems="center">
            <Grid item mt={5} xs={10} alignSelf={'flex-start'}>
                <Typography
                    color={'#FFF'}
                    variant="h6"
                    component="h6"
                    sx={{
                        fontWeight: 'lighter',
                        textTransform: "uppercase",
                        textAlign: 'justify',
                    }}>
                    Fernando Cruz
                </Typography>
            </Grid>
            <Grid item mt={5} xs={"auto"} alignSelf={'flex-start'}>
                <AppDrawer />
            </Grid>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs={4}>
                <Typography
                    color={'#FFF'}
                    variant="h4"
                    component="h4"
                    sx={{
                        fontWeight: 'lighter',
                        textTransform: "uppercase",
                        textAlign: 'justify',
                    }}>
                    Data Science for Biology
                </Typography>
                <Typography
                    color={'#FFF'}
                    variant="subtitle1"
                    component="h3"
                    sx={{
                        paddingTop: ".8rem",
                        textTransform: 'uppercase',
                        textAlign: 'justify',
                    }}>
                    Hi there!
                </Typography>
                <Typography
                    color={'#FFF'}
                    variant="subtitle1"
                    component="h3"
                    sx={{
                        fontWeight: 'lighter',
                        textAlign: 'justify',
                    }}>
                    I am Fernando Cruz from Viana do Castelo, Portugal.
                    I am a Ph.D. student in Bioinformatics
                    at the University of Minho.
                </Typography>
            </Grid>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={10} mb={3} alignSelf={'flex-end'}>
                <IconButton href={"https://www.linkedin.com/in/fernando-cruz-ba2b65142"}>
                    <LinkedInIcon sx={{ color: "#FFF" }} fontSize="large"/>
                </IconButton>
                <IconButton href={"https://github.com/cruz-f"}>
                    <GitHubIcon sx={{ color: "#FFF" }} fontSize="large"/>
                </IconButton>
                <IconButton href={"mailto:fernando.cruz@ceb.uminho.pt"}>
                    <AlternateEmailIcon sx={{ color: "#FFF" }} fontSize="large"/>
                </IconButton>
            </Grid>
            <Grid item xs={'auto'} mb={3} alignSelf={'flex-end'}>
                <DownButton scrollHandler={() => scrollToAbout()} text={'about'} color={'#ffffff'}/>
            </Grid>
        </Grid>
    );
}

export default Home;
