import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Container from "@mui/material/Container";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Admin from "./components/Admin";

function App() {
  return (
    <Router>
      <Container className="home">
        <Navbar />
        <Routes>
          <Route path="/" element={ <Hero/>}/>
          <Route path="/Services" element={<Services/>}/>
          <Route path="/Admin" element={<Admin/>}/>      
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
