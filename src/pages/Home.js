import React from 'react';
import { Link } from 'react-router-dom';
import MonthlyMediger from './myMediger/MonthlyMediger';
import Mypage from './myMediger/Mypage';
import DailyMediger from './myMediger/DailyMediger';
import MedigerList from './medigerList/MedigerList';

import Layout from '../components/Layout';

function Home() {
  return (
    <div>
      {/* Home!
      <Link to="/"></Link> */}
      {/* <Mypage /> */}
      <Layout></Layout>
    </div>
  );
}

export default Home;
