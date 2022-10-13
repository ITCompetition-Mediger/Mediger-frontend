import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import PharmacyList from './PharmacyList';
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

const PharmacyListComponentWrapper = styled.div`
  height: 63vh;
  overflow: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

function PharmacyListPage() {
  const [pharmacy, setPharmacy] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem('pharmacy');
    setPharmacy(JSON.parse(localData));
  }, []);

  return (
    <div>
      <Mobile>
        <Layout>
          <Wrapper>
            <div className="nameHeader">
              <p className="title">🏬 현위치 주변 약국</p>
            </div>
            <PharmacyListComponentWrapper>
              {pharmacy.map((item) => (
                <PharmacyList
                  placeName={item.placeName}
                  placeAddress={item.placeAddress}
                  placeNumber={item.placeNumber}
                />
              ))}
            </PharmacyListComponentWrapper>
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

export default PharmacyListPage;