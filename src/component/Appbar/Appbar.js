import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



export default function HeaderAppbar() {
    
    return(
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'#000000'}} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography  component="div" sx={{ flexGrow: 1 }} style={{color:'#ffffff'}}>
            New York Times Most Popular Articles
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
    );
}