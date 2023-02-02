import { Box, TextField } from '@mui/material';
import React from 'react';
import inprogress from '../../common/assest/progress.jpg'

const Create = () => {
    return (
      <section className='section'>
        <h2>Create</h2>
         <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        
      </section>
    );
  };
  export default Create;