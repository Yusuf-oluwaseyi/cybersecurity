import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ReactLenis } from '@studio-freight/react-lenis';
import FixedNav from './components/FixedNav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import AboutPage from './pages/AboutPage';
import DocsPage from './pages/DocsPage';
import ContactPage from './pages/ContactPage';
import PageTransition from './components/PageTransition';
import Cursor from './components/Cursor';
import Preloader from './components/Preloader';
import GlobalMenu from './components/GlobalMenu';
import './App.css';

const lenisOptions = {
  duration: 2.5,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
};

const AnimatedRoutes = ({ hoveredMenu, setHoveredMenu }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home hoveredMenu={hoveredMenu} setHoveredMenu={setHoveredMenu} /></PageTransition>} />
        <Route path="/work" element={<PageTransition><Work /></PageTransition>} />
        <Route path="/docs" element={<PageTransition><DocsPage /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  return (
    <ReactLenis root options={lenisOptions}>
      <Router>
        <div className={`App ${hoveredMenu ? 'menu-active' : ''}`}>
          {/* Global Dark Overlay with Big Text */}
          <div className={`hero-overlay ${hoveredMenu ? 'active' : ''}`}>
            <div className="hero-overlay-text">
              {hoveredMenu === 'ASL-SEC' ? 'ASL-SEC' : hoveredMenu}
            </div>
          </div>

          {loading && <Preloader onComplete={() => setLoading(false)} />}
          <Cursor />
          <FixedNav setHoveredMenu={setHoveredMenu} />

          {/* Global Menu - Visible on all pages */}
          <GlobalMenu setHoveredMenu={setHoveredMenu} />

          <AnimatedRoutes hoveredMenu={hoveredMenu} setHoveredMenu={setHoveredMenu} />

          {!loading && <Footer />}
        </div>
      </Router>
    </ReactLenis>
  );
}

export default App;
