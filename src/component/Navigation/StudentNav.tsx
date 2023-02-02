import React from 'react';
import {NavLink } from 'react-router-dom';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import AddIcon from '@mui/icons-material/Add';

import {Stack } from '@mui/material';
const StudentNav = () => {
  return (
    <Stack
    direction={{ xs: 'column', sm: 'row' }}
    spacing={{ xs: 1, sm: 2, md: 4 }}
  >
    <nav className='navbar'>
     <NavLink to="/student" end>
     <FormatListNumberedIcon/>
     </NavLink>
      <NavLink to='/student/create'><AddIcon/></NavLink>
    </nav>
    </Stack>
  );
};
export default StudentNav;