import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import PharmacyList from "./PharmacyList";

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

const PharmacyListComponentWrapper = styled.div`
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


function PharmacyListPage(){
    return(
        <Wrapper>
            <Header />
            <div className="nameHeader">
                💊 현위치 주변 약국
            </div>
            <PharmacyListComponentWrapper>
                <PharmacyList />
                <PharmacyList />
                <PharmacyList />
                <PharmacyList />
                <PharmacyList />
                <PharmacyList />
                <NavBar />
            </PharmacyListComponentWrapper>
        </Wrapper>
    );
}

export default PharmacyListPage;