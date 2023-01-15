import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Grid} from "@mui/material";


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function TimelineCard(props) {

    const {position, date, company, url, description} = props;

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card variant={"outlined"} sx={{ display: 'flex', backgroundColor:'#B0D0D3', paddingY:'0.3rem'}}>
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center">
                <Grid item xs={12} sm={12} md={8}>
                    <CardContent>
                        <Typography component="div" variant="h5">
                            {position}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {date}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {company}
                        </Typography>
                        <CardActions disableSpacing>
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>
                                    {description}
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </CardContent>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <CardMedia
                        component="img"
                        sx={{ width: 150,
                            textAlign: 'center', marginX: 'auto'}}
                        image={url}
                    />
                </Grid>
            </Grid>
        </Card>
    );
}