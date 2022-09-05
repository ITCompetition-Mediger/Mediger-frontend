import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import HospitalList from "./HospitalList";

const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    .nameHeader {
        text-align: left;
        margin-top: 20px;
        padding-left: 20px;
        margin-bottom: 20px;
        font-size: 20px;
        color: #3A6C60;
        font-weight: bold;
        padding-right: 23vh;
    }
`;

const HospitalListComponentWrapper = styled.div`
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


function HospitalListPage(){
    return(
        <Wrapper>
            <Header />
            <div className="nameHeader">
                🏥 현위치 주변 병원
            </div>
            <HospitalListComponentWrapper>
                <HospitalList />
                <HospitalList />
                <HospitalList />
                <HospitalList />
                <HospitalList />
                <HospitalList />
                <NavBar />
            </HospitalListComponentWrapper>
        </Wrapper>
    );
}

export default HospitalListPage;
