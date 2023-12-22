import * as React from 'react';
import { Avatar, Grid, Typography, useMediaQuery } from "@mui/material";
import Accordion from "../components/Accordion";
import AccordionDetail from "../components/AccordionDetail";
import AvatarImg from "../assets/avatar.jpg";
import Informatics from "../assets/informatics.jpg";
import Data from "../assets/data.jpg";
import DownButton from "../components/DownButton";


const aboutSections = [
    {
        title: 'Data engineering',
        description: 'The development of ETL tools is a key factor to power complex data analysis and machine learning pipelines. ',
        description2: 'I have been developing ETL tools to extract and process relevant biological data, including the development of web-based tools to unveil valuable insights.',
        image: Informatics
    },
    {
        title: 'Data science',
        description: 'In the era of big data, machine and deep learning are becoming increasingly important to extract valuable insights from large-scale datasets.',
        description2: 'My research has been focussed on the development of pipelines for the analysis of biotech data and the development of machine and deep learning models.',
        image: Data
    },
]


function About() {
    const scrollToTimeline = () => {
        const timelineSection = document.querySelector('#timeline');
        timelineSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center' });
    };

    const isMobile = useMediaQuery('(max-width: 1024px)');

    return (
        <Grid container
            id={'about'}
            direction="row"
            justifyContent="space-evenly"
            alignItems="stretch">
            <Grid item
                px={2} py={3}
                xs={12} sm={12} md={4}>
                <Typography color={'#212529'}
                    sx={{
                        fontWeight: 'lighter',
                        textTransform: "uppercase",
                        writingMode: "vertical-lr",
                        transform: "scale(-1)",
                    }}>
                    About
                </Typography>
                <Avatar alt="avatar"
                    src={AvatarImg}
                    sx={{
                        marginY: "0.8rem",
                        marginX: "auto",
                        width: 200,
                        height: 200
                    }} />
                <Typography
                    color={'#212529'}
                    variant="subtitle2"
                    component="h3"
                    sx={{
                        fontWeight: 'lighter',
                        textAlign: 'justify!important',
                        textTransform: 'uppercase',
                        paddingX: "0.5rem",
                        paddingY: "0.2rem",
                    }}>
                    I am a Software Engineer at OMNIUMAI.
                </Typography>
                <Typography
                    color={'#212529'}
                    variant="subtitle2"
                    component="h3"
                    sx={{
                        fontWeight: 'lighter',
                        textAlign: 'justify!important',
                        textTransform: 'uppercase',
                        paddingX: "0.5rem",
                        paddingY: "0.2rem",
                    }}>
                    I have a Ph.D. in Biomedical Engineering from the University of Minho, focusing on data engineering and science
                    applied to biotechnology. This work also involved the development of web-based tools for the analysis of biological data.
                </Typography>
                <Typography
                    color={'#212529'}
                    variant="subtitle2"
                    component="h3"
                    sx={{
                        fontWeight: 'lighter',
                        textAlign: 'justify!important',
                        textTransform: 'uppercase',
                        paddingX: "0.5rem",
                        paddingY: "0.2rem",
                    }}>
                    At OmniumAI, I have been leading the development of an automated machine learning platform for cheminformatics and bioinformatics datasets,
                    while working as a full-stack developer in the development of web-based applications.
                </Typography>
                {!isMobile &&
                    <div style={{ paddingTop: "2.8rem" }}>
                        <DownButton scrollHandler={() => scrollToTimeline()} text={'timeline'} color={'#212529'} />
                    </div>
                }
            </Grid>
            <Grid item
                xs={12} sm={12} md={8}>
                <Accordion>
                    {aboutSections.map((section, index) => (
                        <AccordionDetail index={index} title={section.title}
                            description={section.description}
                            description2={section.description2}
                            image={section.image} />
                    ))}
                </Accordion>
            </Grid>
        </Grid>
    );
}

export default About;
