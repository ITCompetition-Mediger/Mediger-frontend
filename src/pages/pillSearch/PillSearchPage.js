import React from 'react';
import styled from 'styled-components';
import SearchBar from '../../components/SearchBar';
import PillSearchList from './PillSearchList';
import { Desktop, Mobile } from '../../components/ReactResponsive';
import Layout from '../../components/Layout';
import DesktopView from '../../components/DesktopView';

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PillSearchResultBox = styled.div`
  width: 100vw;
  height: 63vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  .ResultBox {
    width: 85vw;
  }

  .Total {
    font-size: 3vw;
    margin: 0;
    color: #3c7466;
  }

  hr {
    width: 100%;
    background: #3c7466;
    height: 1px;
    border: 0;
  }

  .ResultPillBox {
    width: 85vw;
    height: 58vh;
    overflow: scroll;

    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: aqua; */
  }
`;

function PillSearchPage() {
  return (
    <div>
    <Mobile>
      <Layout>
        <Wrapper>
          <SearchBar />
          <PillSearchResultBox>
            <div className="ResultBox">
              <div className="pillTotal">
                <p className="Total">전체 n개</p>
              </div>
              <hr />
            </div>
            <div className="ResultPillBox">
              <PillSearchList />
              <PillSearchList />
              <PillSearchList />
              <PillSearchList />
              <PillSearchList />
              <PillSearchList />
              <PillSearchList />
              <PillSearchList />
              <PillSearchList />
            </div>
          </PillSearchResultBox>
        </Wrapper>
      </Layout>
    </Mobile>
    <Desktop>
      <DesktopView />
    </Desktop>
    </div>
  );
}

export default PillSearchPage;

// import React from 'react';
// import styled from 'styled-components';
// import Header from '../../components/Header';
// import NavBar from '../../components/NavBar';
// import SearchBar from '../../components/SearchBar';
// import PillSearchList from './PillSearchList';
// import { Mobile } from '../../components/ReactResponsive';

// const Wrapper = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const PillSearchResultBox = styled.div`
//   color: #3c7466;
//   padding-bottom: 1rem;
//   padding-top: 1.5rem;
//   width: 70%;
//   height: 5vh;

//   .horizontal {
//     color: #3c7466;
//   }
// `;

// function PillSearchPage() {
//   return (
//     <Mobile>
//       <Wrapper>
//         <Header />
//         <SearchBar />
//         <PillSearchResultBox>
//           <div className="pillTotal">전체 1개</div>
//           <hr className="horizontal"></hr>
//         </PillSearchResultBox>
//         <PillSearchList />
//         <PillSearchList />
//         <PillSearchList />
//         <PillSearchList />
//         <PillSearchList />
//         <PillSearchList />
//         <PillSearchList />
//         <NavBar />
//       </Wrapper>
//     </Mobile>
//   );
// }

// export default PillSearchPage;
