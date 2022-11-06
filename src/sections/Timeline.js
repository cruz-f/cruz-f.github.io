import * as React from 'react';
import {useState} from "react";
import Typography from '@mui/material/Typography';
import {Grid} from "@mui/material";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from "../components/TimelineItem";


const timelineItems = [
    {
        position: 'Bachelor degree in Applied Biology',
        date: '2012 - 2015',
        company: 'University of Minho',
        url: 'https://www.ecum.uminho.pt/en/SiteAssets/ECUM-EN.png',
        description: 'Applied Biology is focused on the study of the biological processes ' +
            'and their applications in health, agriculture, environment, food and industry. ' +
            'This course covers a wide range of topics, including cell and molecular biology, genetics, biochemistry, ' +
            'microbiology, physiology, biotechnology, among others.',
    },
    {
        position: 'Master degree in Bioinformatics',
        date: '2015 - 2017',
        company: 'University of Minho',
        url: 'https://www.eng.uminho.pt/SiteAssets/ENG-EN.png',
        description: 'Bioinformatics is a multidisciplinary field that combines biology, computer science, mathematics and statistics. ' +
            'This course covers advanced topics in bioinformatics, including algorithms applied to bioinformatics, ' +
            'omics data analysis, systems biology, statistics, machine learning, among others.',
    },
    {
        position: 'Internship',
        date: 'Feb 2017 - Jul 2017',
        company: 'Chr. Hansen Holding A/S',
        url: 'https://www.holofood.eu/files/ch.png',
        description: 'Scientific internship at Chr. Hansen Holding A/S, a Danish biotechnology company. ' +
            'This internship was focused on the reconstruction of the genome-scale metabolic model of ' +
            'Streptococcus thermophilus as part of my master thesis.',
    },
    {
        position: 'Research fellow',
        date: 'Feb 2018 - Sep 2018',
        company: 'ITQB-UNL',
        url: 'https://www.itqb.unl.pt/education/integracao-de-doutorados-nas-empresas/logo-itqb-hor-signature.png/image_preview',
        description: 'Research fellow under the project PPBI - Portuguese Platform of BioImaging at ITQB-UNL. ' +
            'This project was focused on maintaining and supporting the Bacterial Imaging Cluster facility, ' +
            'involving microscopy imaging, image analysis and data management.',
    },
    {
        position: 'Ph.D. in Biomedical Engineering',
        date: '2018-2022',
        company: 'University of Minho',
        url: 'https://bio.di.uminho.pt/assets/img/logocebbig.png',
        description: 'Ph.D. student at the Centre of Biological Engineering (CEB), University of Minho. ' +
            'This work was focused on the development of a computational framework for the reconstruction and analysis ' +
            'of genome-scale regulatory and metabolic models. The framework comprises a set of tools available ' +
            'in the ProTRenD web platform BioISO service and MEWpy Python package.',
    },
    {
        position: 'Collaborator',
        date: '2021-present',
        company: 'OMNIUMAI',
        url: 'https://www.tecminho.uminho.pt/storage/app/media/images/spinoffs/omniumai.png',
        description: 'Collaborator at OMNIUMAI, a spin-off company from the University of Minho. ' +
            'I have been directly involved in the development of OmniA, our machine learning platform for biological data. ' +
            'Purely based on automated machine learning, OmniA can generate predictive models for drug classification, ' +
            'drug sensitivity, antibody prediction, and more.',
    },
    {
        position: 'Invited assistant professor',
        date: 'Sep 2022-present',
        company: 'University of Minho',
        url: 'https://www.eng.uminho.pt/SiteAssets/ENG-EN.png',
        description: 'I am an auxiliary professor at the Department of Informatics, University of Minho. ' +
            'I am currently assisting lectures in the areas of Bioinformatics and Machine Learning applied to Biology.',
    },
]


function TimelineSection() {

    return (
        <Grid container
              id={'timeline'}
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              sx={{
                  backgroundColor: '#0E4749',
                  paddingX: '2rem',
                  paddingY: '2rem',
              }}>
            <Typography color={'#FFFFFF'}
                        sx={{
                            fontWeight: 'lighter',
                            textTransform: "uppercase",
                            writingMode: "vertical-lr",
                            transform: "scale(-1)",
                        }}>
                Timeline
            </Typography>
            <Timeline position="alternate">
                {timelineItems.map((item) => (
                    <TimelineItem {...item} />
                ))}
            </Timeline>
        </Grid>
    );
}

export default TimelineSection;
