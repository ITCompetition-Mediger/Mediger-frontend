import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import PillSearchList from "./PillSearchList";

const PillSearchWrapper = styled.div`
    .pillBox{
        white-space: nowrap;
        color: #3C7466;
    }
`;

function PillSearch(){
    return(
        <PillSearchWrapper>
            <Header />
            <div className="pillBox">
                전체 1개 
                <hr className="horizontal"></hr>
            </div>
            <PillSearchList />
        </PillSearchWrapper>
    );
}

export default PillSearch;