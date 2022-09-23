import React, {useEffect} from "react";

const { kakao } = window

function PharmacyMapAPI(){

    useEffect(() => {
            var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 })
            const mapContainer = document.getElementById('pharmacyMap')
            const mapOption = {
                center: new kakao.maps.LatLng(37.566826, 126.9786567),
                level: 3,
        }
        const map = new kakao.maps.Map(mapContainer, mapOption);
        const ps = new kakao.maps.services.Places(); 
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
    }},[]);


    return(
            <div
                id="pharmacyMap"
                style={{
                    width: '100px',
                    height: '350px',
                }}
            >
            </div>
    );
}

export default PharmacyMapAPI;