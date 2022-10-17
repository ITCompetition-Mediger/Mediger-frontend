// detail 페이지
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { ModalWrapper, StyledModal } from '../../components/StyledModal';
import { Mobile, Desktop, Tablet } from '../../components/ReactResponsive';
import Layout from '../../components/Layout';
import DesktopView from '../../components/DesktopView';
import TabletView from '../../components/TabletView';
import PillContentList from './PillContentList';
import notFoundImg from '../../images/notFoundImg.png';
// import reactStringReplace from 'react-string-replace';
import { OpenModal } from '../../components/OpenModal';
import { CloseModal } from '../../components/CloseModal';
import { IoIosAddCircle } from 'react-icons/io';

const PillSearchPlusWrapper = styled.div`
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

  .SubHeaderBox {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pillName {
    width: 68vw;
    font-size: 6vw;
    font-weight: bolder;
    color: #3c7466;
  }

  .AddBtn {
    height: 6vw;
    font-size: 6vw;
    color: #3c7466;
  }

  .pillScrap {
    height: 6vw;
    font-size: 6vw;
    color: #97a9a4;
    margin-right: 2vw;
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

  img {
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

  .notFoundImg {
    width: 20vw;
    height: 18vw;
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

const StyledLink = styled(Link)`
  color: #3c7466;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: #3c7466;
  }
`;

function PillSearchPlusPage() {
  // replace 객체
  //   const reactStringReplace = require('react-string-replace');

  const { itemSeq } = useParams();
  //   console.log(itemSeq);
  const [pillDetails, setPillDetails] = useState([]); //약 정보 호출 담는 배열
  //   const [itemName, setItemName] = useState([]); //약품명 호출

  //의약품 검색 상세 api 호출
  const getPillSearchPlusAPI = async () => {
    const response = await fetch(`
              http://localhost:8080/home/searchByItemSeq/Detail?itemSeq=${itemSeq}
            `);

    const data = await response.json();
    // console.log(data);
    setPillDetails(data);
    // console.log(pillDetails);
    // setItemName(data.itemName); //itemName만 따로 저장
  };

  useEffect(() => {
    getPillSearchPlusAPI();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(!isOpen);
    //스크랩 추가
    fetch(`http://localhost:8080/home/scrap`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ItemSeq: itemSeq,
        id: localStorage.getItem('id'),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          <ModalWrapper>
            <StyledModal>
              <OpenModal />
            </StyledModal>
          </ModalWrapper>;
        }
      });
  };

  const closeModal = () => {
    setIsOpen(!isOpen);
    //스크랩 삭제
    fetch('http://localhost:8080/home/scrap', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        ItemSeq: itemSeq,
        id: localStorage.getItem('id'),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          console.log('삭제되었습니다.');
          <ModalWrapper>
            <StyledModal>
              <CloseModal />
            </StyledModal>
          </ModalWrapper>;
        }
      });
  };

  return (
    <>
      <Mobile>
        <Layout>
          <PillSearchPlusWrapper>
            <PillContentHeaderWrapper>
              <div className="pillHeader">
                <div className="pillTitle">
                  <p className="pillName">{pillDetails.itemName}</p>
                </div>
                <div className="SubHeaderBox">
                  <div className="pillScrap">
                    {isOpen === false ? (
                      <AiOutlineStar onClick={openModal} />
                    ) : (
                      <AiFillStar onClick={closeModal} />
                    )}
                  </div>
                  <div className="AddBtn">
                    <StyledLink to={`/myMediger/AddToMediger/${itemSeq}`}>
                      <IoIosAddCircle />
                    </StyledLink>
                  </div>
                </div>
              </div>
            </PillContentHeaderWrapper>
            <PillContentListWrapper>
              <div className="pillImage">
                {pillDetails.itemImage == 'blank' ? (
                  <img src={notFoundImg} className="notFoundImg"></img>
                ) : (
                  <img src={pillDetails.itemImage}></img>
                )}
              </div>
              <div className="pillConentListBox">
                <div className="pillContentList">
                  <div className="contentTitle">
                    <p className="title">업체명</p>
                  </div>
                  <div className="contents">
                    <p className="content">{pillDetails.entpName}</p>
                  </div>
                </div>
                <div className="pillContentList">
                  <div className="contentTitle">
                    <p className="title">품목 기준 코드</p>
                  </div>
                  <div className="contents">
                    <p className="content">{pillDetails.itemSeq}</p>
                  </div>
                </div>
                <div className="pillContentList">
                  <div className="contentTitle">
                    <p className="title">효능</p>
                  </div>
                  <div className="contents">
                    <p className="content">
                      {pillDetails.efcyQesitm == 'blank'
                        ? '해당 내용 없음'
                        : pillDetails.efcyQesitm}
                      {/* {pillDetails.efcyQesitm == 'blank'
                        ? '해당 내용 없음'
                        : reactStringReplace(
                            pillDetails.efcyQesitm,
                            '<p>',
                            (match, i) => '',
                          )} */}
                    </p>
                  </div>
                </div>
                <div className="pillContentList">
                  <div className="contentTitle">
                    <p className="title">사용법</p>
                  </div>
                  <div className="contents">
                    <p className="content">
                      {pillDetails.useMethodQesitm == 'blank'
                        ? '해당 내용 없음'
                        : pillDetails.useMethodQesitm}
                    </p>
                  </div>
                </div>
                <div className="pillContentList">
                  <div className="contentTitle">
                    <p className="title">경고</p>
                  </div>
                  <div className="contents">
                    <p className="content">
                      {pillDetails.atpnWarnQesitm == 'blank'
                        ? '해당 내용 없음'
                        : pillDetails.atpnWarnQesitm}
                    </p>
                  </div>
                </div>
                <div className="pillContentList">
                  <div className="contentTitle">
                    <p className="title">주의사항</p>
                  </div>
                  <div className="contents">
                    <p className="content">
                      {pillDetails.atpnQesitm == 'blank'
                        ? '해당 내용 없음'
                        : pillDetails.atpnQesitm}
                    </p>
                  </div>
                </div>
                <div className="pillContentList">
                  <div className="contentTitle">
                    <p className="title">부작용</p>
                  </div>
                  <div className="contents">
                    <p className="content">
                      {pillDetails.seQesitm == 'blank'
                        ? '해당 내용 없음'
                        : pillDetails.seQesitm}
                    </p>
                  </div>
                </div>
                <div className="pillContentList">
                  <div className="contentTitle">
                    <p className="title">상호작용</p>
                  </div>
                  <div className="contents">
                    <p className="content">
                      {pillDetails.intrcQesitm == 'blank'
                        ? '해당 내용 없음'
                        : pillDetails.intrcQesitm}
                    </p>
                  </div>
                </div>
                <div className="pillContentList">
                  <div className="contentTitle">
                    <p className="title">보관법</p>
                  </div>
                  <div className="contents">
                    <p className="content">
                      {pillDetails.depositMethodQesitm == 'blank'
                        ? '해당 내용 없음'
                        : pillDetails.depositMethodQesitm}
                    </p>
                  </div>
                </div>
              </div>
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
    </>
  );
}

export default PillSearchPlusPage;
