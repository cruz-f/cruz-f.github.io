import * as React from "react";
import VizSensor from "react-visibility-sensor";
import {Fade} from "@mui/material";
import TimelineItemMUI from '@mui/lab/TimelineItem';
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import LaptopRoundedIcon from '@mui/icons-material/LaptopRounded';
import TimelineContent from "@mui/lab/TimelineContent";
import Typography from "@mui/material/Typography";

function TimelineItem(props) {

    const {position, date, company, url, description} = props;

    let [active, setActive] = React.useState(false);

    return (
        <VizSensor
            onChange={(isVisible) => {
                setActive(isVisible);
            }}
        >
            <Fade in={active} easing={'ease-in-out'} timeout={300}>
                <TimelineItemMUI py={2}>
                    <TimelineSeparator>
                        <TimelineConnector sx={{bgcolor: '#FFFFFF'}} />
                        <LaptopRoundedIcon sx={{fontSize:'3.5rem', color:"#FFFFFF"}} />
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
                            {position}
                        </Typography>
                        <Typography color={'#FFFFFF'}>
                            {date}
                        </Typography>
                        <Typography color={'#FFFFFF'}>
                            {company}
                        </Typography>
                        <img src={url} alt="company logo"
                             style={{paddingTop: '0.6rem', paddingBottom: '0.6rem'}}
                             height={125}/>
                        <Typography color={'#FFFFFF'}
                                    sx={{
                                        fontWeight: 'lighter',
                                        textAlign: 'justify!important',
                                        textTransform: 'uppercase',
                                        paddingY: "0.2rem",
                                    }}>
                            {description}
                        </Typography>
                    </TimelineContent>
                </TimelineItemMUI>
            </Fade>
        </VizSensor>
    );
}

export default TimelineItem;