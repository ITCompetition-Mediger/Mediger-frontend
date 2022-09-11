import React from "react"
import styled from "styled-components"

const HospitalListWrapper = styled.div`
    background-color: #ECF2F0;
    width: 70%;
    height: 8vh;
    display: flex;
    border-radius: 0.8rem;
    flex-direction: row;
    justify-content: space-around;
    margin: 0.7rem;

    .HospitalList {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .HospitalName {
        color: #3C7466;
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 0.7rem;
    }

    .HospitalAddress {
        color: #42514D;
        font-size: 0.5rem;
    }

    .HospitalDistance {
        color: #42514D;
        display: flex;
        align-items: center;
    }
`;

function HospitalList(){
    return(
        <HospitalListWrapper>
            <div className="HospitalImage">
                이미지
            </div>
            <div className="HospitalList">
                <div className="HospitalName">ABC 병원</div>
                <div className="HospitalAddress">서울특별시 서울구 서울동 123길 45</div>
            </div>
            <div className="HospitalDistance">
                100m
            </div> 
        </HospitalListWrapper>
    );
}

export default HospitalList;