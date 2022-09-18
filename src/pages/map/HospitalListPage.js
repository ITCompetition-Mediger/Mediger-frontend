import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import HospitalList from "./HospitalList";
import { Desktop, Mobile } from "../../components/ReactResponsive";
import DesktopView from "../../components/DesktopView";

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

const HospitalListComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;


function HospitalListPage(){
    return(
        <div>
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
        <Desktop>
            <DesktopView />
        </Desktop>
        </div>
    );
}

export default HospitalListPage;
