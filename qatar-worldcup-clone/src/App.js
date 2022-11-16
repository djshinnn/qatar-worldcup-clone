import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./container/Container";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import News from "./pages/News";
import Countries from "./pages/Countries";
import FIFA from "./pages/FIFA";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preview from "./pages/Preview";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/" element={<Container />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/fifa" element={<FIFA />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
