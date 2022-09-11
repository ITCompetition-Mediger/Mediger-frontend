import React from "react"
import styled from "styled-components"

const PharmacyListWrapper = styled.div`
    background-color: #ECF2F0;
    width: 70%;
    height: 8vh;
    display: flex;
    border-radius: 0.8rem;
    flex-direction: row;
    justify-content: space-around;
    margin: 0.7rem;

    .pharmacyList {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .pharmacyName {
        color: #3C7466;
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 0.7rem;
    }

    .pharmacyAddress {
        color: #42514D;
        font-size: 0.5rem;
    }

    .pharmacyDistance {
        color: #42514D;
        display: flex;
        align-items: center;
    }
`;

function PharmacyList(){
    return(
        <PharmacyListWrapper>
            <div className="pharmacyImage">
                이미지
            </div>
            <div className="pharmacyList">
                <div className="pharmacyName">ABC 약국</div>
                <div className="pharmacyAddress">서울특별시 서울구 서울동 123길 45</div>
            </div>
            <div className="pharmacyDistance">
                100m
            </div> 
        </PharmacyListWrapper>
    );
}

export default PharmacyList;
