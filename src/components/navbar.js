import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
      <AppBar position="absolute">
        <Toolbar className='navbar'>
          <h2>
            LIMO<span>X</span>
          </h2>
          <Box className='row-flex'>
          <h3>
            QUICK BOOKING
          </h3>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, marginLeft: '10px' }}
          >
            <MenuIcon />
          </IconButton>
          </Box>
          
        </Toolbar>
      </AppBar>
  );
}

export default Navbar;