import React, {useState} from "react";
import styled from "styled-components";
import { AiOutlineStar } from "react-icons/ai";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";

const PillSearchPlusWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PillContentHeaderWrapper = styled.div`
    text-align: center;

    .pillHeader{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding-top: 1.2rem;
        padding-bottom: 1.2rem;
        width: 100vw;
        height: 5vh;
        width: 40vw;
        height: 3vh;
    }

    .pillTitle{
        color: #3C7466;
        font-weight: bold;
        font-size: 1.5rem;
    }

    .pillScrap{
        color: #3C7466;
        font-size: 2rem;
    }

    .pillImage {
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
    }
`;

const PillContentListWrapper = styled.div`
    text-align: left;
    padding-right: 15%;

    .pillContentList{
        margin-bottom: 2.5rem;
    }

    .contentTitle {
        color: #3C7466;
        font-weight: bold;
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }

    .contents{
        color: #42514D;
        font-size: 1rem;
    }
`;

function PillSearchPlusPage(){
    return(
        <PillSearchPlusWrapper>
            <Header />
            <PillContentHeaderWrapper>
            <div className="pillHeader">
                <div className="pillTitle">모노틴정</div>
                <div className="pillScrap">
                <AiOutlineStar/>
                </div>
            </div>
            <div className="pillImage">
            </div>
            </PillContentHeaderWrapper>
            <PillContentListWrapper>
                <div className="pillContentList">
                    <div className="contentTitle">효능타이틀</div>
                    <div className="contents">효능내용</div>
                </div>
                <div className="pillContentList">
                    <div className="contentTitle">사용법타이틀</div>
                    <div className="contents">사용법내용</div>
                </div>
                <div className="pillContentList">
                    <div className="contentTitle">경고타이틀</div>
                    <div className="contents">경고내용</div>
                </div>
                <div className="pillContentList">
                    <div className="contentTitle">주의사항타이틀</div>
                    <div className="contents">주의사항내용</div>
                </div>
                <div className="pillContentList">
                    <div className="contentTitle">상호작용타이틀</div>
                    <div className="contents">상호작용내용</div>
                </div>
            </PillContentListWrapper>
            <NavBar />
        </PillSearchPlusWrapper>
    );
}

export default PillSearchPlusPage;