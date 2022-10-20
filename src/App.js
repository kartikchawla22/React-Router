import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar/navbar";
import HomePage from "./pages/home/home-page";
import CalculatorPage from "./pages/calculator-page/calculator-page";
import WeatherPage from "./pages/wather-page/weather-page";
import NewsPage from "./pages/news-page/news-page";

function App() {
  return (
    <Router >
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/weather" element={<WeatherPage />} />
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
