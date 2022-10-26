import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import HospitalList from './HospitalList';
import { Desktop, Mobile, Tablet } from '../../components/ReactResponsive';
import DesktopView from '../../components/DesktopView';
import TabletView from '../../components/TabletView';

const Wrapper = styled.form`
  width: 85vw;
  height: 75vh;

  p {
    margin: 0;
    padding: 0;
  }

  .nameHeader {
    margin: 4vh 0;
  }
  .title {
    color: #3c7466;
    font-weight: bolder;
    font-size: 5vw;
  }
`;

const HospitalListComponentWrapper = styled.div`
  height: 63vh;
  overflow: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

function HospitalListPage() {
  const [hospital, setHospital] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem('hospital');
    setHospital(JSON.parse(localData));
  }, []);

  return (
    <div>
      <Mobile>
        <Layout>
          <Wrapper>
            <div className="nameHeader">
              <p className="title">🏥 현위치 주변 병원</p>
            </div>
            <HospitalListComponentWrapper>
              {hospital.map((item) => (
                <HospitalList
                  key={item.placeNumber}
                  placeName={item.placeName}
                  placeAddress={item.placeAddress}
                  placeNumber={item.placeNumber}
                />
              ))}
            </HospitalListComponentWrapper>
          </Wrapper>
        </Layout>
      </Mobile>
      <Desktop>
        <DesktopView />
      </Desktop>
      <Tablet>
        <TabletView />
      </Tablet>
    </div>
  );
}

export default HospitalListPage;