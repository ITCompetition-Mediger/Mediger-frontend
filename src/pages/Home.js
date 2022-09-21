import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DailyMedigerWidget from '../components/DailyMedigerWidget';
import SearchBar from '../components/SearchBar';
import NavBar from '../components/NavBar';

const MainBox = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;

  p {
    margin: 0;
  }

  .headerTitle {
    width: 100%;
    height: 45vh;
    background-color: #3c7466;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }

  .TitleContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */

    margin-bottom: 10vh;

    color: white;
  }

  .Title {
    font-size: 4vw;
  }

  .headerSubContents {
    font-size: 15vw;
    font-weight: bolder;
  }

  .MainContentBox {
    height: 43vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    /* background-color: red; */
  }

  .TitleBox {
    width: 85vw;
    // height: 3.5vw;
    padding: 0 7.5vw;
    margin-top: 5vh;
  }

  .ContentBox {
    width: 85vw;
    padding: 0 7.5vw;

    display: flex;
    justify-content: center;
    align-items: center;
    // background-color: red;
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
`;

const StyledLink = styled(Link)`
  color: #3c7466;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: #3c7466;
  }
`;

function Home() {
  return (
    <MainBox>
      <StyledLink to="/">
        <div className="headerTitle">
          <div className="TitleContent">
            <p className="mainTitle">내가 먹는 약이 궁금하다면?</p>
            <div className="headerSubContents">MEDIGER</div>
          </div>
        </div>
      </StyledLink>
      <div className="MainContentBox">
        <SearchBar />
        <div className="DailyMedigerBox">
          <div className="TitleBox">
            <p className="Title">TODAY</p>
            <hr />
          </div>
          <StyledLink to={`/myMediger/MonthlyMediger`}>
            <div className="ContentBox">
              <DailyMedigerWidget />
            </div>
          </StyledLink>
        </div>
      </div>
      <NavBar />
    </MainBox>
  );
}

export default Home;
