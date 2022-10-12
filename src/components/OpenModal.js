import { ModalWrapper, StyledModal } from './StyledModal';

export const OpenModal = () => {
  <ModalWrapper>
    <StyledModal>
      <p className="modalContent">메디저 리스트에 추가되었습니다!</p>
      <button className="modalBtn">
        <p class="ok">확인</p>
      </button>
    </StyledModal>
  </ModalWrapper>;
};
