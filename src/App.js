import { Routes, Route } from 'react-router-dom';
import Home from '././pages/Home';
import MedigerList from './pages/medigerList/MedigerList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/MedigerList" element={<MedigerList />} />
    </Routes>
  );
}

export default App;
