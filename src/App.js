import { Routes, Route } from 'react-router-dom';
import Home from '././pages/Home';
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
    </Routes>
  );
}

export default App;
