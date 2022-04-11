import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Artists from './pages/Artists';
import Artworks from './pages/Artworks';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Home from './pages/Home'
import Login from './pages/Login';
import Navbar from './comp/Navbar';
import Footer from './comp/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path={'/'} element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artworks" element={<Artworks />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
