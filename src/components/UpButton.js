import {IconButton, Stack, Typography} from "@mui/material";
import {ReactComponent as UpArrow} from "../assets/up-arrow.svg";


function UpButton(props) {
    const {scrollHandler, text} = props;
    return (
        <IconButton onClick={scrollHandler}
                    sx={{
                        transitionProperty: 'transform',
                        transitionDuration: '0.4s',
                        transitionTimingFunction: 'ease-in-out',
                        transitionDelay: '0s',
                        '&:hover': {
                            backgroundColor: '#fff',
                            transform: 'translateY(-.5rem)',
                            cursor: 'pointer',
                        }
                    }}>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}>
                <div style={{transform: "rotateX(180deg)"}}>
                    <UpArrow width={12} height={54}/>
                </div>
                <Typography color={'#212529'}
                            sx={{
                                fontWeight: 'lighter',
                                textTransform: "uppercase",
                                writingMode: "vertical-lr",
                                transform: "scale(-1)",
                            }}>
                    {text}
                </Typography>
            </Stack>
        </IconButton>
    );
}

export default UpButton;
