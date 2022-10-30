import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import LaptopIcon from '@mui/icons-material/Laptop';
import Typography from '@mui/material/Typography';
import {Grid} from "@mui/material";


function TimelineSection() {
    return (
        <Grid container
              id={'timeline'}
              direction="row"
              sx={{
                  backgroundColor: '#80ed99',
                  minHeight: '100vh',
                  paddingX: '2rem',
                  paddingY: '2rem',
              }}
              justifyContent="space-between"
              alignItems="start">
            <Typography color={'#212529'}
                        sx={{
                            fontWeight: 'lighter',
                            textTransform: "uppercase",
                            writingMode: "vertical-lr",
                            transform: "scale(-1)",
                        }}>
                Timeline
            </Typography>
            <Timeline position="alternate">

                <TimelineItem py={2}>
                    <TimelineSeparator>
                        <TimelineConnector sx={{bgcolor: '#212529'}} />
                        <TimelineDot color="primary" variant="outlined">
                            <SchoolIcon sx={{fontSize:'3rem'}} />
                        </TimelineDot>
                        <TimelineConnector sx={{bgcolor: '#212529'}} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '4rem'}}>
                        <Typography
                            color={'#212529'}
                            variant="h6"
                            component="span"
                            sx={{
                                fontWeight: 'lighter',
                                textTransform: "uppercase",
                                textAlign: 'justify',
                            }}>
                            Bachelor degree in Applied Biology
                        </Typography>
                        <Typography color={'#212529'}>
                            2012-2015
                        </Typography>
                        <Typography color={'#212529'}>
                            University of Minho
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector sx={{bgcolor: '#212529'}} />
                        <TimelineDot color="primary" variant="outlined">
                            <SchoolIcon sx={{fontSize:'3rem'}} />
                        </TimelineDot>
                        <TimelineConnector sx={{bgcolor: '#212529'}} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '4rem'}}>
                        <Typography
                            color={'#212529'}
                            variant="h6"
                            component="span"
                            sx={{
                                fontWeight: 'lighter',
                                textTransform: "uppercase",
                                textAlign: 'justify',
                            }}>
                            Master degree in Bioinformatics
                        </Typography>
                        <Typography color={'#212529'}>
                            2015-2017
                        </Typography>
                        <Typography color={'#212529'}>
                            University of Minho
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector sx={{bgcolor: '#212529'}} />
                        <TimelineDot color="primary" variant="outlined">
                            <LaptopIcon sx={{fontSize:'3rem'}} />
                        </TimelineDot>
                        <TimelineConnector sx={{bgcolor: '#212529'}} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '4rem'}}>
                        <Typography
                            color={'#212529'}
                            variant="h6"
                            component="span"
                            sx={{
                                fontWeight: 'lighter',
                                textTransform: "uppercase",
                                textAlign: 'justify',
                            }}>
                            Internship
                        </Typography>
                        <Typography color={'#212529'}>
                            Feb 2017 - Jul 2017
                        </Typography>
                        <Typography color={'#212529'}>
                            Chr. Hansen Holding A/S
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector sx={{bgcolor: '#212529'}} />
                        <TimelineDot color="primary" variant={"outlined"}>
                            <LaptopIcon sx={{fontSize:'3rem'}} />
                        </TimelineDot>
                        <TimelineConnector sx={{bgcolor: '#212529'}} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '4rem'}}>
                        <Typography
                            color={'#212529'}
                            variant="h6"
                            component="span"
                            sx={{
                                fontWeight: 'lighter',
                                textTransform: "uppercase",
                                textAlign: 'justify',
                            }}>
                            Research fellow
                        </Typography>
                        <Typography color={'#212529'}>
                            Feb 2018 - Sep 2018
                        </Typography>
                        <Typography color={'#212529'}>
                            ITQB-UNL
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector sx={{bgcolor: '#212529'}} />
                        <TimelineDot color="primary" variant="outlined">
                            <SchoolIcon sx={{fontSize:'3rem'}} />
                        </TimelineDot>
                        <TimelineConnector sx={{bgcolor: '#212529'}} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '4rem'}}>
                        <Typography
                            color={'#212529'}
                            variant="h6"
                            component="span"
                            sx={{
                                fontWeight: 'lighter',
                                textTransform: "uppercase",
                                textAlign: 'justify',
                            }}>
                            Ph.D. in Biomedical Engineering
                        </Typography>
                        <Typography color={'#212529'}>
                            2018-2022
                        </Typography>
                        <Typography color={'#212529'}>
                            University of Minho
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector sx={{bgcolor: '#212529'}} />
                        <TimelineDot color="primary" variant={"outlined"}>
                            <LaptopIcon sx={{fontSize:'3rem'}} />
                        </TimelineDot>
                        <TimelineConnector sx={{bgcolor: '#212529'}} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '4rem'}}>
                        <Typography
                            color={'#212529'}
                            variant="h6"
                            component="span"
                            sx={{
                                fontWeight: 'lighter',
                                textTransform: "uppercase",
                                textAlign: 'justify',
                            }}>
                            Collaborator
                        </Typography>
                        <Typography color={'#212529'}>
                            2021-present
                        </Typography>
                        <Typography color={'#212529'}>
                            OMNIUMAI
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Grid>
    );
}

export default TimelineSection;
