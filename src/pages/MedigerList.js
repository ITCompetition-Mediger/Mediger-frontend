import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Medicine from '../components/Medicine';

// 변수 이름은 무조건 대문자로 시작!
const All = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;

  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   justify-content: center;
`;

const Content = styled.div`
  width: 100vw;
  height: 65vh;
  padding: 5vh 0;
  //   background: red;

  display: flex;
  flex-direction: column;
  align-items: center;
  //   justify-content: center;
`;

const ListBox = styled.div`
  width: 80vw;
  //   background: blue;
  overflow: auto;
`;

const TitleBox = styled.div`
  width: 80vw;
  height: 10vh;
  //   background: blue;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;

  color: #3c7466;
`;

const PlusBtn = styled.div`
  //   width: 4.5vw;
  //   height: 4.5vw;
  width: 30px;
  height: 30px;
  //   font-size: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  background: #3c7466;
  color: white;
`;

function MedigerList() {
  return (
    <All>
      <Header></Header>
      <Content>
        <TitleBox>
          <Title>메디저 리스트</Title>
          <Link to="/">
            <PlusBtn></PlusBtn>
          </Link>
        </TitleBox>
        <ListBox>
          <Medicine />
          <Medicine />
          <Medicine />
          <Medicine />
          <Medicine />
          <Medicine />
          <Medicine />
          <Medicine />
        </ListBox>
      </Content>
    </All>
  );
}

export default MedigerList;

{
  /* <div class="list__box">
  <div class="title">
    <p>메디저 리스트</p>
    <button>+</button>
  </div>
  <div class="list">
    <medicine></medicine>
    <medicine></medicine>
    <medicine></medicine>
  </div>
</div>; */
}
