import styled from "styled-components";

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledModal = styled.div`
        background: white;
        padding: 24px 16px;
        border-radius: 4px;
        width: 320px;
        text-align: center;
        position: relative;

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