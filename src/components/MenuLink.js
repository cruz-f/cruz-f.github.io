import * as React from 'react';
import {Link, Typography} from "@mui/material";


function MenuLink(props) {
    const {text, handler} = props;
    return (
        <Link color={"#FFFFFF"}
              sx={{
                  textDecoration: 'none',
                  zIndex: '1',
                  textAlign: 'center',
                  position: 'relative',
                  paddingTop: '1rem',
                  paddingBottom: '.5rem',
                  cursor: 'pointer',
                  '&:before': {
                      content: '""',
                      position: 'absolute',
                      width: '0',
                      height: '3px',
                      bottom: '0',
                      left: '0',
                      background: '#FFFFFF',
                      borderRadius: '3px',
                      transitionProperty: 'width',
                      transitionDuration: '0.4s',
                      transitionTimingFunction: 'ease-in-out',
                      transitionDelay: '0s'
                  },
                  '&:hover': {
                      '&:before': {
                          left: '0',
                          right: 'auto',
                          width: '100%'
                      }
                  },
                  '&:focus': {
                      '&:before': {
                          left: '0',
                          right: 'auto',
                          width: '100%'
                      }
                  }
              }}
              onClick={handler}>
            <Typography
                color={'#FFFFFF'}
                variant="h3"
                component="h3"
                sx={{
                    fontWeight: 'lighter',
                    textTransform: "uppercase",
                    textAlign: 'justify',
                }}>
                {text}
            </Typography>
        </Link>
    );

}

export default MenuLink;