import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { ModalWrapper, StyledModal } from '../../components/StyledModal';
import { Mobile, Desktop, Tablet } from '../../components/ReactResponsive';
import Layout from '../../components/Layout';
import DesktopView from '../../components/DesktopView';
import TabletView from '../../components/TabletView';
import PillContentList from './PillContentList';
import ScrapAPI from '../../lib/api/ScrapAPI';

const PillSearchPlusWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 70vh;
  padding: 2.5vh 0;

  p {
    margin: 0;
  }
`;

const PillContentHeaderWrapper = styled.div`
  .pillHeader {
    width: 85vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1.5vh 0;
  }

  .pillName {
    font-size: 7.5vw;
    font-weight: bolder;
    color: #3c7466;
  }

  .pillScrap {
    height: 6vw;
    font-size: 6vw;
    color: #97a9a4;
  }
`;

const PillContentListWrapper = styled.div`
  width: 85vw;
  height: 63vh;

  overflow: scroll;

  .pillImage {
    width: 85vw;
    height: 20vh;
    border-radius: 2vw;
    margin: 1vh 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #ecf2f0;
    color: gray;
  }

  .pillConentListBox {
  }

  .pillContentList {
    margin: 4vh 0;
  }

  .title {
    font-size: 5vw;
    color: #3c7466;
    font-weight: bolder;
    margin-bottom: 1vw;
  }

  .content {
    font-size: 4vw;
    color: #42514d;
  }
`;

function PillSearchPlusPage() {
  const [pillDetails, setPillDetails] = useState([]); //약 정보 호출 담는 배열
  const [itemName, setItemName] = useState([]); //약품명 호출
  const [searchParam, setSearchParam] = useState({itemSeq : ""});

    //의약품 검색 상세 api 호출
    const getPillSearchPlusAPI = async() =>{
      await pillSearchAPI
      .getPillSearchPlusAPI(searchParam.itemSeq)
      .then((res)=> {
        setPillDetails(res.data);
        setItemName(res.data);
      })
      .catch((err) => console.log(err));
    }

    useEffect(() => {
      getPillSearchPlusAPI(searchParam.itemSeq);
    }, [searchParam]);

    {pillDetails.map((pillDetail) =>
          <PillContentList
            itemImage={pillDetail.itemImage}
            efcyQesitm={pillDetail.efcyQesitm}
            useMethodQesitm={pillDetail.useMethodQesitm}
            atpnQesitm={pillDetail.atpnQesitm}
            atpnWarnQesitm={pillDetail.atpnWarnQesitm}
            seQesitm={pillDetail.seQesitm}
            depositMethodQesitm={pillDetail.depositMethodQesitm}
            intrcQesitm={pillDetail.intrcQesitm}
          />
    )}

  const [isOpen, setIsOpen] = useState(false);

  const handleModal = (event) => {
    setIsOpen(!isOpen);
  };

  const AddScrap = () => {
    getScrapAPI();
  }

  return (
    <div>
      <Mobile>
        <Layout>
          <PillSearchPlusWrapper>
            <PillContentHeaderWrapper>
              <div className="pillHeader">
                <div className="pillTitle">
                  <p className="pillName">{itemName}</p>
                </div>
                <div className="pillScrap" onClick={handleModal}>
                  {isOpen === false ? <AiOutlineStar /> : <AiFillStar />}
                  {isOpen === false ? null : (
                    <ModalWrapper>
                      <StyledModal>
                        <p className="modalContent">
                          메디저 리스트에 추가되었습니다!
                        </p>
                        <button className="modalBtn">
                          <p class="ok">확인</p>
                        </button>
                      </StyledModal>
                    </ModalWrapper>
                  )}
                </div>
              </div>
            </PillContentHeaderWrapper>
            <PillContentListWrapper>
              <PillContentList />
            </PillContentListWrapper>
          </PillSearchPlusWrapper>
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

export default PillSearchPlusPage;