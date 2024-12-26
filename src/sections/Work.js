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
        url: 'https://cdn.chr-hansen.com/Resources/images/logo-novonesis.svg?timestamp=638707914533444260',
        description: 'Internship at Chr. Hansen holding A/S, a world-leading bioscience company. This internship was focused on the development of bioinformatics computational tools.',
    },
    {
        position: 'Research scientist',
        date: 'Feb 2018 - Sep 2018',
        company: 'ITQB-UNL',
        url: 'https://www.itqb.unl.pt/education/integracao-de-doutorados-nas-empresas/logo-itqb-hor-signature.png/image_preview',
        description: 'Research scientist at ITQB-UNL. I was responsible for maintaining and supporting the bacterial imaging cluster facility, involving microscopy imaging, image analysis, and data management.',
    },
    {
        position: 'Ph.D. student',
        date: 'Oct 2018 - Sep 2022',
        company: 'Centre of Biological Engineering (CEB)',
        url: 'https://www.ceb.uminho.pt/Content/images/logoceb.png',
        description: 'Ph.D. student at the Centre of Biological Engineering (CEB), University of Minho. I developed a computational framework for the analysis of biological data. This framework includes a data engineering solution using ETL tools to collect, transform, and integrate dispersed sources of biological data. This data warehouse of biological data allows scientists to retrieve extremely valuable insights about the regulatory mechanisms of organisms. I have also developed a web application (backend and frontend) and reporting tools to allow users to visualize and analyze the data warehouse.',
    },
    {
        position: 'Invited assistant professor',
        date: 'Sep 2022 - Feb 2023',
        company: 'University of Minho',
        url: 'https://www.eng.uminho.pt/SiteAssets/ENG-EN.png',
        description: 'Assistant Professor at the Department of Informatics, University of Minho. I taught several lectures on machine learning applied to biological data. I also taught workshops on Unix and Docker.',
    },
    {
        position: 'Senior Software Engineer',
        date: 'Jun 2021 - Dec 2023',
        company: 'OmniumAI',
        url: 'https://www.tecminho.uminho.pt/storage/app/media/images/spinoffs/omniumai.png',
        description: 'Senior software engineer at OmniumAI, a startup from Braga, Portugal. I have been directly involved in developing omnia, an automated machine learning platform for biological and chemistry data. Omnia can perform automated feature engineering and generate predictive models for drug classification, antibody prediction, and more. In addition, I have also been directly involved in the development of CibusAI, an AIdriven food reformulation platform. I have used data engineering techniques and ETL tools to create endto- end data pipelines. I also worked as a full-stack developer in developing data engineering solutions and web applications (backend and frontend) for major clients.',
    },
    {
        position: 'Data Scientist',
        date: 'Feb 2024 - Present',
        company: 'Cegid',
        url: 'https://www.cegid.com/fr/wp-content/uploads/sites/7/2022/08/cegid-logo-blue.svg',
        description: "Data Scientist at Cegid, a French-based European leader in finance, human resources, and retail cloud business management solutions, among other sectors. I am part of the team developing Cegid Pulse, a new set of intelligent agents integrated into Cegid's business management solutions. Cegid Pulse leverages generative artificial intelligence to enhance efficiency and decision-making for businesses. Part of my responsibilities involves developing LLM-based applications, ranging from RAG to intelligent multi-agent frameworks. This enables users to fulfill daily business tasks using only natural language."
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