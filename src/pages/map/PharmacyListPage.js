import React from 'react';
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
  background-color: aliceblue;
  height: 63vh;
  overflow: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

function PharmacyListPage() {
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
              <PharmacyList />
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

// import React from "react";
// import styled from "styled-components";
// import Header from "../../components/Header";
// import NavBar from "../../components/NavBar";
// import PharmacyList from "./PharmacyList";
// import { Desktop, Mobile, Tablet } from "../../components/ReactResponsive";
// import DesktopView from "../../components/DesktopView";
// import TabletView from '../../components/TabletView';

// const Wrapper = styled.form`
//     display: flex;
//     flex-direction: column;
//     align-items: center;

//     .nameHeader {
//         width: 50%;
//         text-align: left;
//         margin-top: 1.5rem;
//         margin-bottom: 1.5rem;
//         font-size: 1.5rem;
//         color: #3A6C60;
//         font-weight: bold;
//         padding-right: 5rem;
//     }
// `;

// const PharmacyListComponentWrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     width: 100%;
// `;

// function PharmacyListPage(){
//     return(
//         <div>
//             <Mobile>
//                 <Wrapper>
//                     <Header />
//                     <div className="nameHeader">
//                         💊 현위치 주변 약국
//                     </div>
//                     <PharmacyListComponentWrapper>
//                         <PharmacyList />
//                         <PharmacyList />
//                         <PharmacyList />
//                         <PharmacyList />
//                         <PharmacyList />
//                         <PharmacyList />
//                         <NavBar />
//                     </PharmacyListComponentWrapper>
//                 </Wrapper>
//             </Mobile>
//             <Desktop>
//                 <DesktopView />
//             </Desktop>
//             <Tablet>
//                 <TabletView />
//             </Tablet>
//         </div>
//     );
// }

// export default PharmacyListPage;
