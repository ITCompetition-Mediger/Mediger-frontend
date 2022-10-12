import styled from 'styled-components';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiSearch } from 'react-icons/hi';

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

function SearchBar() {
  //입력값 컨트롤러
  const [inputValue, setInputValue] = useState('');
  const inputHandler = (event) => {
    console.dir(event);
    setInputValue(event.currentTarget.value);
  };

  //select option 컨트롤러
  const optionChange = () => {
    let searchType = document.getElementsById('searchType');
    let type = searchType.options[searchType.selectedIndex].value;
    return type;
  };

  //검색 시 컨트롤러
  const onSubmit = (event) => {
    event.preventDefault();
    //추후 수정 필요
    if (inputValue == ' ') {
      document.getElementById('checkInputValue').innerHTML =
        '<b>▲검색어를 다시 확인해주세요.<b>';
      document.getElementById('checkInputValue').style.fontSize = '1rem';
      document.getElementById('checkInputValue').style.color = 'red';
      document.getElementById('checkInputValue').style.textAlign = 'center';
      document.getElementById('checkInputValue').style.paddingTop = '1rem';
    }

    /*
        else if(inputValue==null){
        document.getElementById('checkInputValue').innerHTML='<b>검색어를 다시 확인해주세요.<b>';
        document.getElementById('checkInputValue').style.color='red';
        }
        */

    //추후 삭제 필요
    else {
      alert('검색완료');
    }
  };

  return (
    <>
      <SearchBarWrapper>
        <div className="searchBarBox">
          <form className="searchTypeBox">
            <select
              id="searchType"
              className="searchType"
              onchange={optionChange}
            >
              <option value="pillName">의약품명</option>
              <option value="symptom">증상</option>
            </select>
          </form>
          <input
            placeholder="의약품명 및 증상 검색"
            value={inputValue}
            onChange={inputHandler}
            className="searchInput"
          />
          <span className="searchIcon">
            <StyledLink to={`/pillSearch`}>
              {/* home에서 검색페이지로 넘어가려면 onClick 이벤트 리스너 없어야 함 */}
              <HiSearch onsubmit={onSubmit} />
            </StyledLink>
          </span>
        </div>
      </SearchBarWrapper>
      <div>
        <div id="checkInputValue"></div>
      </div>
    </>
  );
}

export default SearchBar;

// import styled from "styled-components";
// import React, { useState } from "react";
// import { HiSearch } from "react-icons/hi";

// const SearchBarWrapper = styled.div`
//     padding-top: 1rem;
//     display: flex;
//     justify-content: center;

//     select{
//         border: 0.5rem solid #ECF2F0;
//         color: #3C7466;
//         background-color: #ECF2F0;
//         border-radius: 2rem;
//         -webkit-appearance: none;
//         -moz-appearance: none;
//         appearance: none;
//         margin-top: 1rem;
//         font-size: 0.7rem;
//         margin-right: 1rem;
//     }

//     input{
//         border-radius: 2rem;
//         border: 0.5rem solid #3A6C60;
//         font-size: 1.2rem;
//         height: 5vh;
//         color: #3A6C60;

//         ::placeholder {
//             color: #BBCDC7;
//             font-size: 1rem;
//             padding-left: 1rem;
//         }
//     }

//     svg {
//         padding-top: 1rem;
//         color: #3A6C60;
//         font-size: 2rem;
//         padding-left: 1rem;
//     }
// `;

// function SearchBar(){
//     const [inputValue, setInputValue] = useState("");

//     const inputHandler = (event) => {
//         setInputValue(event.currentTarget.value);
//     };

//     const goPillSearch = (event) => {
//         event.preventDefault();

//         //추후 수정 필요
//         if(inputValue==" "){
//         document.getElementById('checkInputValue').innerHTML='<b>▲검색어를 다시 확인해주세요.<b>';
//         document.getElementById('checkInputValue').style.fontSize='1rem';
//         document.getElementById('checkInputValue').style.color='red';
//         document.getElementById('checkInputValue').style.textAlign='center';
//         document.getElementById('checkInputValue').style.paddingTop='1rem';
//         }

//         /*
//         else if(inputValue==null){
//         document.getElementById('checkInputValue').innerHTML='<b>검색어를 다시 확인해주세요.<b>';
//         document.getElementById('checkInputValue').style.color='red';
//         }
//         */

//         //추후 삭제 필요
//         else{
//             alert('검색완료');
//         }
//     }

//     return(
//         <>
//             <SearchBarWrapper>
//                 <form className="searchTypeBox">
//                     <select name="searchType">
//                         <option value="pillName">의약품명</option>
//                         <option value="symptom">증상</option>
//                     </select>
//                 </form>
//                 <input
//                     placeholder="의약품명 및 증상 검색"
//                     value={inputValue}
//                     onChange={inputHandler}
//                 />
//                 <span className="searchIcon">
//                     <HiSearch
//                         onClick={goPillSearch}
//                     />
//                 </span>
//             </SearchBarWrapper>
//             <div>
//                 <div id="checkInputValue"></div>
//             </div>
//         </>
//     );
// }

// export default SearchBar;
