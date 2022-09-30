import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import SearchBar from '../../components/SearchBar';
import PillSearchList from './PillSearchList';
import { Desktop, Mobile, Tablet } from '../../components/ReactResponsive';
import Layout from '../../components/Layout';
import DesktopView from '../../components/DesktopView';
import TabletView from '../../components/TabletView';

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
  }
`;

function PillSearchPage({inputValue, type}) {
  const [pills, setPills] = useState([]); //약 정보 담는 배열

    //의약품 검색 api를 불러옴, 의약품명으로 검색시/ 증상으로 검색시
    const getPillSearchAPI = async() =>{
        const response = await 
          fetch(`
            http://localhost:8080/home/search?type=${type}&keyword=${inputValue}
          `);

        const json = await response.json();
        setPills(json);
    }

    useEffect(() => {
        getPillSearchAPI();
    }, []);

    {pills.map((pill) =>
          <PillSearchList
            itemImage={pill.itemImage}
            itemName={pill.itemName}
            entpName={pill.entpName}
            itemSeq={pill.itemSeq}
            />
    )}


  return (
    <div>
      <Mobile>
        <Layout>
          <Wrapper>
            <SearchBar />
            <PillSearchResultBox>
              <div className="ResultBox">
                <div className="pillTotal">
                  *//*
                  <p className="Total">전체
                  {/* 넘겨받을 개수까지 함께 백에서 받기? */}개
                  </p>
                </div>
                <hr />
              </div>
              <div className="ResultPillBox">
                <PillSearchList/>
              </div>
            </PillSearchResultBox>
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

export default PillSearchPage;