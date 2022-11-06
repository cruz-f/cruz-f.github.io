import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import Typography from '@mui/material/Typography';
import {Grid} from "@mui/material";
import {SchoolRounded, LaptopRounded} from "@mui/icons-material";


function TimelineSection() {
    return (
        <Grid container
              id={'timeline'}
              direction="row"
              justifyContent="space-evenly"
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

                <TimelineItem py={2}>
                    <TimelineSeparator>
                        <TimelineConnector sx={{bgcolor: '#FFFFFF'}} />
                        <SchoolRounded sx={{fontSize:'3rem', color:"#FFFFFF"}} />
                        <TimelineConnector sx={{bgcolor: '#FFFFFF'}} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '4rem'}}>
                        <Typography
                            color={'#FFFFFF'}
                            variant="h6"
                            component="span"
                            sx={{
                                fontWeight: 'lighter',
                                textTransform: "uppercase",
                                textAlign: 'justify',
                            }}>
                            Bachelor degree in Applied Biology
                        </Typography>
                        <Typography color={'#FFFFFF'}>
                            2012-2015
                        </Typography>
                        <Typography color={'#FFFFFF'}>
                            University of Minho
                        </Typography>
                        <img src={"https://www.ecum.uminho.pt/en/SiteAssets/ECUM-EN.png"}
                             style={{paddingTop: '0.6rem', paddingBottom: '0.6rem'}}/>
                        <Typography color={'#FFFFFF'}
                                    sx={{
                                        fontWeight: 'lighter',
                                        textAlign: 'justify!important',
                                        textTransform: 'uppercase',
                                        paddingY: "0.2rem",
                                    }}>
                            Applied Biology is focused on the study of the biological
                            processes and their applications in health, agriculture, environment,
                            food and industry. This course covers a wide range of topics, including cell and molecular biology,
                            genetics, biochemistry, microbiology, physiology, biotechnology, among others.
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector sx={{bgcolor: '#FFFFFF'}} />
                        <SchoolRounded sx={{fontSize:'3rem', color:"#FFFFFF"}} />
                        <TimelineConnector sx={{bgcolor: '#FFFFFF'}} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '4rem'}}>
                        <Typography
                            color={'#FFFFFF'}
                            variant="h6"
                            component="span"
                            sx={{
                                fontWeight: 'lighter',
                                textTransform: "uppercase",
                                textAlign: 'justify',
                            }}>
                            Master degree in Bioinformatics
                        </Typography>
                        <Typography color={'#FFFFFF'}>
                            2015-2017
                        </Typography>
                        <Typography color={'#FFFFFF'}>
                            University of Minho
                        </Typography>
                        <img src={"https://www.eng.uminho.pt/SiteAssets/ENG-EN.png"}
                             style={{paddingTop: '0.6rem', paddingBottom: '0.6rem'}}/>
                        <Typography color={'#FFFFFF'}
                                    sx={{
                                        fontWeight: 'lighter',
                                        textAlign: 'justify!important',
                                        textTransform: 'uppercase',
                                        paddingY: "0.2rem",
                                    }}>
                            Bioinformatics is the application of computer science to the field of biology.
                            It is a multidisciplinary field that combines biology, computer science, mathematics and statistics.
                            This course covers introductory and advanced topics in bioinformatics, including
                            algorithms applied to bioinformatics, omics data analysis, systems biology, statistics, machine learning, among others.
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector sx={{bgcolor: '#FFFFFF'}} />
                        <LaptopRounded sx={{fontSize:'3rem', color:"#FFFFFF"}} />
                        <TimelineConnector sx={{bgcolor: '#FFFFFF'}} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '4rem'}}>
                        <Typography
                            color={'#FFFFFF'}
                            variant="h6"
                            component="span"
                            sx={{
                                fontWeight: 'lighter',
                                textTransform: "uppercase",
                                textAlign: 'justify',
                            }}>
                            Internship
                        </Typography>
                        <Typography color={'#FFFFFF'}>
                            Feb 2017 - Jul 2017
                        </Typography>
                        <Typography color={'#FFFFFF'}>
                            Chr. Hansen Holding A/S
                        </Typography>
                        <img src={"https://www.eng.uminho.pt/SiteAssets/ENG-EN.png"}
                             style={{paddingTop: '0.6rem', paddingBottom: '0.6rem'}}/>
                        <Typography color={'#FFFFFF'}
                                    sx={{
                                        fontWeight: 'lighter',
                                        textAlign: 'justify!important',
                                        textTransform: 'uppercase',
                                        paddingY: "0.2rem",
                                    }}>
                            Bioinformatics is the application of computer science to the field of biology.
                            It is a multidisciplinary field that combines biology, computer science, mathematics and statistics.
                            This course covers introductory and advanced topics in bioinformatics, including
                            algorithms applied to bioinformatics, omics data analysis, systems biology, statistics, machine learning, among others.
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector sx={{bgcolor: '#FFFFFF'}} />
                        <LaptopRounded sx={{fontSize:'3rem', color:"#FFFFFF"}} />
                        <TimelineConnector sx={{bgcolor: '#FFFFFF'}} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '4rem'}}>
                        <Typography
                            color={'#FFFFFF'}
                            variant="h6"
                            component="span"
                            sx={{
                                fontWeight: 'lighter',
                                textTransform: "uppercase",
                                textAlign: 'justify',
                            }}>
                            Research fellow
                        </Typography>
                        <Typography color={'#FFFFFF'}>
                            Feb 2018 - Sep 2018
                        </Typography>
                        <Typography color={'#FFFFFF'}>
                            ITQB-UNL
                        </Typography>
                        <img src={"https://www.eng.uminho.pt/SiteAssets/ENG-EN.png"}
                             style={{paddingTop: '0.6rem', paddingBottom: '0.6rem'}}/>
                        <Typography color={'#FFFFFF'}
                                    sx={{
                                        fontWeight: 'lighter',
                                        textAlign: 'justify!important',
                                        textTransform: 'uppercase',
                                        paddingY: "0.2rem",
                                    }}>
                            Bioinformatics is the application of computer science to the field of biology.
                            It is a multidisciplinary field that combines biology, computer science, mathematics and statistics.
                            This course covers introductory and advanced topics in bioinformatics, including
                            algorithms applied to bioinformatics, omics data analysis, systems biology, statistics, machine learning, among others.
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector sx={{bgcolor: '#FFFFFF'}} />
                        <SchoolRounded sx={{fontSize:'3rem', color:"#FFFFFF"}} />
                        <TimelineConnector sx={{bgcolor: '#FFFFFF'}} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '4rem'}}>
                        <Typography
                            color={'#FFFFFF'}
                            variant="h6"
                            component="span"
                            sx={{
                                fontWeight: 'lighter',
                                textTransform: "uppercase",
                                textAlign: 'justify',
                            }}>
                            Ph.D. in Biomedical Engineering
                        </Typography>
                        <Typography color={'#FFFFFF'}>
                            2018-2022
                        </Typography>
                        <Typography color={'#FFFFFF'}>
                            University of Minho
                        </Typography>
                        <img src={"https://www.eng.uminho.pt/SiteAssets/ENG-EN.png"}
                             style={{paddingTop: '0.6rem', paddingBottom: '0.6rem'}}/>
                        <Typography color={'#FFFFFF'}
                                    sx={{
                                        fontWeight: 'lighter',
                                        textAlign: 'justify!important',
                                        textTransform: 'uppercase',
                                        paddingY: "0.2rem",
                                    }}>
                            Bioinformatics is the application of computer science to the field of biology.
                            It is a multidisciplinary field that combines biology, computer science, mathematics and statistics.
                            This course covers introductory and advanced topics in bioinformatics, including
                            algorithms applied to bioinformatics, omics data analysis, systems biology, statistics, machine learning, among others.
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector sx={{bgcolor: '#FFFFFF'}} />
                        <LaptopRounded sx={{fontSize:'3rem', color:"#FFFFFF"}} />
                        <TimelineConnector sx={{bgcolor: '#FFFFFF'}} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '4rem'}}>
                        <Typography
                            color={'#FFFFFF'}
                            variant="h6"
                            component="span"
                            sx={{
                                fontWeight: 'lighter',
                                textTransform: "uppercase",
                                textAlign: 'justify',
                            }}>
                            Collaborator
                        </Typography>
                        <Typography color={'#FFFFFF'}>
                            2021-present
                        </Typography>
                        <Typography color={'#FFFFFF'}>
                            OMNIUMAI
                        </Typography>
                        <img src={"https://www.eng.uminho.pt/SiteAssets/ENG-EN.png"}
                             style={{paddingTop: '0.6rem', paddingBottom: '0.6rem'}}/>
                        <Typography color={'#FFFFFF'}
                                    sx={{
                                        fontWeight: 'lighter',
                                        textAlign: 'justify!important',
                                        textTransform: 'uppercase',
                                        paddingY: "0.2rem",
                                    }}>
                            Bioinformatics is the application of computer science to the field of biology.
                            It is a multidisciplinary field that combines biology, computer science, mathematics and statistics.
                            This course covers introductory and advanced topics in bioinformatics, including
                            algorithms applied to bioinformatics, omics data analysis, systems biology, statistics, machine learning, among others.
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector sx={{bgcolor: '#FFFFFF'}} />
                        <SchoolRounded sx={{fontSize:'3rem', color:"#FFFFFF"}} />
                        <TimelineConnector sx={{bgcolor: '#FFFFFF'}} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '4rem'}}>
                        <Typography
                            color={'#FFFFFF'}
                            variant="h6"
                            component="span"
                            sx={{
                                fontWeight: 'lighter',
                                textTransform: "uppercase",
                                textAlign: 'justify',
                            }}>
                            Invited assistant professor
                        </Typography>
                        <Typography color={'#FFFFFF'}>
                            Sep 2022-present
                        </Typography>
                        <Typography color={'#FFFFFF'}>
                            University of Minho
                        </Typography>
                        <img src={"https://www.eng.uminho.pt/SiteAssets/ENG-EN.png"}
                             style={{paddingTop: '0.6rem', paddingBottom: '0.6rem'}}/>
                        <Typography color={'#FFFFFF'}
                                    sx={{
                                        fontWeight: 'lighter',
                                        textAlign: 'justify!important',
                                        textTransform: 'uppercase',
                                        paddingY: "0.2rem",
                                    }}>
                            Bioinformatics is the application of computer science to the field of biology.
                            It is a multidisciplinary field that combines biology, computer science, mathematics and statistics.
                            This course covers introductory and advanced topics in bioinformatics, including
                            algorithms applied to bioinformatics, omics data analysis, systems biology, statistics, machine learning, among others.
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

            </Timeline>
        </Grid>
    );
}

export default TimelineSection;
