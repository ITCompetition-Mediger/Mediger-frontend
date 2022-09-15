import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosAddCircle } from 'react-icons/io';
import styled from 'styled-components';
import MedigerListWidget from '../../components/MedigerListWidget';
import DailyMedigerWidget from '../../components/DailyMedigerWidget';
import NavBar from '../../components/NavBar';

const MypageBox = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .HelloBox {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10vh 0;
    margin-top: 13vh;
  }

  .HelloIcon {
    font-size: 10vw;
    margin-right: 3vw;
  }

  .Hello {
    font-size: 5.5vw;
    font-weight: 600;
    color: #3c7466;
  }

  .TitleBox {
    width: 85vw;
    // height: 3.5vw;
    padding: 0 7.5vw;
    margin-top: 5vh;
  }

  .Title {
    font-size: 3.5vw;
    color: #3c7466;
    margin-bottom: 0;
  }

  hr {
    width: 85vw;
    background: #3c7466;
    height: 1px;
    border: 0;
    margin-top: 0.5vh;
  }

  .ContentBox {
    width: 85vw;
    padding: 0 7.5vw;

    display: flex;
    justify-content: center;
    align-items: center;
    // background-color: red;
  }

  .MedigerBox {
    width: 78vw;
    height: 16vh;
    margin-right: 2vw;

    display: flex;
    overflow: auto;
    // background-color: yellow;
  }

  .PlusBtn {
    font-size: 25px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: white;
    color: #3c7466;
  }
`;

function Mypage() {
  return (
    <MypageBox>
      <div className="HelloBox">
        <div className="HelloIcon">💊</div>
        <div className="Hello">
          잠깐,
          <br />
          User1님! 잊지 않으셨죠?
        </div>
      </div>

      <div className="DailyMedigerBox">
        <div className="TitleBox">
          <p className="Title">일간 메디저</p>
          <hr />
        </div>
        <div className="ContentBox">
          <DailyMedigerWidget />
        </div>
      </div>

      <div className="MedigerListBox">
        <div className="TitleBox">
          <p className="Title">메디저 리스트</p>
          <hr />
        </div>
        <div className="ContentBox">
          <div className="MedigerBox">
            <MedigerListWidget />
            <MedigerListWidget />
            <MedigerListWidget />
            <MedigerListWidget />
            <MedigerListWidget />
            <MedigerListWidget />
            <MedigerListWidget />
            <MedigerListWidget />
          </div>
          <div className="AddBtnBox">
            <Link to="/">
              <div className="PlusBtn">
                <IoIosAddCircle />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* <NavBar /> */}
    </MypageBox>
  );
}

export default Mypage;
