import styled from "styled-components";
import React from "react";
import { HiSearch } from "react-icons/hi";

const SearchBarWrapper = styled.div`

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

    .searchIcon {
        color: #3A6C60;
        font-size: 35px;
        padding: 30px;
    }
`;



function SearchBar(){
    return(
        <SearchBarWrapper>
            <input
                placeholder="의약품명 및 증상 검색"
            />
            <span className="searchIcon">
                <HiSearch /> 
            </span>
        </SearchBarWrapper>
    );
}

export default SearchBar;