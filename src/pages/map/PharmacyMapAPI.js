import React, { useEffect } from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PharmacyList from './PharmacyList';
import PharmacyListPage from './PharmacyListPage';
import PharmacyMapPage from './PharmacyMapPage';
import styled from 'styled-components';

const KakaoMap = styled.div`
  width: 100%;
  height: 80%;
  position: absolute;
  z-index: -1;
`;

const CustomZoomControl = styled.div`
  position: absolute;
  top: 50px;
  right: 10px;
  width: 36px;
  height: 80px;
  overflow: hidden;
  z-index: 1;
  background-color: #f5f5f5;

  .radiusBorder {
    border: 1px solid #919191;
    border-radius: 5px;
  }

  span {
    display: block;
    width: 36px;
    height: 40px;
    text-align: center;
    cursor: pointer;
  }

  img {
    width: 15px;
    height: 15px;
    padding: 12px 0;
    border: none;
  }

  span:first-child {
    border-bottom: 1px solid #bfbfbf;
  }
`;

let lat, lng;

function onGeoOk(position) {
  lat = position.coords.latitude; // 위도 37.5978643
  lng = position.coords.longitude; // 경도 127.0774531

  //   // 성공회대 위치
  //   lat = 37.488462115938;
  //   lng = 126.82474771924;
}

navigator.geolocation.getCurrentPosition(onGeoOk);

const { kakao } = window;

function PharmacyMapAPI({ ha }) {
  console.log(ha);
  //   const [listItems, setList] = useState([]);

  useEffect(() => {
    // console.log(lat, lng);

    var infowindow = new kakao.maps.InfoWindow({ zindex: 1 });

    var container = document.getElementById('pharmacyMap');
    var options = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 5,
    };
    var map = new kakao.maps.Map(container, options);
    const ps = new kakao.maps.services.Places(map);

    ps.categorySearch('PM9', placesSearchCB, { useMapBounds: true });

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        for (var i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          //   console.log(data[i].place_name);
          //   setList(data[i].place_name);
        }
      }
    }

    function displayMarker(place) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      kakao.maps.event.addListener(marker, 'click', function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            '</div>',
        );
        infowindow.open(map, marker);
      });

      //   console.log(place);
    }

    // // 현위치 마커
    // var markerPosition = new kakao.maps.LatLng(lat, lng);
    // var marker = new kakao.maps.Marker({
    //   position: markerPosition,
    // });
    // marker.setMap(map);
  }, []);

  return (
    <div
      id="pharmacyMap"
      style={{
        width: '100vw',
        height: '75vh',
      }}
    >
      {/* <PharmacyMapPage name="약국" /> */}
    </div>
  );
}

export default PharmacyMapAPI;
