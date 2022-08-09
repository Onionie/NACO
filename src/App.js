import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';

// Visual Display Boards
import VisualPage from './pages/ProductsPage/VisualDisplays/VisualDisplays.js';
import Chalkboard from './pages/ProductsPage/VisualDisplays/Chalkboard';
import TablesBenchesPage from './pages/TablesBenchesPage';
import TackWallPage from './pages/TackWallPanelsPage';

import ArchitectCornerPage from './pages/ArchitectCornerPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import EscribanoPage from './pages/EscribanoPage';

import DisplayCasesPage from './pages/DisplayCases';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/products" element={<VisualPage />} />
        <Route path="/architect" element={<ArchitectCornerPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/escribano" element={<EscribanoPage />} />
        {/* Visual Display Boards Route */}
        <Route path="/visual" element={<VisualPage />} />
        <Route path="/visual/chalkboard" element={<Chalkboard />} />
        <Route path="/tables" element={<TablesBenchesPage />} />
        <Route path="/tackwall" element={<TackWallPage />} />
        <Route path="/display" element={<DisplayCasesPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
