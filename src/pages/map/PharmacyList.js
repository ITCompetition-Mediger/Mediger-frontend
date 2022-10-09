import React, { useEffect } from 'react';
import styled from 'styled-components';

const PharmacyListWrapper = styled.div`
  background-color: #ecf2f0;
  width: 75vw;
  padding: 2.2vh 5vw;
  margin: 0.5vh 0;
  border-radius: 2vw;

  display: flex;
  justify-content: space-between;

  .pharmacyImage {
    width: 12vw;
    height: 12vw;
    border-radius: 50%;
    background-color: white;
    margin-right: 4vw;
  }

  .pharmacyList {
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

  .pharmacyDistance {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .distance {
    color: #97a9a4;
    font-size: 3vw;
  }
`;

function PharmacyList({address_name, place_name}) {

// function onGeoOk(position) {
//   lat = position.coords.latitude; // 위도 37.5978643
//   lng = position.coords.longitude; // 경도 127.0774531
//   //   console.log(lat, lng);
// }

// navigator.geolocation.getCurrentPosition(onGeoOk);

// const { kakao } = window;

function PharmacyList({ test2 }) {
  console.log(test2);
  return (
    <PharmacyListWrapper>
      <div className="pharmacyImage"></div>
      <div className="pharmacyList">
        <div className="pharmacyName">
          <p className="name">{address_name}</p>
        </div>
        <div className="pharmacyAddress">
          <p className="address">{place_name}</p>
        </div>
      </div>
      <div className="pharmacyDistance">
        <p className="distance">100m</p>
      </div>
    </PharmacyListWrapper>
  );
}
}
export default PharmacyList;
