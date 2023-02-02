import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import error from '../common/assest/404.jpg';
import HomeIcon from '@mui/icons-material/Home';

const Error = () => {
  return (
    <section className='section'>
      <Box
            component="img"
            sx={{
            mx:'22%',
            height: 800,
            }}
            alt="404"
            src={error}
        />
      <Link to='/'><HomeIcon/></Link>
    </section>
  );
};
export default Error;