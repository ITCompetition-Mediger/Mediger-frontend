import React from 'react';
import styled from 'styled-components';
import { AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PillListWrapper = styled.div`
  background-color: #ecf2f0;
  width: 75vw;
  padding: 2.2vh 5vw;
  margin: 0.5vh 0;
  border-radius: 2vw;

  display: flex;
  justify-content: space-between;

  p {
    margin: 0;
  }

  .PillBox {
    display: flex;
  }

  .pillImage {
    width: 16vw;
    height: 16vw;
    border-radius: 50%;
    background-color: white;
    margin-right: 4vw;
  }

  .pillList {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    width: 49vw;
    /* background-color: aquamarine; */
  }

  .pillName {
    font-size: 4.5vw;
    color: #3c7466;
    font-weight: bolder;
    margin-bottom: 1vw;
  }

  .pillCompany,
  .pillCode {
    font-size: 3vw;
    color: #3c7466;
  }

  .scrap {
    font-size: 5vw;
    color: #97a9a4;
    display: flex;
    align-items: center;
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

function PillSearchList({itemName, entpName, itemSeq}) {
  return (
    <PillListWrapper>
      <StyledLink to={`/pillSearch/detail`}>
        <div className="PillBox">
          <div className="pillImage"></div>
          <div className="pillList">
            <div className="pillTitle">
              <p className="pillName">{itemName}</p>
            </div>
            <div className="pillContent">
              <p className="pillCompany">{entpName}</p>
              <p className="pillCode">{itemSeq}</p>
            </div>
          </div>
        </div>
      </StyledLink>
      <div className="scrap">
        <AiOutlineStar />
      </div>
    </PillListWrapper>
  );
}

PillSearchList.ProtoTypes ={
    itemName: PropTypes.string.isRequired,
    entpName: PropTypes.string.isRequired,
    itemSeq: PropTypes.string.isRequired,
}

export default PillSearchList;

// import React from 'react';
// import styled from 'styled-components';
// import { AiOutlineStar } from 'react-icons/ai';
// import { Link } from 'react-router-dom';

// const PillListWrapper = styled.div`
//   background-color: #ecf2f0;
//   width: 70%;
//   height: 8.6vh;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
//   border-radius: 0.5rem;
//   margin: 0.8rem;

//   a {
//     text-decoration: none;
//   }

//   .pillList {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     text-decoration: none;
//     padding-top: 0.5rem;
//   }

//   .pillTitle {
//     color: #3c7466;
//     font-size: 1rem;
//     font-weight: bold;
//     margin-bottom: 0.5rem;
//   }

//   .pillContent {
//     color: #42514d;
//     font-size: 0.5rem;
//   }

//   .scrap {
//     color: #42514d;
//     display: flex;
//     align-items: center;
//   }
// `;

// function PillSearchList(){

//     return(
//         <PillListWrapper>
//             <div className="pillImage">이미지</div>
//             <Link to={`/pillSearch/detail`}>
//                 <div className="pillList">
//                     <div className="pillTitle">모노틴정</div>
//                         <div className="pillContent">
//                             <div className="pillCompany">업체명: 한미약품(주)</div>
//                             <div className="pillCode">품목기준코드: 200003092</div>
//                         </div>
//                     </div>
//             </Link>
//             <div className="scrap">
//                 <AiOutlineStar />
//             </div>
//         </PillListWrapper>
//     );
// }

// export default PillSearchList;
