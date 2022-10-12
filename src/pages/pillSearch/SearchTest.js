import styled from 'styled-components';
// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiSearch } from 'react-icons/hi';
import React, { useEffect, useState } from 'react';

const SearchBarWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 8vh;
  margin: 2vh 0;
  justify-content: center;
  align-items: center;
  /* background-color: red; */

  .searchTypeBox {
    display: flex;
    justify-content: center;
  }

  .searchType {
    border-radius: 2vw;
    padding: 1vw;
    margin-right: 2vw;
    text-align: center;
    background-color: white;
    color: #3c7466;
    font-size: 3vw;
    border: none;

    &:focus {
      outline: none;
    }
  }

  .searchBarBox {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: white;

    padding: 1vw 4vw;
    border: 2vw solid #3c7466;
    border-radius: 8vw;

    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }

  .searchInput {
    border: none;
    padding: 1vw;
    margin-right: 2vw;
    font-size: 3.5vw;

    &:focus {
      outline: none;
    }
  }

  .searchIcon {
    font-size: 5vw;
    color: #3c7466;
  }

  button {
    border: none;
    border-radius: 2vw;
    font-size: 2vw;
    padding: 0.2vw 1.3vw;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #3c7466;
    background-color: #ecf2f0;

    &:hover {
      color: white;
      background-color: #3c7466;
    }
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

function SearchTest() {
  // 입력한 값
  let [inputValue, setInputValue] = useState('');
  let [selected, setSelected] = useState('의약품명');

  const search = async () => {
    const response = await fetch(
      `http://localhost:8080/home/search?type=${selected}&keyword=${inputValue}`,
    );
    const json = await response.json();
    console.log(json);
  };

  const selectOnChange = (event) => {
    setSelected(event.target.value);
  };

  const onChange = (event) => {
    // 실시간으로 받아서 저장 (실시간으로 정보를 받아서 저장해야 전송때 잘 보내짐)
    setInputValue(event.target.value);
  };

  // 검색 후 제출시
  const onSubmit = (event) => {
    event.preventDefault();
    // enter or submit 하면 콘솔에 검색한 내용 찍힘
    // console.log(inputValue);
    search();
  };
  return (
    <>
      <SearchBarWrapper>
        <div className="searchBarBox">
          <form onSubmit={onSubmit} className="searchTypeBox">
            <select
              onChange={selectOnChange}
              value={selected}
              className="searchType"
            >
              <option value="의약품명">의약품명</option>
              <option value="증상">증상</option>
            </select>
            <input
              placeholder="의약품명 및 증상 검색"
              onChange={onChange}
              type="text"
              value={inputValue}
              className="searchInput"
            />
            <button>검색</button>
          </form>
        </div>
      </SearchBarWrapper>
      <div>
        <div id="checkInputValue"></div>
      </div>
    </>
  );
}

export default SearchTest;

// import React from 'react';
// import { useEffect, useState } from 'react';

// function SearchTest() {
//   // 입력한 값
//   let [inputValue, setInputValue] = useState('');

//   const search = async () => {
//     const response = await fetch(`
//     http://localhost:8080/home/search?type=의약품명&keyword=${inputValue}
//         `);
//     const json = await response.json();
//     console.log(json);
//   };

//   const onChange = (event) => {
//     // 실시간으로 받아서 저장 (실시간으로 정보를 받아서 저장해야 전송때 잘 보내짐)
//     setInputValue(event.target.value);
//   };

//   // 검색 후 제출시
//   const onSubmit = (event) => {
//     event.preventDefault();
//     // enter or submit 하면 콘솔에 검색한 내용 찍힘
//     // console.log(inputValue);
//     search();
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} type="text" value={inputValue}></input>
//         <button>검색</button>
//       </form>
//     </div>
//   );
// }

// export default SearchTest;
