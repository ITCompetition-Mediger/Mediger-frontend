import styled from 'styled-components';

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
  padding: 5vh 5vw;
  border-radius: 4px;
  width: 70vw;
  text-align: center;
  position: relative;

  .modalContent {
    color: #3c7466;
    font-size: 4.5vw;
  }

  .modalBtn {
    color: #3c7466;
    background-color: #ecf2f0;
    border: none;
    border-radius: 5vw;
    width: 15vw;
    height: 3vh;
    margin-top: 3vh;
  }

  .ok {
    font-size: 3vw;
  }
`;

export const StyledMedigerListModal = styled.div`
  background: white;
  padding: 2vh 3vw;
  border-radius: 4px;
  width: 70vw;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .modalContent {
    color: #3c7466;
    font-size: 4.5vw;
  }

  .modalBtn {
    color: #3c7466;
    background-color: #ecf2f0;
    border: none;
    border-radius: 5vw;
    width: 15vw;
    height: 3vh;
    margin-top: 3vh;
  }

  .ok {
    font-size: 2.5vw;
  }
`;

// import styled from 'styled-components';

// export const ModalWrapper = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.5);
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// export const StyledModal = styled.div`
//   background: white;
//   padding: 24px 16px;
//   border-radius: 4px;
//   width: 320px;
//   text-align: center;
//   position: relative;

//   .modalContent {
//     color: #3a6c60;
//     font-size: 18px;
//     font-weight: larger;
//   }

//   .modalBtn {
//     color: #3a6c60;
//     background-color: #ecf2f0;
//     border: none;
//     border-radius: 10px;
//     width: 46px;
//     height: 21px;
//   }
// `;
