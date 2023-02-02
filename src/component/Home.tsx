import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import SunIcon from '@mui/icons-material/WbSunny';
import Button from '@mui/material/Button';
import school from '../common/assest/home.jpg';

import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import Icon from '@mui/material/Icon';


const pages = ['student', 'about us'];

const Home = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleCloseNavMenu = (event: any) => {
   
// when the button passed button a-key show here
    let buttonPress = event.target.getAttribute('a-key');
   if (buttonPress === 'student') {
      navigate('/student');

    } else if (buttonPress === 'about us') {
      navigate('/about');
    }
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);

  };

  return (
    <><AppBar position="fixed"
      sx={{ color: 'black', background: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            STUDENT PORTAL
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none', },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', alignItems: 'left' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                a-key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar> 
    <Box
            component="img"
            sx={{
            height: 800,
            }}
            alt="Sunshine"
            src={school}
        />

  <Typography component="div">
  <Box sx={{mx:70 ,textalign: 'center', letterSpacing: 5, fontSize: 'h6.fontSize' }}> Lets spread Sunshine
  <SunIcon
  sx={{ color: "yellow",
    animation: "spin 2s linear infinite",
    "@keyframes spin": {
      "0%": {
        transform: "rotate(360deg)",
      },
      "100%": {
        transform: "rotate(0deg)",
      },
    },
  }}
/>
  </Box>
    </Typography>
    
    </>
  );
};
export default Home;