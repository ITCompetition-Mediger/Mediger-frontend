import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { ModalWrapper, StyledModal } from '../../components/StyledModal';
import { Mobile } from '../../components/ReactResponsive';
import Layout from '../../components/Layout';

const PillSearchPlusWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 70vh;
  padding: 2.5vh 0;
  /* background-color: blue; */

  p {
    margin: 0;
  }
`;

const PillContentHeaderWrapper = styled.div`
  .pillHeader {
    /* background-color: blanchedalmond; */
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
  /* background-color: red; */

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
    /* background-color: aqua; */
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
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = (event) => {
    setIsOpen(!isOpen);
  };
  return (
    <Mobile>
      <Layout>
        <PillSearchPlusWrapper>
          <PillContentHeaderWrapper>
            <div className="pillHeader">
              <div className="pillTitle">
                <p className="pillName">모노틴정</p>
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
            <div className="pillImage">이미지</div>
            <div className="pillConentListBox">
              <div className="pillContentList">
                <div className="contentTitle">
                  <p className="title">효능</p>
                </div>
                <div className="contents">
                  <p className="content">효능 내용</p>
                </div>
              </div>
              <div className="pillContentList">
                <div className="contentTitle">
                  <p className="title">사용법</p>
                </div>
                <div className="contents">
                  <p className="content">사용법 내용</p>
                </div>
              </div>
              <div className="pillContentList">
                <div className="contentTitle">
                  <p className="title">경고</p>
                </div>
                <div className="contents">
                  <p className="content">경고 내용</p>
                </div>
              </div>
              <div className="pillContentList">
                <div className="contentTitle">
                  <p className="title">주의사항</p>
                </div>
                <div className="contents">
                  <p className="content">주의사항 내용</p>
                </div>
              </div>
              <div className="pillContentList">
                <div className="contentTitle">
                  <p className="title">상호작용</p>
                </div>
                <div className="contents">
                  <p className="content">상호작용 내용</p>
                </div>
              </div>
            </div>
          </PillContentListWrapper>
        </PillSearchPlusWrapper>
      </Layout>
    </Mobile>
  );
}

export default PillSearchPlusPage;

// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
// import { ModalWrapper, StyledModal } from '../../components/StyledModal';
// import { Mobile } from '../../components/ReactResponsive';
// import Layout from '../../components/Layout';

// const PillSearchPlusWrapper = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const PillContentHeaderWrapper = styled.div`
//   align-items: center;

//   .pillHeader {
//     display: flex;
//     flex-direction: row;
//     justify-content: space-around;
//     padding-top: 1.2rem;
//     padding-bottom: 1.2rem;
//     text-align: center;
//     width: 100%;
//   }

//   .pillTitle {
//     color: #3c7466;
//     font-weight: bold;
//     font-size: 1.5rem;
//   }

//   .pillScrap {
//     color: #3c7466;
//     font-size: 1.5rem;
//   }

//   .pillImage {
//     padding-top: 1.5rem;
//     padding-bottom: 1.5rem;
//   }
// `;

// const PillContentListWrapper = styled.div`
//   padding-left: 21%;

//   .pillContentList {
//     margin-bottom: 2.5rem;
//   }

//   .contentTitle {
//     color: #3c7466;
//     font-weight: bold;
//     font-size: 1.2rem;
//     margin-bottom: 1rem;
//   }

//   .contents {
//     color: #42514d;
//     font-size: 1rem;
//   }
// `;

// function PillSearchPlusPage() {
//   const [isOpen, setIsOpen] = useState(false);
//   const handleModal = (event) => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <Mobile>
//       <Layout>
//         <PillSearchPlusWrapper>
//           <PillContentHeaderWrapper>
//             <div className="pillHeader">
//               <div className="pillTitle">모노틴정</div>
//               <div className="pillScrap" onClick={handleModal}>
//                 {isOpen === false ? <AiOutlineStar /> : <AiFillStar />}
//                 {isOpen === false ? null : (
//                   <ModalWrapper>
//                     <StyledModal>
//                       <p className="modalContent">
//                         메디저 리스트에 추가되었습니다!
//                       </p>
//                       <button className="modalBtn">확인</button>
//                     </StyledModal>
//                   </ModalWrapper>
//                 )}
//               </div>
//             </div>
//             <div className="pillImage"></div>
//           </PillContentHeaderWrapper>
//           <PillContentListWrapper>
//             <div className="pillContentList">
//               <div className="contentTitle">효능타이틀</div>
//               <div className="contents">효능내용</div>
//             </div>
//             <div className="pillContentList">
//               <div className="contentTitle">사용법타이틀</div>
//               <div className="contents">사용법내용</div>
//             </div>
//             <div className="pillContentList">
//               <div className="contentTitle">경고타이틀</div>
//               <div className="contents">경고내용</div>
//             </div>
//             <div className="pillContentList">
//               <div className="contentTitle">주의사항타이틀</div>
//               <div className="contents">주의사항내용</div>
//             </div>
//             <div className="pillContentList">
//               <div className="contentTitle">상호작용타이틀</div>
//               <div className="contents">상호작용내용</div>
//             </div>
//           </PillContentListWrapper>
//         </PillSearchPlusWrapper>
//       </Layout>
//     </Mobile>
//   );
// }

// export default PillSearchPlusPage;
