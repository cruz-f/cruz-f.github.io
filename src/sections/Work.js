import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Grid, Stack, useMediaQuery } from "@mui/material";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from "../components/TimelineItem";
import TimelineCard from "../components/TimelineCard";
import DownButton from "../components/DownButton";

const timelineItems = [
    {
        position: 'Intern',
        date: 'Feb 2017 - Jul 2017',
        company: 'Chr. Hansen Holding A/S',
        url: 'https://www.holofood.eu/files/ch.png',
        description: 'Internship at Chr. Hansen Holding A/S, a world-leading bioscience company located in Denmark. ' +
            'This internship was focused on the reconstruction of the genome-scale metabolic model of ' +
            'Streptococcus thermophilus and the development of bioinformatics computational tools.',
    },
    {
        position: 'Research scientist',
        date: 'Feb 2018 - Sep 2018',
        company: 'ITQB-UNL',
        url: 'https://www.itqb.unl.pt/education/integracao-de-doutorados-nas-empresas/logo-itqb-hor-signature.png/image_preview',
        description: 'Research scientist at ITQB-UNL. ' +
            'I was responsible for maintaining and supporting the Bacterial Imaging Cluster facility, ' +
            'involving microscopy imaging, image analysis and data management.',
    },
    {
        position: 'Ph.D. student',
        date: 'Oct 2018 - Sep 2022',
        company: 'Centre of Biological Engineering (CEB)',
        url: 'https://bio.di.uminho.pt/assets/img/logocebbig.png',
        description: 'Ph.D. student at the Centre of Biological Engineering (CEB), University of Minho. ' +
            'This work was focused on the development of a computational framework for the reconstruction and analysis ' +
            'of genome-scale regulatory and metabolic models. This framework includes ProTRenD web application,' + 
            'BioISO web server, and MEWpy Python package.',
    },
    {
        position: 'Invited assistant professor',
        date: 'Sep 2022 - Feb 2023',
        company: 'University of Minho',
        url: 'https://www.eng.uminho.pt/SiteAssets/ENG-EN.png',
        description: 'Assistant professor at the Department of Informatics, University of Minho. ' +
            'I taught several lectures of Machine Learning applied to biological data.',
    },
    {
        position: 'Software Engineer',
        date: 'Jun 2021 - Dec 2023',
        company: 'OmniumAI',
        url: 'https://www.tecminho.uminho.pt/storage/app/media/images/spinoffs/omniumai.png',
        description: 'Senior software Engineer at OMNIUMAI, a spin-off company from the University of Minho. ' +
            'I have been directly involved in the development of OmniA, an automated machine learning platform for biological and chemistry data. ' +
            'Purely based on automated machine learning, OmniA can generate predictive models for drug classification, ' +
            'drug sensitivity, antibody prediction, and more. I also worked as a full-stack developer in the development of web-based applications.',
    }
]


function Work() {
    const isMobile = useMediaQuery('(max-width: 1024px)');
    const scrollToProjects = () => {
        const projectsSection = document.querySelector('#projects');
        projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center' });
    };

    return (
        <Grid
            container
            id={'work'}
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-end"
            sx={{
                backgroundColor: '#0E4749',
                py: 5,
                px: 2,
            }}
        >
            <Grid item xs={12}>
                <Typography
                    color={'#FFFFFF'}
                    sx={{
                        fontWeight: 'lighter',
                        textTransform: "uppercase",
                        writingMode: "vertical-lr",
                        transform: "scale(-1)",
                    }}>
                    Work
                </Typography>
            </Grid>
            {isMobile ?
                <Grid item xs={12}>
                    <Stack
                        spacing={2}
                        sx={{ marginX: 'auto', marginTop: '2rem' }}>
                        {timelineItems.map((item) => (
                            <TimelineCard {...item} />
                        ))}
                    </Stack>
                </Grid>
                :
                <>
                    <Grid item xs={1}>
                        <DownButton
                            scrollHandler={() => scrollToProjects()}
                            text={'projects'}
                            color={'#ffffff'} />
                    </Grid>
                    <Grid item xs={10}>
                        <Timeline
                            position="alternate">
                            {timelineItems.map((item) => (
                                <TimelineItem {...item} />
                            ))}
                        </Timeline>
                    </Grid>
                    <Grid item xs={1} />
                </>
            }
        </Grid>
    );
}

export default Work;