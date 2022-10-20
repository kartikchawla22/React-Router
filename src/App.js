import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar/navbar";
import HomePage from "./pages/home/home-page";
import ToolsPage from "./pages/tools/tools-page";
import CalculatorPage from "./pages/calculator-page/calculator-page";
import WeatherPage from "./pages/wather-page/weather-page";

function App() {
  return (
    <Router >
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/weather" element={<WeatherPage />} />
      </Routes>
    </Router>
  );
}

export default App;
