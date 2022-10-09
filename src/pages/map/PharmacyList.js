import React, { useEffect } from 'react';
import { useState } from 'react';
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

function PharmacyList({ address_name, place_name }) {
  //   console.log(address_name);
  const [placeName, setPlaceName] = useState([]);

  //   useEffect(() => {
  //     setPlaceName = () => {
  //       const localData = JSON.parse(localStorage.getItem('pharmacy_place_name'));
  //       console.log(localData);
  //     };
  //   }, []);
  useEffect(() => {
    const localData = localStorage.getItem('pharmacy_place_name');
    setPlaceName(JSON.parse(localData));
  }, []);

  return (
    <PharmacyListWrapper>
      {/* <div className="pharmacyImage"></div> */}
      <div className="pharmacyList">
        {placeName.map((place) => (
          <div className="pharmacyName">
            <p className="name">{place}</p>
          </div>
        ))}
        {/* <p className="name">{address_name}</p> */}
        <div className="pharmacyAddress">
          <p className="address">{place_name}</p>
        </div>
      </div>
      {/* <div className="pharmacyDistance">
        <p className="distance">100m</p>
      </div> */}
    </PharmacyListWrapper>
  );
}

export default PharmacyList;
