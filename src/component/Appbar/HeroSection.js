import * as React from 'react';
import Box from '@mui/material/Box';

import neswsimage from "../../assets/images/anotherhero.jpg";



const styles = {
    paperContainer: {
        backgroundImage: `url(${neswsimage})`,
        height: 300,
        width:'100vw',
        backgroundSize: 'cover',
        marginBottom: 70,
    }
};



export default function HeroSection() {
    
    return(
        <Box style={styles.paperContainer}>
            
        </Box>
    );
}