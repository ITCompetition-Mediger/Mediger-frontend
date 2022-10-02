import React, {useEffect, useState} from "react";
import styled from "styled-components";

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

    .radiusBorder{
        border: 1px solid #919191;
        border-radius:5px;
    }

    span{
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

    span:first-child{
        border-bottom: 1px solid #bfbfbf;
    }
`;

const { kakao } = window

function PharmacyMapAPI(){
    const [controller, setController] = useState();

    useEffect(() => {
        //마커를 클릭하면 장소명을 표출할 윈포윈도우
        let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
        function locPositionAPI(){
            // HTML5의 geolocaiton으로 사용할 수 있는지 확인
            // GeoLocation을 이용해서 접속 위치를 받기
            navigator.geolocation.getCurrentPosition(function(position){
                let lat = position.coords.latitude, // 위도
                    lon = position.coords.longitude; // 경도
                let locPosition = new kakao.maps.LatLng(lat, lon);
                return locPosition; //지도에 위도 경도 반환
            });
        }
        
        let mapContainer = document.getElementById('pharmacyMap');
        let mapOption = {
            center: locPositionAPI(), //현위치 불러오기
            level: 3, //지도 확대 레벨
        }

        //카카오 지도 생성
        let map = new kakao.maps.Map(mapContainer, mapOption);

        //장소 검색 객체 생성
        const ps = new kakao.maps.services.Places(); 

        //키워드로 장소 검색
        ps.keywordSearch('약국', placesSearchCB);

        // 키워드 검색 완료 시 호출되는 콜백함수 
        function placesSearchCB(data, status){
            if (status === kakao.maps.services.Status.OK) {
                // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                // LatLngBounds 객체에 좌표를 추가
                let bounds = new kakao.maps.LatLngBounds();

            for (let i=0; i<data.length; i++) {
                displayMarker(data[i]);    
                bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
            }       

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정
            map.setBounds(bounds);
            }
        }

        // 지도에 마커를 표시
        function displayMarker(place){
            //마커를 생성하고 지도에 표시
            let marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(place.y, place.x)
        });

        // 마커에 클릭이벤트를 등록
        kakao.maps.event.addListener(marker, 'click', function() {
            // 마커를 클릭하면 장소명이 인포윈도우에 표출
            infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
            infowindow.open(map, marker);
        });
        }

    setController(map);
    }, []);

    // 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수
    function zoomIn() {
            controller.setLevel(controller.getLevel() - 1);
        }

        // 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수
    function zoomOut() {
            controller.setLevel(controller.getLevel() + 1);
        }

    return(
        <>
            <KakaoMap
                id="pharmacyMap"
            />
            <CustomZoomControl>
                <div className="radiusBorder"> 
                    <span onClick={zoomIn}>
                        <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png" alt="확대">
                        </img>
                    </span>  
                    <span onClick={zoomOut}>
                        <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png" alt="축소">
                        </img>
                    </span>
                </div>
            </CustomZoomControl>
        </>
    );
}

export default PharmacyMapAPI;