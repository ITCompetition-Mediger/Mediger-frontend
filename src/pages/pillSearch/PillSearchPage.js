import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import SearchBar from "../../components/SearchBar";
import PillSearchList from "./PillSearchList";
import { Mobile } from "../../components/ReactResponsive";

const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PillSearchResultBox = styled.div`
    color: #3C7466;
    padding-bottom: 1rem;
    padding-top: 1.5rem;
    width: 70%;
    height: 5vh;
`;

function PillSearchPage(){
    return(
        <Mobile>
            <Wrapper>
                <Header />
                <SearchBar />
                <PillSearchResultBox>
                    <div className="pillTotal">전체 1개</div>
                    <hr className="horizontal"></hr>
                </PillSearchResultBox>
                <PillSearchList />
                <NavBar />
            </Wrapper>
        </Mobile>
    );
}

export default PillSearchPage;