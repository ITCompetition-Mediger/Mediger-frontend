import { Routes, Route } from 'react-router-dom';
import Home from '././pages/Home';
import HospitalListPage from './pages/map/HospitalListPage';
import HospitalMapPage from './pages/map/HospitalMapPage';
import PharmacyListPage from './pages/map/PharmacyListPage';
import MedigerList from './pages/MedigerList';
import PillSearchPage from './pages/pillSearch/PillSearchPage';
import PillSearchPlusPage from './pages/pillSearch/PillSearchPlusPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/MedigerList" element={<MedigerList />} />
      <Route path="/pillSearch" element={<PillSearchPage />} />
      <Route path="/pillSearch/detail" element={<PillSearchPlusPage />} />
      <Route path="/map/hospital" element={<HospitalMapPage />} />
      <Route path="/map/pharmacy" element={<PharmacyMapPage />} />
      <Route path="/map/pharmacyList" element={<PharmacyListPage />} />
      <Route path="/map/hospitalList" element={<HospitalListPage />} />
    </Routes>
  );
}

export default App;