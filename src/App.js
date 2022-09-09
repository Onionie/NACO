import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';

// Solo Pages
import ArchitectCornerPage from './pages/ArchitectCornerPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import EscribanoPage from './pages/EscribanoPage';

// Visual Display Boards
import VisualPage from './pages/ProductsPage/VisualDisplays/VisualDisplays.js';
import Markerboard from './pages/ProductsPage/VisualDisplays/Markerboard';
import VerticalSliders from './pages/ProductsPage/VisualDisplays/VerticalSliders';
import HorizontalSlider from './pages/ProductsPage/VisualDisplays/HorizontalSlider';
import Chalkboard from './pages/ProductsPage/VisualDisplays/Chalkboard';
import TeachingWalls from './pages/ProductsPage/VisualDisplays/TeachingWall';
import Tackboard from './pages/ProductsPage/VisualDisplays/Tackboard';
import TackboardForbo from './pages/ProductsPage/VisualDisplays/TackboardForbo';
import MobileMbRev from './pages/ProductsPage/VisualDisplays/MobileMbRev';
import MobileMbTtype from './pages/ProductsPage/VisualDisplays/MobileMbTtype';
import EnclosedBB from './pages/ProductsPage/VisualDisplays/EnclosedBB';

// Tables and Benches
import TablesBenchesPage from './pages/ProductsPage/TablesBenches/TablesBenchesPage';
import ConvertibleTable from './pages/ProductsPage/TablesBenches/ConvertibleTable';
import RoundTable from './pages/ProductsPage/TablesBenches/RoundTable';
import MobileTables from './pages/ProductsPage/TablesBenches/MobileTables';
import InWallTable from './pages/ProductsPage/TablesBenches/InWallTable';

// Display Cases
import DisplayCasesPage from './pages/ProductsPage/DisplayCases/DisplayCasesPage';
import HingedDisplayCase from './pages/ProductsPage/DisplayCases/HingedDisplayCase';

// Tackwall Systems
import TackwallSystemPage from './pages/ProductsPage/TackwallSystems/TackwallSystemPage';
import ForboDW from './pages/ProductsPage/TackwallSystems/ForboDW';
import TackwallPanel from './pages/ProductsPage/TackwallSystems/TackwallPanel';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/architect" element={<ArchitectCornerPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/escribano" element={<EscribanoPage />} />

        {/* Visual Display Boards Route */}
        <Route path="/visual" element={<VisualPage />} />
        <Route path="/visual/markerboard" element={<Markerboard />} />
        <Route path="/visual/vertical-sliders" element={<VerticalSliders />} />
        <Route
          path="/visual/horizontal-sliders"
          element={<HorizontalSlider />}
        />
        <Route path="/visual/chalkboard" element={<Chalkboard />} />
        {/* <Route path="/visual/teaching_walls" element={<TeachingWalls />} /> */}
        <Route path="/visual/tackboard" element={<Tackboard />} />
        <Route path="/visual/tackboard-forbo" element={<TackboardForbo />} />
        <Route
          path="/visual/enclosed-bulletin-board"
          element={<EnclosedBB />}
        />
        <Route
          path="/visual/mobile-markerboard-reversible"
          element={<MobileMbRev />}
        />
        <Route
          path="/visual/mobile-markerboard-t-type"
          element={<MobileMbTtype />}
        />

        {/* ---------------------------------------------------------- */}
        {/* Tables Route */}
        <Route path="/tables&benches" element={<TablesBenchesPage />} />
        <Route
          path="/tables&benches/convertible-tables"
          element={<ConvertibleTable />}
        />
        <Route path="/tables&benches/round-tables" element={<RoundTable />} />
        <Route
          path="/tables&benches/mobile-tables"
          element={<MobileTables />}
        />
        <Route path="/tables&benches/inwall-tables" element={<InWallTable />} />

        {/* ---------------------------------------------------------- */}

        <Route path="/teaching-walls" element={<TeachingWalls />} />

        {/* ---------------------------------------------------------- */}
        <Route path="/tackwall-systems" element={<TackwallSystemPage />} />
        <Route
          path="/tackwall-systems/forbo-directly-to-wall"
          element={<ForboDW />}
        />
        <Route
          path="/tackwall-systems/tackwall-panels"
          element={<TackwallPanel />}
        />

        {/* ---------------------------------------------------------- */}
        <Route path="/display-cases" element={<DisplayCasesPage />} />
        <Route
          path="/display-cases/hinged-display-cases"
          element={<HingedDisplayCase />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
