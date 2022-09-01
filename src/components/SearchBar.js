import styled from "styled-components";
import React from "react";
import { HiSearch } from "react-icons/hi";
import Search from '../images/Search.png';

const SearchBarWrapper = styled.div`

    input{
        border-radius: 30px;
        border: 7px solid #3A6C60;
        font-size: 20px;
        width: 300px;
        height: 50px;
        left: 66px;
        top: 155px;
        color: #3A6C60;
        
        ::placeholder {
            color: #BBCDC7;
            font-size: 15px;
            padding-left: 25px;
        }
    }
`;



function SearchBar(){
    return(
        <SearchBarWrapper>
            <input
                placeholder="의약품명 및 증상 검색"
            />
        </SearchBarWrapper>
    );
}

export default SearchBar;