import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DesktopView from '../../components/DesktopView';
import Layout from '../../components/Layout';
import { Desktop, Mobile, Tablet } from '../../components/ReactResponsive';
import TabletView from '../../components/TabletView';

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
  /* background-color: red; */
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

function PharmacyMapPage() {
  return (
    <div>
      <Mobile>
        <Layout>
          <Wrapper>
            <Map></Map>
            <div className="MapMenuBox">
              <div className="MenuList">
                <select className="Menu">
                  <option value="pharmacy">근처 약국</option>
                  <option value="hospital">근처 병원</option>
                </select>
              </div>
              <div className="ViewList">
                <StyledLink to={`/map/pharmacyList`}>목록 보기</StyledLink>
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

// import React from 'react';
// import styled from 'styled-components';
// import DesktopView from '../../components/DesktopView';
// import Header from '../../components/Header';
// import NavBar from '../../components/NavBar';
// import { Desktop, Mobile, Tablet } from '../../components/ReactResponsive';
// import TabletView from '../../components/TabletView';

// const Wrapper = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const DummyData = styled.div`
//   width: 375px;
//   height: 605px;
// `;

// function PharmacyMapPage() {
//   return (
//     <div>
//       <Mobile>
//         <Wrapper>
//           <Header />
//           <DummyData>근처 약국 지도 api 표시</DummyData>
//           <NavBar />
//         </Wrapper>
//       </Mobile>
//       <Desktop>
//         <DesktopView />
//       </Desktop>
//       <Tablet>
//         <TabletView />
//       </Tablet>
//     </div>
//   );
// }

// export default PharmacyMapPage;
