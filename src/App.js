import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';

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

import TackWallPage from './pages/TackWallPanelsPage';

// Tables and Benches
import TablesBenchesPage from './pages/ProductsPage/TablesBenches/TablesBenchesPage';

import ArchitectCornerPage from './pages/ArchitectCornerPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import EscribanoPage from './pages/EscribanoPage';

import DisplayCasesPage from './pages/DisplayCases';
import ConvertibleTable from './pages/ProductsPage/TablesBenches/ConvertibleTable';
import RoundTable from './pages/ProductsPage/TablesBenches/RoundTable';
import MobileTables from './pages/ProductsPage/TablesBenches/MobileTables';

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
        <Route path="/visual/vertical_sliders" element={<VerticalSliders />} />
        <Route
          path="/visual/horizontal_sliders"
          element={<HorizontalSlider />}
        />
        <Route path="/visual/chalkboard" element={<Chalkboard />} />
        <Route path="/visual/teaching_walls" element={<TeachingWalls />} />
        <Route path="/visual/tackboard" element={<Tackboard />} />
        <Route path="/visual/tackboard_forbo" element={<TackboardForbo />} />
        <Route
          path="/visual/enclosed_bulletin_board"
          element={<EnclosedBB />}
        />
        <Route
          path="/visual/mobile_markerboard_reversible"
          element={<MobileMbRev />}
        />
        <Route
          path="/visual/mobile_markerboard_Ttype"
          element={<MobileMbTtype />}
        />

        {/* ---------------------------------------------------------- */}
        {/* Tables Route */}
        <Route path="/tables&benches" element={<TablesBenchesPage />} />
        <Route
          path="/tables&benches/convertible_tables"
          element={<ConvertibleTable />}
        />
        <Route path="/tables&benches/round_tables" element={<RoundTable />} />
        <Route
          path="/tables&benches/mobile_tables"
          element={<MobileTables />}
        />

        <Route path="/tackwall" element={<TackWallPage />} />
        <Route path="/display" element={<DisplayCasesPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
