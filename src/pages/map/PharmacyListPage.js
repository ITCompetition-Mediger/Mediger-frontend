import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import PharmacyList from "./PharmacyList";
import { Mobile } from "../../components/ReactResponsive";

const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    .nameHeader {
        width: 50%;
        text-align: left;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
        font-size: 1.5rem;
        color: #3A6C60;
        font-weight: bold;
        padding-right: 5rem;
    }
`;

const PharmacyListComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;


function PharmacyListPage(){
    return(
        <Mobile>
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
        </Mobile>
    );
}

export default PharmacyListPage;