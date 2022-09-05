import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";

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
        <Wrapper>
            <Header />
            <DummyData>지도 api 표시</DummyData>
            <NavBar />
        </Wrapper>
    );
}

export default HospitalMapPage;