import React, { useEffect } from 'react';

let lat, lng;

function onGeoOk(position) {
  lat = position.coords.latitude; // 위도 37.5978643
  lng = position.coords.longitude; // 경도 127.0774531
  //   console.log(lat, lng);
}

navigator.geolocation.getCurrentPosition(onGeoOk);

const { kakao } = window;

const Location = () => {
  useEffect(() => {
    console.log(lat, lng);
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 3,
    };
    var map = new kakao.maps.Map(container, options);

    var markerPosition = new kakao.maps.LatLng(lat, lng);
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return (
    <div>
      <div id="map" style={{ width: '100vw', height: '100vh' }}></div>
    </div>
  );
};

export default Location;
