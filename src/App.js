import { Routes, Route } from 'react-router-dom';
import Main from '././pages/Home';
import HospitalListPage from './pages/map/HospitalListPage';
import HospitalMapPage from './pages/map/HospitalMapPage';
import PharmacyListPage from './pages/map/PharmacyListPage';
import MedigerList from './pages/medigerList/MedigerList';
import PillSearchPage from './pages/pillSearch/PillSearchPage';
import PillSearchPlusPage from './pages/pillSearch/PillSearchPlusPage';
import PharmacyMapPage from './pages/map/PharmacyMapPage';
import LoginPage from './pages/login/LoginPage';
import AddToMediger from './pages/myMediger/AddToMediger';
import DailyMediger from './pages/myMediger/DailyMediger';
import MonthlyMediger from './pages/myMediger/MonthlyMediger';
import Mypage from './pages/myMediger/Mypage';
import Splash from '././pages/Splash';
import MapApiTest from '././pages/map/MapApiTest';
import SearchTest from './pages/pillSearch/SearchTest';
import SubmitTest from './pages/myMediger/SubmitTest';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      {/* <Route path="/" element={<NewLogin />} /> */}
      <Route exact path="/login/oauth2/code" element={<Main />} />
      <Route path="/MedigerList" element={<MedigerList />} />
      <Route path="/pillSearch" element={<PillSearchPage />} />
      <Route
        path="/pillSearch/detail/:itemSeq"
        element={<PillSearchPlusPage />}
      />
      <Route path="/map/hospital" element={<HospitalMapPage />} />
      <Route path="/map/pharmacy" element={<PharmacyMapPage />} />
      <Route path="/map/pharmacyList" element={<PharmacyListPage />} />
      <Route path="/map/hospitalList" element={<HospitalListPage />} />
      <Route
        path="/myMediger/AddToMediger/:itemSeq"
        element={<AddToMediger />}
      />
      <Route
        path="/myMediger/DailyMediger/:selectDay"
        element={<DailyMediger />}
      />
      <Route path="/myMediger/MonthlyMediger" element={<MonthlyMediger />} />
      <Route path="/myMediger/Mypage" element={<Mypage />} />
      <Route path="/pages/Home" element={<Main />} />
      <Route path="/pages/Splash" element={<Splash />} />
      <Route path="/map/MapApiTest" element={<MapApiTest />} />
      <Route path="/pillSearch/SearchTest" element={<SearchTest />} />
      <Route path="/myMediger/SubmitTest" element={<SubmitTest />} />
    </Routes>
  );
}
export default App;
