import * as React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import CodeSharpIcon from '@mui/icons-material/CodeSharp';

function App() {
    return (
        <Box sx={{
            backgroundColor: 'text.secondary',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center">
                <Grid item>
                    <Typography mb={2} color={"primary.main"} variant="h2" component="h2">
                        IN CONSTRUCTION
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default App;