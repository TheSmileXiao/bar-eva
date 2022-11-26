import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './footer.css';
const Footer = () => {
  return (
    <div className = 'footerContainer'>
      <Grid container spacing={2} justifyContent="flex-start">
        <Grid item xs>
        <p>Mañana:<br/> 12:00 A 16:00</p>
        </Grid>
        <Grid item xs>
        <p>Tarde:<br/> 20:00 A 24:00</p>
        </Grid>
        <Grid item xs>
        <p>C/ANTONIO MACHADO, 5. LUGONES</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
