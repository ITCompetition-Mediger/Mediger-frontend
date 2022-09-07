import React from 'react';
import { Link } from 'react-router-dom';
import MonthlyMediger from './myMediger/MonthlyMediger';
import Mypage from './myMediger/Mypage';

function Home() {
  return (
    <div>
      {/* Home!
      <Link to="/"></Link> */}
      <Mypage />
    </div>
  );
}

export default Home;
