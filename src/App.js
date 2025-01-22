import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import LandingPage from './pages/LandingPage.js';
import CalculatorPage from './pages/CalculatorPage.js';

function App() {
  return (
    <Router>
        <Navbar/>
        <div className="content-container">
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/calculator" element={<CalculatorPage/>} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
