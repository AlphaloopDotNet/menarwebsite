import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./pages/About";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
