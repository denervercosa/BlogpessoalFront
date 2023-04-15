import React from 'react'
import Grid from '@material-ui/core/Grid/Grid'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import './Home.css';

function Home() {
    return(
        <>
            <Grid className='home'container direction="row" justifyContent="center" alignItems="center" style={{height:'100vh', width:'100%'}}>
                <Box justifyContent={'center'}>
                    <Box textAlign={'center'}>
                        <Typography variant="h3" gutterBottom color="textPrimary" justifyContent={'center'} component="h3" style={{ color: "#000000", fontWeight: "bold" }}>Sejam bem vindos(a) Gamers!</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h5" gutterBottom color="textPrimary" alignItems={'center'} component="h5" style={{color:"#C0C0C0", fontWeight: "bold" }}>Blog sobre o mundo de CSGO, highlights, dicas, tutoriais e muito mais...</Typography>
                    </Box>
                    <Box textAlign={'center'}>
                        <Button variant='outlined' className='button'>ver postagens</Button>
                    </Box>
                </Box>
            </Grid>
        </>
    )
}

export default Home