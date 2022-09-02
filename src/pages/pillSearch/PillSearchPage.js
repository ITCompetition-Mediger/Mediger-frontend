import React from "react";
import styled from "styled-components";
import { AiOutlineStar } from "react-icons/ai";
import Header from "../../components/Header";

const PillSearchWrapper = styled.div`
    justify-content: center;

    .pillBox{
        white-space: nowrap;
        color: #3C7466;
    }
`;

const PillListWrapper = styled.div`
    background-color: #ECF2F0;
    width: 321px;
    height: 86px;
    left: 27px;
    top: 266px;
    display: flex;
    border-radius: 5px;
    flex-direction: row;
    justify-content: space-around; 

    

    .pillList {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .pillTitle {
        color: #3C7466;
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .pillContent {
        color: #42514D;
        font-size: 7px;
    }

    .scrap {
        color: #42514D;
        display: flex;
        align-items: center;
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
            <PillListWrapper>
                <div className="img">
    
                </div>
                <div className="pillList">
                    <div className="pillTitle">모노틴정</div>
                        <div className="pillContent">
                            <div className="pillCompany">업체명: 한미약품(주)</div>
                            <div className="pillCode">품목기준코드: 200003092</div>
                        </div>
                </div>
                <div className="scrap">
                    <AiOutlineStar />
                </div> 
            </PillListWrapper>
        </PillSearchWrapper>
    );
}

export default PillSearch;