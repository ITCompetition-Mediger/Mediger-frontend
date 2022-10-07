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

let lat, lon;

function PharmacyListPage() {
  function location() {
    navigator.geolocation.getCurrentPosition(function (position) {
      let lat = position.coords.latitude, // 위도
        lon = position.coords.longitude; // 경도
      return lat, lon;
    });
  }

  const [pharmacys, setPharmacys] = useState();
  //약국 조회 상세 api 호출
  const getPharmacyAPI = async () => {
    location();
    const response = await fetch(`
        http://apis.data.go.kr/B552657/ErmctInsttInfoInqireService/getParmacyLcinfoInqire?WGS84_LON=${lon}_LAT=${lat}
      `);

    const data = await response.json();
    setPharmacys(data); //pillDetails를 저장
  };

  useEffect(() => {
    getPharmacyAPI();
  }, []);

  {
    pharmacys.map((pharmacy) => (
      <PharmacyList
        distance={pharmacy.distance}
        dutyName={pharmacy.dutyName}
        dutyAddr={pharmacy.dutyAddr}
      />
    ));
  }

  return (
    <div>
      <Mobile>
        <Layout>
          <Wrapper>
            <div className="nameHeader">
              <p className="title">💊 현위치 주변 약국</p>
            </div>
            <PharmacyListComponentWrapper>
              <PharmacyList />
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
