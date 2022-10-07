import React from 'react';
import styled from 'styled-components';
import { AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PillListWrapper = styled.div`
  background-color: #ecf2f0;
  width: 75vw;
  padding: 2.2vh 5vw;
  margin: 0.5vh 0;
  border-radius: 2vw;

  display: flex;
  justify-content: space-between;

  p {
    margin: 0;
  }

  .PillBox {
    display: flex;
  }

  .pillImage {
    width: 16vw;
    height: 16vw;
    border-radius: 50%;
    background-color: white;
    margin-right: 4vw;
  }

  .pillList {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    width: 49vw;
    /* background-color: aquamarine; */
  }

  .pillName {
    font-size: 4.5vw;
    color: #3c7466;
    font-weight: bolder;
    margin-bottom: 1vw;
  }

  .pillCompany,
  .pillCode {
    font-size: 3vw;
    color: #3c7466;
  }

  .scrap {
    font-size: 5vw;
    color: #97a9a4;
    display: flex;
    align-items: center;
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

function PillSearchList({itemImage, itemName, entpName, itemSeq}) {
  return (
    <PillListWrapper>
      <StyledLink to={`/pillSearch/detail`}>
        <div className="PillBox">
          <div className="pillImage">{itemImage}</div>
          <div className="pillList">
            <div className="pillTitle">
              <p className="pillName">{itemName}</p>
            </div>
            <div className="pillContent">
              <p className="pillCompany">{entpName}</p>
              <p className="pillCode">{itemSeq}</p>
            </div>
          </div>
        </div>
      </StyledLink>
      <div className="scrap">
        <AiOutlineStar />
      </div>
    </PillListWrapper>
  );
}

PillSearchList.ProtoTypes ={
    itemImage: PropTypes.string.isRequired,
    itemName: PropTypes.string.isRequired,
    entpName: PropTypes.string.isRequired,
    itemSeq: PropTypes.string.isRequired,
}

export default PillSearchList;