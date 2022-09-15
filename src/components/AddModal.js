import React from 'react';
import styled from 'styled-components';

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
`;

const StyledModal = styled.div`
  background: white;
  padding: 24px 16px;
  border-radius: 4px;
  width: 320px;
  text-align: center;
  position: relative;

  .modalContent {
    color: #3a6c60;
    font-size: 18px;
    font-weight: larger;
  }

  .modalBtn {
    color: #3a6c60;
    background-color: #ecf2f0;
    border: none;
    border-radius: 10px;
    width: 46px;
    height: 21px;
  }
`;

function AddModal() {
  return (
    <ModalWrapper>
      <StyledModal>
        <p className="modalContent">메디저 리스트에 추가되었습니다!</p>
        <button className="modalBtn">확인</button>
      </StyledModal>
    </ModalWrapper>
  );
}

export default AddModal;
