import React from "react";
import styled from "styled-components";
import { AiOutlineStar } from "react-icons/ai";
import pillImage from '../../../src/images/Dummy3'

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

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;

    .modal {
        background: white;
        padding: 24px 16px;
        border-radius: 4px;
        width: 320px;
        text-align: center;
    }

    .modalContent {
        color: #3A6C60;
        font-size: 18px;
        font-weight: larger;
    }

    .modalBtn {
        color: #3A6C60;
        background-color: #ECF2F0;
        border: none;
        border-radius: 10px;
        width: 46px;
        height: 21px;
    }
`;

function PillSearchPlus(){
    return(
        <PillSearchPlusWrapper>
            <ModalWrapper>
                <div className="modal">
                    <p className="modalContent">메디저 리스트에 추가되었습니다!</p>
                    <button className="modalBtn">확인</button>
                </div>
            </ModalWrapper>
            <div className="Header">
                <div className="pillTitle">모노틴정</div>
                <div className="pillScrap"><AiOutlineStar /></div>
            </div>
            <div className="pillImage">
                <img src="../../images/pillImage.png" alt="pillImage"></img>
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
        </PillSearchPlusWrapper>
    );
}

export default PillSearchPlus;