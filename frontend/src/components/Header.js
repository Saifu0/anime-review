import * as React from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axiosInstance from '../axios';

function Header() {
  const history = useHistory();

  const handleLogout = () => {
    const response = axiosInstance.post('logout/', {
        refresh_token: localStorage.getItem('refresh_token'),
    });
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    axiosInstance.defaults.headers['Authorization'] = null;
    localStorage.removeItem("user_id");
    localStorage.removeItem("username");
    history.push('/login');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1}}>
                <Link to="/" style={{ color: 'white' }}>
                    Anime Review
                </Link>
            </Typography>
            <Link to="/login" style={{ color: 'white' }}>
                {localStorage.getItem("refresh_token") ? (
                    <Button color="inherit" sx={{ flexDirection: 'right' }} onClick={handleLogout}>
                        Logout
                    </Button>
                ) : (
                    <hr />
                )}
            </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;