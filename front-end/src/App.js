import './App.css';
import Container from '@mui/material/Container'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <Container className='home'>
      <Navbar/>
      <Hero/>
    </Container>
  );
}

export default App;
