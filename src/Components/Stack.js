import * as React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/joy/Grid';
import logo from './logos/php.png';
import logo2 from './logos/mysql.png';
import logo3 from './logos/Node.js-Logo.wine.png';
import logo4 from './logos/r.jpg';
import logo5 from './logos/logo.svg';
import logo6 from './logos/mongo.jpg';
import logo7 from './logos/vue.png';
import logo8 from './logos/logo.png';
import logo9 from './logos/R.png';
import logo10 from './logos/next.jpg';
import logo11 from './logos/git.jpeg';
import logo12 from './logos/type.jpg';
import logo13 from './logos/symfony.jpg';
import logo14 from './logos/OIP.jpg';

const logos = [
  { src: logo, height: '50px' },
  { src: logo2, height: '50px' },
  { src: logo3, height: '50px' },
  { src: logo4, height: '50px' },
  { src: logo5, height: '50px' },
  { src: logo7, height: '50px' },
  { src: logo8, height: '50px' },
  { src: logo9, height: '50px' },
  { src: logo10, height: '50px' },
  { src: logo11, height: '50px' },
  { src: logo12, height: '50px' },
  { src: logo13, height: '50px' },
  { src: logo14, height: '50px' },
  { src: logo6, height: '50px' },
];

const Item = styled(Paper)(({ theme, isLastTwo }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'auto',
  ...(isLastTwo && {
    padding: theme.spacing(2),
  }),
}));

export default function DirectionStack() {
  return (
    <div style={{ margin: '20px' }}>
      <Grid
        container
        spacing={{ xs: 2, sm: 2, md: 2 }}
        columns={{ xs: 4, sm: 16, md: 16 }}
        sx={{ flexGrow: 1 }}
      >
        <Grid
          container
          spacing={{ xs: 2, sm: 2, md: 2 }}
          columns={{ xs: 12, sm: 6, md: 32 }}
          sx={{
            flexGrow: 1,
            margin: { md: '40px' },
          }}
        >
          {logos.map((logo, index) => (
            <Grid xs={3} sm={6} md={4} key={index} sx={index >= logos.length - 2 ? { flexGrow: 2 } : {}}>
              <Item key={index} >
                <img
                  style={{
                    height: logo.height,
                    width: 'auto',
                    maxWidth: '90%', // Reducción del 15% en XS
                  }}
                  src={logo.src}
                  alt={`Logo ${index + 1}`}
                />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
