import React from "react";
import styled from "styled-components";

const TabletViewWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledModal = styled.div`
    background: white;
    padding: 3vh 3vw;
    border-radius: 4px;
    width: 25vw;
    text-align: center;
    position: relative;

    .modalContent {
        color: #3c7466;
        font-size: 1vw;
    }
`;


function TabletView(){
    return(
        <div>
            <TabletViewWrapper>
                <StyledModal>
                    <p className='modalContent'>
                    테블릿 환경은 지원하지 않습니다.
                    <br></br>
                    화면을 조정하거나 모바일로 접속해주세요.
                    </p>
                </StyledModal>
            </TabletViewWrapper>
        </div>
    );
}

export default TabletView;