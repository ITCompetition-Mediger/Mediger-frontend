import React, { useEffect } from 'react';
import { useState } from 'react';

let lat, lng;

function onGeoOk(position) {
  lat = position.coords.latitude;
  lng = position.coords.longitude; 
}

navigator.geolocation.getCurrentPosition(onGeoOk);

const { kakao } = window;

function PharmacyMapAPI() {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {

    var infowindow = new kakao.maps.InfoWindow({ zindex: 1 });

    var container = document.getElementById('pharmacyMap');
    var options = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 5,
    };
    var map = new kakao.maps.Map(container, options);
    const ps = new kakao.maps.services.Places(map);

    ps.categorySearch('PM9', placesSearchCB, { useMapBounds: true });

    function placesSearchCB(data, status) {
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
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            '</div>',
        );
        infowindow.open(map, marker);
      });

      setListItems((listItems) => [
        ...listItems,
        {
          placeName: place.place_name,
          placeAddress: place.address_name,
          placeNumber: place.phone,
        },
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('pharmacy', JSON.stringify(listItems));
  }, [listItems]);

  return (
    <div>
      <div
        id="pharmacyMap"
        style={{
          width: '100vw',
          height: '75vh',
        }}
      ></div>
    </div>
  );
}

export default PharmacyMapAPI;