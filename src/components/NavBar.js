import React from "react";
import styled from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
import { CgPill } from "react-icons/cg";
import { MdLocalPharmacy} from "react-icons/md";
import { FaHeartbeat} from "react-icons/fa";

const NavBarWrapper = styled.div`
    background-color: #3C7466;
    padding: 5px;
    text-align: center;
    width: 49vh;
    height: 3vw;
    display: flex;
    justify-content: space-between;
    justify-items: center;

    .item{
        list-style-type: none;

    }

    .itemList{
        font-size: 1.8rem;
        text-decoration: none;
        padding: 26px;
        color: white;
        display: inline;
        font-weight: bold;
        text-decoration-line: none;
    }
`;

function NavBar(){
    return(
        <NavBarWrapper>
            <ul className="item">
                <span className="itemList"><AiOutlineHome /></span>
                <li className="itemList"><CgPill/></li>
                <li className="itemList"><MdLocalPharmacy/></li>
                <li className="itemList"><FaHeartbeat/></li>
            </ul>
        </NavBarWrapper>
    );
}

export default NavBar;