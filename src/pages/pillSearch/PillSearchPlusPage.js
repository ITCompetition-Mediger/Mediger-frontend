import React, {useState} from "react";
import styled from "styled-components";
import { AiOutlineStar } from "react-icons/ai";
import Header from "../../components/Header";
import pillImage from '/Users/yujia/메디저/Mediger-frontend/src/images/pillImage.png';
import NavBar from "../../components/NavBar";

const PillSearchPlusWrapper = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    .pillHeader{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding-top: 20px;
        padding-bottom: 20px;
        width: 100vw;
        height: 5vh;
        width: 40vw;
        height: 3vh;
    }

    .pillTitle{
        color: #3C7466;
        font-weight: bold;
        font-size: 25px;
    }

    .pillScrap{
        color: #3C7466;
        font-size: 25px;
    }

    .pillImage {
        padding-top: 30px;
        padding-bottom: 30px;
    }

    .pillContentList{
        margin-bottom: 30px;
    }

    .contentTitle {
        color: #3C7466;
        font-weight: bold;
        font-size: 18px;
        margin-bottom: 5px;
    }

    .contents{
        color: #42514D;
        font-size: 15px;
    }
`;

function PillSearchPlusPage(){
    return(
        <PillSearchPlusWrapper>
            <Header />
            <div className="pillHeader">
                <div className="pillTitle">모노틴정</div>
                <div className="pillScrap">
                <AiOutlineStar/>
                </div>
            </div>
            <div className="pillImage">
                <img src={pillImage} alt="pillImage"></img>
            </div>
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
            <NavBar />
        </PillSearchPlusWrapper>
    );
}

export default PillSearchPlusPage;