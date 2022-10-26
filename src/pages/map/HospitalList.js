import React from 'react';
import styled from 'styled-components';

const HospitalListWrapper = styled.div`
  background-color: #ecf2f0;
  width: 75vw;
  padding: 2.2vh 5vw;
  margin: 0.5vh 0;
  border-radius: 2vw;

  display: flex;
  justify-content: space-evenly;

  .HospitalImage {
    width: 12vw;
    height: 12vw;
    border-radius: 50%;
    background-color: white;
    margin-right: 4vw;

    display: flex;
    justify-content: center;
    align-items: center;
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
    margin-top: 0.5vw;
  }
`;

function HospitalList({ placeName, placeAddress, placeNumber }) {
  return (
    <HospitalListWrapper>
      <div className="HospitalImage">🏥</div>
      <div className="HospitalList">
        <div className="HospitalName">
          <p className="name">{placeName}</p>
        </div>
        <div className="HospitalAddress">
          <p className="address">{placeAddress}</p>
          <p className="distance">{placeNumber}</p>
        </div>
      </div>
    </HospitalListWrapper>
  );
}

export default HospitalList;