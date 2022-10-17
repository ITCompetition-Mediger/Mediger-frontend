import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchBar from '../../components/SearchBar';
import PillSearchList from './PillSearchList';
import { Desktop, Mobile, Tablet } from '../../components/ReactResponsive';
import Layout from '../../components/Layout';
import DesktopView from '../../components/DesktopView';
import TabletView from '../../components/TabletView';
import SearchTest from './SearchTest';

const Wrapper = styled.div`
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

function PillSearchPage() {
  const [resultData, setResultData] = useState([]);

  const searchData = (x) => {
    setResultData(x);
  };

  // 스크랩 아이콘 관련
  const [medigerList, setMedigerList] = useState([]);
  // let [medigerListIcon, setMedigerListIcon] = useState([]);

  const getAPI = async () => {
    const json = await (
      await fetch(`
          /home/mypage
          `)
    ).json();
    setMedigerList(json.scrapList);
    // console.log(medigerList);

    let resultMedigerList = resultData.filter((item) =>
      medigerList.some((i) => i.itemSeq === item.itemSeq),
    );
    // resultMedigerList.map((item) => ({ itemName: '포함' }));
    // console.log(resultMedigerList);
  };

  useEffect(() => {
    getAPI();
  }, [resultData]);

  return (
    <div>
      <Mobile>
        <Layout>
          <Wrapper>
            <SearchTest searchData={searchData} />
            <PillSearchResultBox>
              <div className="ResultBox">
                <div className="pillTotal">
                  <p className="Total">전체 {resultData.length}개</p>
                </div>
                <hr />
              </div>
              <div className="ResultPillBox">
                {resultData.map((item) => (
                  <PillSearchList
                    itemName={item.itemName}
                    itemSeq={item.itemSeq}
                    entpName={item.entpName}
                    itemImage={item.itemImage}
                  />
                ))}
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
