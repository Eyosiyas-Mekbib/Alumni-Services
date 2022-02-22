import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Container from "@mui/material/Container";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Admin from "./components/Admin";
import RequestTable from "./components/RequestTable";
import StudentTable from "./components/StudentTable";
import RequestForm from "./components/RequestForm";

function App() {
  return (
    <Router>
      <Container className="home">
        <Navbar />
        <Routes>
          <Route path="/" element={ <Hero/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/admin" element={<RequestTable/>}/>   
          <Route path="/admin/requests" element={<RequestTable/>}/>   
          <Route path="/admin/students" element={<StudentTable/>}/> 
          <Route path="/services/officalTranscriptRequest" element={<RequestForm/>}/>   
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
