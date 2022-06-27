import {IconButton, Stack, Typography} from "@mui/material";
import {ReactComponent as DownArrow} from "../assets/down-arrow.svg";


function DownButton(props) {
    const {scrollHandler, text} = props;
    return (
        <IconButton onClick={scrollHandler}
                    sx={{
                        transitionProperty: 'transform',
                        transitionDuration: '0.4s',
                        transitionTimingFunction: 'ease-in-out',
                        transitionDelay: '0s',
                        '&:hover': {
                            transform: 'translateY(.5rem)',
                            cursor: 'pointer',
                        }
                    }}>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}>
                <Typography color={'#fff'}
                            sx={{
                                fontWeight: 'lighter',
                                textTransform: "uppercase",
                                writingMode: "vertical-lr",
                                transform: "scale(-1)",
                            }}>
                    {text}
                </Typography>
                <DownArrow width={12} height={54}/>
            </Stack>
        </IconButton>
    );
}

export default DownButton;
