import * as React from 'react';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TwoSidedLayout from './TwoSidedLayout.js';

export default function HeroLeft07() {
  return (
    <div>
    <TwoSidedLayout>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
        sx={{ mb: 1 }} // Ajusta el margen inferior
      >
        Leonella Gallo
        <br />
        <Typography
          component="mark"
          color="info.main" // Cambia el color a azul suave
          fontSize="0.8em" // Ajusta el tamaño de la fuente
        >
          FullStack Developer
        </Typography>
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg" sx={{ mb: 2 }}>
        I thrive at the intersection of technology and design. Committed to crafting solutions that seamlessly blend functionality with compelling aesthetics.
      </Typography>
      <Card
        variant="outlined"
        color="neutral"
        orientation="horizontal"
        sx={{ gap: 2, my: 0, textAlign: 'left' }} // Ajusta el margen vertical
      >
        <AutoAwesomeIcon color="success" fontSize="xl3" />
        <div>
          <Typography fontSize="xl" fontWeight="lg" sx={{ mb: 1 }}>
            Welcome to my Portfolio.
          </Typography>
          <Typography level="body-sm">
            Here you will be able to see all my work and projects as a fullstack developer.
          </Typography>
        </div>
      </Card>
      <Button size="lg" sx={{ mt: 1 }}>Get to know me</Button> {/* Ajusta el margen superior */}
      
    </TwoSidedLayout>

    </div>
  );
}
