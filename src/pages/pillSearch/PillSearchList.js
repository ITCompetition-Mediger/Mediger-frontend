import React from "react"
import styled from "styled-components"
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const PillListWrapper = styled.div`
    background-color: #ECF2F0;
    width: 70%;
    height: 8.6vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-radius: 0.5rem;
    margin: 0.8rem;

    a {
        text-decoration: none;
    }

    .pillList {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-decoration: none;
        padding-top: 0.5rem;
    }

    .pillTitle {
        color: #3C7466;
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    .pillContent {
        color: #42514D;
        font-size: 0.5rem;
    }

    .scrap {
        color: #42514D;
        display: flex;
        align-items: center;
    }
`;

function PillSearchList(){
    return(
        <PillListWrapper>
            <div className="pillImage">이미지</div>
            <Link to={`/pillSearch/detail`}>
                <div className="pillList">
                    <div className="pillTitle">모노틴정</div>
                        <div className="pillContent">
                            <div className="pillCompany">업체명: 한미약품(주)</div>
                            <div className="pillCode">품목기준코드: 200003092</div>
                        </div>
                    </div>
            </Link>
            <div className="scrap">
                <AiOutlineStar />
            </div> 
        </PillListWrapper>
    );
}

export default PillSearchList;