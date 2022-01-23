import './App.css';
import Container from '@mui/material/Container'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'

function App() {
  return (
    <Container className='home'>
      <Navbar/>
      <Hero/>
      <Services/>
    </Container>
  );
}

export default App;
