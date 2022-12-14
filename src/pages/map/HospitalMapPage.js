import React from "react";
import styled from "styled-components";
import DesktopView from "../../components/DesktopView";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import { Desktop, Mobile, Tablet } from "../../components/ReactResponsive";
import TabletView from '../../components/TabletView';

const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DummyData = styled.div`
    width: 375px;
    height: 605px;
`;

function HospitalMapPage(){
    return(
        <div>
            <Mobile>
            <Wrapper>
                <Header />
                <DummyData>지도 api 표시</DummyData>
                <NavBar />
            </Wrapper>
            </Mobile>
            <Desktop>
                <DesktopView />
            </Desktop>
            <Tablet>
                <TabletView />
            </Tablet>
        </div>
    );
}

export default HospitalMapPage;