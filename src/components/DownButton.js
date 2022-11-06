import {IconButton, Stack, Typography} from "@mui/material";
import {ReactComponent as WhiteDownArrow} from "../assets/white-down-arrow.svg";
import {ReactComponent as BlackDownArrow} from "../assets/black-down-arrow.svg";


function DownButton(props) {
    const {scrollHandler, text, color} = props;
    const downArrowCustom = (color) => {
        if (color === '#ffffff') {
            return (
                <WhiteDownArrow width={12} height={36}/>
            );
        }
        else {
            return (
                <BlackDownArrow width={12} height={36}/>
            );
        }
    }
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
                            backgroundColor: 'transparent',
                        }
                    }}>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}>
                <Typography color={color}
                            sx={{
                                fontSize: '0.8rem',
                                fontWeight: 'lighter',
                                textTransform: "uppercase",
                                writingMode: "vertical-lr",
                                transform: "scale(-1)",
                            }}>
                    {text}
                </Typography>
                {downArrowCustom(color)}
            </Stack>
        </IconButton>
    );
}

export default DownButton;
