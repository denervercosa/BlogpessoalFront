import React from "react"
import './Footer.css'
import { Grid } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedinIcon from '@material-ui/icons/Linkedin'
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";

function Footer() {
    return(
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="footer" style={{backgroundColor:'#272A53'}}>
                <Grid>
                    <Box style={{height: '22vh'}} paddingTop={'10px'}>
                        <Box>
                            <Box paddingBottom={'10px'}>
                            <Typography variant='subtitle2' align= 'center' gutterBottom style={{color: 'white', fontSize: 15}}>Sigam-me nas redes sociais:</Typography>
                                <Box display={'flex'} justifyContent="center" alignItems="center" paddingTop={'15px'} >
                                    <Box>
                                        <a href="https://github.com/denervercosa"></a>
                                        <GitHubIcon style={{ fontSize: 50, color: "white", height: "40px"}}/>
                                    </Box>
                                    <Box>
                                        <a href="https://www.linkedin.com/in/dener-vercosa/"></a>
                                        <LinkedinIcon style={{ fontSize: 50, color: "white", height: "40px"}}/>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                            <Box justifyContent={'sp'}>
                            <Typography variant='subtitle2' align= 'center' gutterBottom style={{color: 'white'}}>@2023 Copyright</Typography>
                            </Box>
                        </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer