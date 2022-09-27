import React, {useEffect, useState} from "react";
import styled from "styled-components";

const MapWrapper = styled.form`

`;

const { kakao } = window

function PharmacyMapAPI(){
    useEffect(() => {
        const mapContainer = document.getElementById('pharmacyMap')
        const mapOption = {
            center: new kakao.maps.LatLng(37.566826, 126.9786567),
            level: 3,
        }

        const map = new kakao.maps.Map(mapContainer, mapOption);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
            let lat = position.coords.latitude,
                lon = position.coords.longitude; 
            
            var locPosition = new kakao.maps.LatLng(lat, lon)
            map.setCenter(locPosition);   
            });
        }

        const ps = new kakao.maps.services.Places(); 
        var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 })
        ps.keywordSearch('약국', placesSearchCB);
        
        function placesSearchCB(data, status){

            if (status === kakao.maps.services.Status.OK) {
                let bounds = new kakao.maps.LatLngBounds();

            for (let i=0; i<data.length; i++) {
                displayMarker(data[i]);    
                bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
            }       

            map.setBounds(bounds);
            }
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

        function setMapType(maptype) { 
            var roadmapControl = document.getElementById('btnRoadmap');
            var skyviewControl = document.getElementById('btnSkyview'); 
            if (maptype === 'roadmap') {
                map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);    
                roadmapControl.className = 'selected_btn';
                skyviewControl.className = 'btn';
            } else {
                map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);    
                skyviewControl.className = 'selected_btn';
                roadmapControl.className = 'btn';
            }
        }

        // 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
        function zoomIn() {
            map.setLevel(map.getLevel() - 1);
        }

        // 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
        function zoomOut() {
            map.setLevel(map.getLevel() + 1);
        }
    }},[]);

    return(
        <MapWrapper>
            <div
                id="pharmacyMap"
                style={{
                    width: '100%',
                    height: '80%',
                    position: 'absolute',
                    zIndex: '-1',
                }}
            >
                <div class="custom_typecontrol radius_border">
                    <span id="btnRoadmap" class="selected_btn" onclick={setMapType('roadmap')}>
                        지도
                    </span>
                    <span id="btnSkyview" class="btn" onclick={setMapType('skyview')}>
                        스카이뷰
                    </span>
                </div>
                <div class="custom_zoomcontrol radius_border"> 
                    <span onclick={zoomIn}>
                        <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png" alt="확대">
                        </img>
                    </span>  
                    <span onclick={zoomOut}>
                        <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png" alt="축소">
                        </img>
                    </span>
                </div>
            </div>
        </MapWrapper>
    );
}

export default PharmacyMapAPI;