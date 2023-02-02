import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import { Box, Stack } from '@mui/material';
const Navbar = () => {
  return (
    <Stack
    direction={{ xs: 'column', sm: 'row' }}
    spacing={{ xs: 1, sm: 2, md: 4 }}
  >
    <nav className='navbar'>
     <NavLink to="/" end>
     <HomeIcon/>
     </NavLink>
      <NavLink to='/about'><SchoolIcon/></NavLink>
    </nav>
    </Stack>
  );
};
export default Navbar;
