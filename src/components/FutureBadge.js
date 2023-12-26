import { Badge } from "@mui/material";
import { styled } from "@mui/material/styles";


const StyledBadge = styled(Badge)(() => ({
    '& .MuiBadge-badge': {
        right: -30,
        top: 8,
    },
}));

const SmallStyledBadge = styled(Badge)(() => ({
    '& .MuiBadge-badge': {
        right: -18,
        top: 8,
    }
}));


export default function FutureBadge(props) {
    const { small, children } = props;

    if (small) {
        return (
            <SmallStyledBadge badgeContent={'Coming Soon'} color="primary">
                {children}
            </SmallStyledBadge>
        );
    }

    return (
        <StyledBadge badgeContent={'Coming Soon'} color="primary">
            {children}
        </StyledBadge>
    );
};