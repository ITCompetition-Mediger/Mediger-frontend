import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosAddCircle } from 'react-icons/io';
import styled from 'styled-components';
import Medicine from '../../components/Medicine';
import { Desktop, Mobile } from '../../components/ReactResponsive';
import Layout from '../../components/Layout';
import DesktopView from '../../components/DesktopView';

const All = styled.div`
  .Content {
    width: 100vw;
    height: 65vh;
    padding: 5vh 0;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .ListBox {
    width: 80vw;
    overflow: auto;
  }

  .TitleBox {
    width: 80vw;
    height: 10vh;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .Title {
    font-size: 20px;
    font-weight: bold;

    color: #3c7466;
  }

  .PlusBtn {
    font-size: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: white;
    color: #3c7466;
  }
`;

function MedigerList() {
  return (
    <div>
      <Mobile>
        <Layout>
          <All>
            <div className="Content">
              <div className="TitleBox">
                <p className="Title">메디저 리스트</p>
                <Link to={`/pillSearch`}>
                  <div className="PlusBtn">
                    <IoIosAddCircle />
                  </div>
                </Link>
              </div>
              <div className="ListBox">
                <Medicine />
                <Medicine />
                <Medicine />
                <Medicine />
                <Medicine />
                <Medicine />
              </div>
            </div>
          </All>
        </Layout>
      </Mobile>
      <Desktop>
        <DesktopView />
      </Desktop>
    </div>
  );
}

export default MedigerList;
