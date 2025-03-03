import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import ScrollToTop from "../src/utils/scrollTop"; // Import the ScrollToTop component
import Contacts from "./pages/Contacts";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
