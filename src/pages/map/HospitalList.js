import React from 'react';
import styled from 'styled-components';

const HospitalListWrapper = styled.div`
  background-color: #ecf2f0;
  width: 75vw;
  padding: 2.2vh 5vw;
  margin: 0.5vh 0;
  border-radius: 2vw;

  display: flex;
  justify-content: space-between;

  .HospitalImage {
    width: 12vw;
    height: 12vw;
    border-radius: 50%;
    background-color: white;
    margin-right: 4vw;
  }

  .HospitalList {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 45vw;
  }

  .name {
    font-size: 4.5vw;
    color: #3c7466;
    font-weight: bolder;
    margin-bottom: 1vw;
  }

  .address {
    font-size: 3vw;
    color: #42514d;
  }

  .HospitalDistance {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .distance {
    color: #97a9a4;
    font-size: 3vw;
  }
`;

function HospitalList() {
  return (
    <HospitalListWrapper>
      <div className="HospitalImage"></div>
      <div className="HospitalList">
        <div className="HospitalName">
          <p className="name">병원 이름</p>
        </div>
        <div className="HospitalAddress">
          <p className="address">상세 주소 , 도로명 주소</p>
        </div>
      </div>
      <div className="HospitalDistance">
        <p className="distance">100m</p>
      </div>
    </HospitalListWrapper>
  );
}

export default HospitalList;

// import React from "react"
// import styled from "styled-components"

// const HospitalListWrapper = styled.div`
//     background-color: #ECF2F0;
//     width: 70%;
//     height: 8vh;
//     display: flex;
//     border-radius: 0.8rem;
//     flex-direction: row;
//     justify-content: space-around;
//     margin: 0.7rem;

//     .HospitalList {
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//     }

//     .HospitalName {
//         color: #3C7466;
//         font-size: 1rem;
//         font-weight: bold;
//         margin-bottom: 0.7rem;
//     }

//     .HospitalAddress {
//         color: #42514D;
//         font-size: 0.5rem;
//     }

//     .HospitalDistance {
//         color: #42514D;
//         display: flex;
//         align-items: center;
//     }
// `;

// function HospitalList(){
//     return(
//         <HospitalListWrapper>
//             <div className="HospitalImage">
//                 이미지
//             </div>
//             <div className="HospitalList">
//                 <div className="HospitalName">ABC 병원</div>
//                 <div className="HospitalAddress">서울특별시 서울구 서울동 123길 45</div>
//             </div>
//             <div className="HospitalDistance">
//                 100m
//             </div>
//         </HospitalListWrapper>
//     );
// }

// export default HospitalList;
