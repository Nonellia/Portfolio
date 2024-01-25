import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './Components/Header.tsx';
import HeroLeft01 from './Components/HeroLeft.tsx';
import BasicCard from './Components/Card.tsx';
import BasicCard2 from './Components/Card2.tsx';
import BasicCard3 from './Components/Card3.tsx';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Proyectos from './Proyectos.js';
import ResponsiveAppBar from './Components/Header.tsx';
import Stack from './Components/Stack.js'
import RowAndColumnSpacing from './Prueba.js';
function App() {
  return (
    <div className="App">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
      <ResponsiveAppBar/>
      <HeroLeft01/>

      <Stack/>
      <Proyectos/>
      
      {/* <div className='col d-flex justify-content-center w-100'>
            <div className="row">
                  <div className='col d-flex justify-content-center w-100 '>
                  <BasicCard/>
                  </div>

                  <div className='col d-flex justify-content-center w-100 mt-1'>
                  <BasicCard2/>
                  </div>
                  
                  <div className='col d-flex justify-content-center w-100 mt-1'>
                  <BasicCard3/>
                  </div>
            </div>
      </div> */}

      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        
      </Box>
    </div>
  );
}

export default App;
