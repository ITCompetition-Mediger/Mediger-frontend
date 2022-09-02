import React from "react";
import styled from "styled-components";
import { AiOutlineStar } from "react-icons/ai";

const PillSearchPlusWrapper = styled.div`
    align-items: center;
    
    .Header{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
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

function PillSearchPlus(){
    return(
        <PillSearchPlusWrapper>
            <div className="Header">
                <div className="pillTitle">모노틴정</div>
                <div className="pillScrap"><AiOutlineStar /></div>
            </div>
            <div className="pillImage">이미지</div>
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
        </PillSearchPlusWrapper>
    );
}

export default PillSearchPlus;