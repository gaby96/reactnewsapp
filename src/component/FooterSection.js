import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const styles = {
    paperContainer: {
        backgroundColor:"black",
        width:"100vw",
        
        
        marginTop: 10,
    }
};
export default function Footer() {
    return (
        
          <div style={styles.paperContainer}>
            <Toolbar>
              <Typography variant="body1" color="#ffffff" style={{float:"right",position: "absolute",
    right: "9%"}}>
                © 2019 Gabriel
              </Typography>
            </Toolbar>
          </div>
        
    )
}