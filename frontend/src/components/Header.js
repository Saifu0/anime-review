import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1}}>
                <Link to="/" style={{ color: 'white' }}>
                    Home
                </Link>
            </Typography>
          <Button color="inherit" sx={{ flexDirection: 'right' }}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;