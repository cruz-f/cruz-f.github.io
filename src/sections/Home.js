import * as React from 'react';
import {Grid, Typography, IconButton, Link} from "@mui/material";
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
                  paddingTop: '3rem',
              }}
              columns={{ xs: 8, sm: 8, md: 12, lg: 12 }}
              justifyContent="space-between"
              alignItems="center">
            <Grid item xs={7} sm={7} md={11} lg={11} pb={{xs:1}}>
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
            <Grid item xs={1} sm={1} md={1} lg={1} >
                <AppDrawer />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
            </Grid>
            <Grid item xs={0} sm={0} md={0} lg={12}>
            </Grid>
            <Grid item xs={0} sm={1} md={1} lg={6}>
            </Grid>
            <Grid item xs={8} sm={5} md={9} lg={4}>
                <Typography
                    color={'#FFF'}
                    variant="h4"
                    component="h4"
                    sx={{
                        fontWeight: 'lighter',
                        textTransform: "uppercase",
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
                    I am Fernando Cruz from Viana do Castelo, Portugal,
                    currently working in bioinformatics and data science.
                </Typography>
                <Typography
                    color={'#FFF'}
                    variant="subtitle1"
                    component="h3"
                    sx={{
                        fontWeight: 'lighter',
                        textAlign: 'justify',
                    }}>
                    I am the Chief Technology Officer at
                    <Link href="https://omniumai.com"
                          underline="none"
                          pl={"0.3rem"}>
                        OMNIUMAI
                    </Link>, a company focused on solutions of artificial intelligence for biotechnology.
                </Typography>
            </Grid>
            <Grid item xs={0} sm={2} md={2} lg={2}>
            </Grid>
            <Grid item xs={12} sm={0} md={0} lg={12}>
            </Grid>
            <Grid item xs={12} sm={0} md={0} lg={12}>
            </Grid>
            <Grid item xs={7} sm={7} md={11} lg={11}>
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
            <Grid item xs={1} sm={1} md={1} lg={1}>
                <DownButton scrollHandler={() => scrollToAbout()} text={'about'} color={'#ffffff'}/>
            </Grid>
        </Grid>
    );
}

export default Home;
