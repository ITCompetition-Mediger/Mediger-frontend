import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function Home() {
  return (
    <div>
      <Header />
      <h1>여기는 HOME</h1>
      <Link to="/"></Link>
    </div>
  );
}

export default Home;
