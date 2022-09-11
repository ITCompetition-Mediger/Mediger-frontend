import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import HospitalList from "./HospitalList";
import { Mobile } from "../../components/ReactResponsive";

const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    .nameHeader {
        text-align: left;
        margin-top: 1.5rem;
        padding-left: 1.5rem;
        margin-bottom: 1.5rem;
        font-size: 1.5rem;
        color: #3A6C60;
        font-weight: bold;
        padding-right: 13rem;
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
        <Mobile>
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
        </Mobile>
    );
}

export default HospitalListPage;
