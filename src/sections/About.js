import * as React from 'react';
import {Avatar, Grid, Typography} from "@mui/material";
import AvatarImg from "../assets/avatar.jpg";
import UpButton from "../components/UpButton";


function About() {

    const scrollToHome = () => {
        const homeSection = document.querySelector( '#home' );
        homeSection.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
    }

    return (
        <Grid container
              id={'about'}
              direction="row"
              sx={{
                  backgroundColor: '#fff',
                  minHeight: '100vh',
                  paddingX: '3rem',
              }}
              justifyContent="space-between"
              alignItems="center">
            <Grid item mt={2} xs={4} alignSelf={'center'}>
                <UpButton scrollHandler={() => scrollToHome()} text={'home'}/>
                <Avatar alt="avatar"
                        src={AvatarImg}
                        sx={{
                            marginTop: "1rem",
                            marginX: "auto",
                            width: 250,
                            height: 250
                        }}/>
            </Grid>
            <Grid item mt={2} xs={8}>
            </Grid>
            <Grid item mb={3} xs={4}>
                <Typography
                    color={'#212529'}
                    variant="subtitle1"
                    component="h3"
                    sx={{
                        fontWeight: 'lighter',
                        textAlign: 'justify!important',
                        textTransform: 'uppercase',
                    }}>
                    I am a Ph.D. student at the Centre of Biological Engineering, University of Minho. I am passionate about science, namely bioinformatics and systems biology,
                    being one of my expertises metabolic and regulatory systems. I am also an eager apprentice in machine learning approaches applied to biological data.
                    One of the co-founders of OmniumAI, a company focused on solutions of artificial intelligence and data science for biotechnology.
                </Typography>
            </Grid>
            <Grid item mb={3} xs={8}>
            </Grid>
        </Grid>
    );
}

export default About;
