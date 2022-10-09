import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

let lat, lng;

function onGeoOk(position) {
  //   lat = position.coords.latitude; // 위도 37.5978643
  //   lng = position.coords.longitude; // 경도 127.0774531

  // 성공회대 위치
  lat = 37.488462115938;
  lng = 126.82474771924;
}

navigator.geolocation.getCurrentPosition(onGeoOk);

const { kakao } = window;

function HospitalMapAPI() {
  useEffect(() => {
    console.log(lat, lng);

    var infowindow = new kakao.maps.InfoWindow({ zindex: 1 });

    var container = document.getElementById('hospitalMap');
    var options = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 5,
    };
    var map = new kakao.maps.Map(container, options);
    const ps = new kakao.maps.services.Places(map);

    ps.categorySearch('HP8', placesSearchCB, { useMapBounds: true });

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        for (var i = 0; i < data.length; i++) {
          displayMarker(data[i]);
        }

        function displayMarker(place){
            let marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(place.y, place.x) 
        });

        

        kakao.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
            infowindow.open(map, marker);
        });
      }
      }
    }}
    ,[]);


    return(
            <div
                id="hospitalMap"
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    zIndex: '-1',
                }}
            >
            </div>
    );
}

export default HospitalMapAPI;