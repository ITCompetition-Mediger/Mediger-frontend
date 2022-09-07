import { Routes, Route } from 'react-router-dom';
import Home from '././pages/Home';
import HospitalListPage from './pages/map/HospitalListPage';
import HospitalMapPage from './pages/map/HospitalMapPage';
import PharmacyListPage from './pages/map/PharmacyListPage';
import MedigerList from './pages/medigerList/MedigerList';
<<<<<<< HEAD
import PillSearchPage from './pages/pillSearch/PillSearchPage';
import PillSearchPlusPage from './pages/pillSearch/PillSearchPlusPage';
import PharmacyMapPage from './pages/map/PharmacyMapPage';
import LoginPage from './pages/login/LoginPage';
=======
// import PillSearchPage from './pages/pillSearch/PillSearchPage';
// import PillSearchPlusPage from './pages/pillSearch/PillSearchPlusPage';
import AddToMediger from './pages/myMediger/AddToMediger';
import DailyMediger from './pages/myMediger/DailyMediger';
>>>>>>> 204704c (Design: DailyMediger 기본 레이아웃)

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/MedigerList" element={<MedigerList />} />
      <Route path="/pillSearch" element={<PillSearchPage />} />
      <Route path="/pillSearch/detail" element={<PillSearchPlusPage />} />
      <Route path="/map/hospital" element={<HospitalMapPage />} />
      <Route path="/map/pharmacy" element={<PharmacyMapPage />} />
      <Route path="/map/pharmacyList" element={<PharmacyListPage />} />
      <Route path="/map/hospitalList" element={<HospitalListPage />} />
<<<<<<< HEAD
=======
      <Route path="/AddToMediger" element={<AddToMediger />} />
      <Route path="/DailyMediger" element={<DailyMediger />} />
>>>>>>> 204704c (Design: DailyMediger 기본 레이아웃)
    </Routes>
  );
}
export default App;
