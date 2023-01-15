import * as React from 'react';
import {Avatar, Grid, Typography} from "@mui/material";
import Accordion from "../components/Accordion";
import AccordionDetail from "../components/AccordionDetail";
import AvatarImg from "../assets/avatar.jpg";
import Biology from "../assets/biology.jpg";
import Bioinformatics from "../assets/bioinformatics.jpg";
import Informatics from "../assets/informatics.jpg";
import Data from "../assets/data.jpg";
import DownButton from "../components/DownButton";


const aboutSections = [
    {
        title: 'Biology',
        description: 'The volume of omics data is rising at an unprecedented scale due to the advent of high-throughput sequencing. ' +
            'Large-scale omics data are nowadays used to study the molecular machinery of living organisms at the systems level.',
        description2: 'The analysis of omics data is a complex task that requires the development of computational tools to extract ' +
            'meaningful information from the data.',
        image: Biology
    },
    {
        title: 'Informatics',
        description: 'The development of user-friendly computational tools is a key factor to understand the complexity of biological systems.',
        description2: 'The development of user-friendly tools, often based on the web, requires a rich stack in web development, ' +
            'data engineering, and data visualization.',
        image: Informatics
    },
    {
        title: 'Bioinformatics',
        description: 'I am a bioinformatician with a strong background in the analysis of metabolic and regulatory systems.',
        description2: 'The development of computational tools for biological data engineering and analysis has been my main activity in the last years.',
        image: Bioinformatics
    },
    {
        title: 'Data science',
        description: 'In the era of big data, machine and deep learning are becoming increasingly important in drug discovery, novel biomarker discovery, molecular design, among others.',
        description2: 'My research is now focussed on the development of pipelines for the analysis of biological data and the development of machine and deep learning models.',
        image: Data
    },
]


function About() {
    const scrollToTimeline = () => {
        const timelineSection = document.querySelector( '#timeline' );
        timelineSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center'});
    };
    return (
        <Grid container
              id={'about'}
              direction="row"
              justifyContent="space-evenly"
              alignItems="stretch">
            <Grid item px={2} py={3} xs={4}>
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
                        }}/>
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
                    I am the Chief Technology Officer at OMNIUMAI and former Ph.D. student at the University of Minho.
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
                    I am a bioinformatician using data science and engineering solutions to understand the complexity of biological systems.
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
                    OmniumAI is a company focused on solutions of artificial intelligence
                    and data science for biotechnology. At OmniumAI, we are developing automated pipelines for the analysis of
                    biological data.
                </Typography>
                <div style={{paddingTop: "2.8rem"}}>
                    <DownButton scrollHandler={() => scrollToTimeline()} text={'timeline'} color={'#212529'}/>
                </div>
            </Grid>
            <Grid item xs={8}>
                <Accordion>
                    {aboutSections.map((section, index) => (
                        <AccordionDetail index={index} title={section.title}
                                         description={section.description}
                                         description2={section.description2}
                                         image={section.image}/>
                    ))}
                </Accordion>
            </Grid>
        </Grid>
    );
}

export default About;
