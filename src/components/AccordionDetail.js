import * as React from "react";
import './Accordion.css';
import {Typography} from "@mui/material";

function AccordionDetail(props) {
    const {index, title, description, description2, image} = props;
    return (
        <li key={index} tabIndex={index} style={{
            backgroundImage: `url(${image})`,
        }}>
            <Typography
                color={'#ffffff'}
                variant="h5"
                component="h5"
                sx={{
                    fontWeight: 'lighter',
                    textAlign: 'justify!important',
                    textTransform: 'uppercase',
                    paddingX: "0.5rem",
                    width: "100%",
                    top: "40%",
                    textOverflow: "ellipsis",
                    position: "absolute",
                    zIndex: 5,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                }}>
                {title}
            </Typography>
            <div>
                <Typography
                    color={'#ffffff'}
                    variant="subtitle2"
                    component="p"
                    sx={{
                        fontWeight: 'lighter',
                        textAlign: 'justify!important',
                        textTransform: 'uppercase',
                        paddingY: '0.3rem',
                    }}>
                    {description}
                </Typography>
                <Typography
                    color={'#ffffff'}
                    variant="subtitle2"
                    component="p"
                    sx={{
                        fontWeight: 'lighter',
                        textAlign: 'justify!important',
                        textTransform: 'uppercase',
                        paddingY: '0.3rem',
                    }}>
                    {description2}
                </Typography>
            </div>
        </li>
    );

}

export default AccordionDetail;