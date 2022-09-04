import styled from "styled-components";
import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";

const SearchBarWrapper = styled.div`
    padding-top: 10px;
    display: flex;
    justify-content: center;

    input{
        border-radius: 30px;
        border: 7px solid #3A6C60;
        font-size: 20px;
        width: 20vw;
        height: 5vh;
        color: #3A6C60;
        
        ::placeholder {
            color: #BBCDC7;
            font-size: 15px;
            padding-left: 25px;
        }
    }

    svg {
        padding-top: 15px;
        color: #3A6C60;
        font-size: 35px;
    }
`;

function SearchBar(){
    const [inputValue, setInputValue] = useState("");

    const inputHandler = (event) => {
        setInputValue(event.currentTarget.value);
    };

    const goPillSearch = (event) => {
        event.preventDefault();

        //추후 수정 필요
        if(inputValue==" "){
        document.getElementById('checkInputValue').innerHTML='<b>▲검색어를 다시 확인해주세요.<b>';
        document.getElementById('checkInputValue').style.fontSize='15px';
        document.getElementById('checkInputValue').style.color='red';
        document.getElementById('checkInputValue').style.textAlign='center';
        document.getElementById('checkInputValue').style.paddingTop='10px';
        }

        /*
        else if(inputValue==null){
        document.getElementById('checkInputValue').innerHTML='<b>검색어를 다시 확인해주세요.<b>';
        document.getElementById('checkInputValue').style.color='red';
        }
        */

        //추후 삭제 필요
        else{
            alert('검색완료');
        }
    }

    return(
        <>
            <SearchBarWrapper>
                <input
                    placeholder="의약품명 및 증상 검색"
                    value={inputValue}
                    onChange={inputHandler}
                />
                <span className="searchIcon">
                    <HiSearch
                        onClick={goPillSearch}
                    /> 
                </span>
            </SearchBarWrapper>
            <div>
                <div id="checkInputValue"></div>
            </div>
        </>
    );
}

export default SearchBar;