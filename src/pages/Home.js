import React from 'react';
import { Link } from 'react-router-dom';
// import MedigerList from './pages/MedigerList';

function Home() {
  return (
    <div>
      Home!
      <Link to="/"></Link>
      <Link to="/MedigerList">MedigerList</Link>
    </div>
  );
}

export default Home;
