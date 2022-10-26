import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DailyMedigerWidget from '../components/DailyMedigerWidget';
import NavBar from '../components/NavBar';
import LogoImg from '../images/Logo1.png';
import { IoIosSearch } from 'react-icons/io';

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

  .Logo2 {
    width: 75vw;
    margin-top: 1vh;
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
  }

  .TitleBox {
    width: 85vw;
    padding: 0 7.5vw;
    margin-top: 5vh;
  }

  .ContentBox {
    width: 85vw;
    padding: 0 7.5vw;

    display: flex;
    justify-content: center;
    align-items: center;
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

const SearchBarWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 8vh;
  margin: 2vh 0;
  justify-content: center;
  align-items: center;

  .searchBarBox {
    width: 70vw;
    height: 5vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;

    padding: 1vw 4vw;
    border: 2vw solid #3c7466;
    border-radius: 8vw;

    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }

  .searchBarInfo {
    color: #3c7466;
    opacity: 0.6;
    font-size: 3.5vw;
  }

  .searchIcon {
    font-size: 5vw;
    opacity: 0.6;
  }
`;

function Home() {
  const today = new Date();

  return (
    <MainBox>
      <div>
        <div className="headerTitle">
          <div className="TitleContent">
            <p className="mainTitle">내가 먹는 약이 궁금하다면?</p>
            <img src={LogoImg} className="Logo2"></img>
          </div>
        </div>
      </div>
      <div className="MainContentBox">
        <StyledLink to={`/pillSearch`}>
          <SearchBarWrapper>
            <div className="searchBarBox">
              <p className="searchBarInfo">의약품 및 증상 검색하러 가기</p>
              <IoIosSearch className="searchIcon" />
            </div>
          </SearchBarWrapper>
        </StyledLink>
        <div className="DailyMedigerBox">
          <div className="TitleBox">
            <p className="Title">TODAY</p>
            <hr />
          </div>
          <StyledLink to={`/myMediger/MonthlyMediger`}>
            <div className="ContentBox">
              <DailyMedigerWidget day={today} />
            </div>
          </StyledLink>
        </div>
      </div>
      <NavBar />
    </MainBox>
  );
}

export default Home;
