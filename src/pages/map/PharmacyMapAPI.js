import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PharmacyList from './PharmacyList';
import PharmacyListPage from './PharmacyListPage';

let lat, lng;

function onGeoOk(position) {
  lat = position.coords.latitude; // 위도 37.5978643
  lng = position.coords.longitude; // 경도 127.0774531
  //   console.log(lat, lng);
}

navigator.geolocation.getCurrentPosition(onGeoOk);

const { kakao } = window;

function PharmacyMapAPI() {
  useEffect(() => {
    console.log(lat, lng);

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

      console.log(place);
      //   <PharmacyListPage place_name={place.place_name} />;
    }

    // 현위치 마커
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
    ></div>
  );
}

export default PharmacyMapAPI;
