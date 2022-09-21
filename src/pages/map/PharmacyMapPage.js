import React from 'react';
import styled from 'styled-components';
import DesktopView from '../../components/DesktopView';
import Layout from '../../components/Layout';
import { Desktop, Mobile, Tablet } from '../../components/ReactResponsive';
import TabletView from '../../components/TabletView';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Map = styled.div`
  width: 100vw;
  height: 75vh;
  /* background-color: red; */
`;

function PharmacyMapPage() {
  return (
    <div>
      <Mobile>
        <Layout>
          <Wrapper>
            <Map></Map>
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
