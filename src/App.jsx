import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import Navbar from "./components/Navbar";
import Hero from "./Pages/Hero";
import Footer from "./components/Footer";
import Sell from "./Pages/Sell";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/sell" element={<Sell />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
