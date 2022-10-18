import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DesktopView from '../../components/DesktopView';
import Layout from '../../components/Layout';
import { Desktop, Mobile, Tablet } from '../../components/ReactResponsive';
import TabletView from '../../components/TabletView';
import PharmacyMapAPI from './PharmacyMapAPI';
import HospitalMapAPI from './HospitalMapAPI';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .MapMenuBox {
    width: 90vw;
    height: 10vh;
    padding: 0 5vw;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: absolute;
    bottom: 10vh;
    z-index: 1;
  }

  .Menu {
    border-radius: 5vw;
    padding: 2vw 2vw;
    text-align: center;
    background-color: #ecf2f0;
    color: #3c7466;
    font-size: 4vw;
    border: none;

    &:focus {
      outline: none;
    }
  }
`;

const Map = styled.div`
  width: 100vw;
  height: 75vh;
`;

const PharmacyMap = styled.div`
  width: 100vw;
  height: 75vh;
`;

const HospitalMap = styled.div`
  width: 100vw;
  height: 75vh;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 4vw;

  width: 10vw;
  height: 5vh;
  padding: 2vw 4vw;
  color: #3c7466;
  background-color: #ecf2f0;

  border-radius: 5vw;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: #3c7466;
  }
`;

function PharmacyMapPage({ ha }) {
  const [menu, setMenu] = useState('pharmacy');
  const onChangeMenu = (event) => {
    setMenu(event.target.value);
  };
  return (
    <div>
      <Mobile>
        <Layout>
          <Wrapper>
            <Map>
              {menu === 'pharmacy' ? (
                <PharmacyMap>
                  <PharmacyMapAPI ha="어렵다" />
                </PharmacyMap>
              ) : (
                <HospitalMap>
                  <HospitalMapAPI />
                </HospitalMap>
              )}
            </Map>
            <div className="MapMenuBox">
              <div className="MenuList">
                <select className="Menu" onChange={onChangeMenu}>
                  <option value="pharmacy">약국</option>
                  <option value="hospital">병원</option>
                </select>
              </div>
              <div className="ViewList">
                {menu === 'pharmacy' ? (
                  <StyledLink to={`/map/pharmacyList`}>
                    근처 약국 목록
                  </StyledLink>
                ) : (
                  <StyledLink to={`/map/hospitalList`}>
                    근처 병원 목록
                  </StyledLink>
                )}
              </div>
            </div>
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

export default PharmacyMapPage;