import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import SearchBar from "../../components/SearchBar";
import PillSearchList from "./PillSearchList";

const PillSearchWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .pillBox{
        color: #3C7466;
        padding-bottom: 10px;
    }
`;

function PillSearchPage(){
    return(
        <PillSearchWrapper>
            <Header />
            <SearchBar />
            <div>검색어를 다시 입력해주세요</div>
            <div className="pillBox">
                전체 1개 
                <hr className="horizontal"></hr>
            </div>
            <PillSearchList />
            <NavBar />
        </PillSearchWrapper>
    );
}

export default PillSearchPage;