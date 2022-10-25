import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosAddCircle } from 'react-icons/io';
import styled from 'styled-components';
import Medicine from '../../components/Medicine';
import { Desktop, Mobile, Tablet } from '../../components/ReactResponsive';
import Layout from '../../components/Layout';
import DesktopView from '../../components/DesktopView';
import TabletView from '../../components/TabletView';

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
  const [medigerLists, setMedigerLists] = useState([]);
  const getAPI = async () => {
    const json = await (
      await fetch(`
            /home/mypage
            `)
    ).json();
    setMedigerLists(json.scrapList);
    // console.log(medigerLists);
  };

  useEffect(() => {
    getAPI();
  }, []);

  // console.log(medigerLists);

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
                {medigerLists.map((item) => (
                  <Medicine
                    coverImg={item.itemImage}
                    name={item.itemName}
                    entpName={item.entpName}
                    seq={item.itemSeq}
                  />
                ))}
              </div>
            </div>
          </All>
        </Layout>
      </Mobile>
      <Desktop>
        <DesktopView />
      </Desktop>
      <Tablet>
        <TabletView />
      </Tablet>
      <Tablet>
        <TabletView />
      </Tablet>
    </div>
  );
}

export default MedigerList;
