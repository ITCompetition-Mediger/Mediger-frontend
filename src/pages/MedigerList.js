import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 변수 이름은 무조건 대문자로 시작!
let Exh1 = styled.h1`
  font-size: 50px;
  color: red;
  margin: 0px;
  padding: 0px;
`;

const MedigerListAll = styled.div`
  background: yellow;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function MedigerList() {
  return (
    <MedigerListAll>
      <Exh1>Mediger List ~!</Exh1>
      <h2>plus</h2>
      <Link to="/"></Link>
    </MedigerListAll>
  );
}

export default MedigerList;
