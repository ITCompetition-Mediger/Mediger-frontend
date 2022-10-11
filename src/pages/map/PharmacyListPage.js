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
  const [placeName, setPlaceName] = useState([]);
  const [placeAddress, setPlaceAddress] = useState([]);

  useEffect(() => {
    const localData_placeName = localStorage.getItem('pharmacy_place_name');
    setPlaceName(JSON.parse(localData_placeName));

    const localData_placeAddress = localStorage.getItem(
      'pharmacy_place_address',
    );
    setPlaceAddress(JSON.parse(localData_placeAddress));
  }, []);

  return (
    <div>
      <Mobile>
        <Layout>
          <Wrapper>
            <div className="nameHeader">
              <p className="title">💊 현위치 주변 약국</p>
            </div>
            <PharmacyListComponentWrapper>
              {placeName.map((item) => (
                <PharmacyList placeName={item} />
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
