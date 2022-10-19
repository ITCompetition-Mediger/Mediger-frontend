// 마이페이지 > 일간 메디저 페이지
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Mediger from '../../components/Mediger';
import MypageLayout from '../../components/MypageLayout';

const DailyMedigerBox = styled.div`
  flex-direction: column;

  .ContentBox {
    width: 85vw;
    padding: 0 7.5vw;
    margin: 4vh 0;
  }

  .TitleBox {
    width: 85vw;
    padding: 0 7.5vw;
    margin-bottom: 8vh;

    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .Title {
    font-size: 20px;
    font-weight: 600;
    color: #3c7466;
  }

  .PlusBtn {
    height: 25px;
    font-size: 25px;
    color: #3c7466;
  }

  .SubTitle {
    font-size: 16px;
    color: #3c7466;
    font-weight: 600;
    margin: 0.5vw 0;
  }

  .MedicineBox {
    width: 100%;
    height: 15vh;
    overflow: auto;

    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr;
  }
`;

function DailyMediger() {
  const { selectDay } = useParams();
  const today = new Date(selectDay);
  console.log(today);

  const [loading, setLoading] = useState(false);
  const [medigers, setMedigers] = useState([]);
  const [morn, setMorn] = useState([]);
  const [after, setAfter] = useState([]);
  const [even, setEven] = useState([]);

  const getAPI = async () => {
    const json = await (
      await fetch(`
            /home/mypage
            `)
    ).json();
    setLoading(true);
    setMedigers(json.daily);
  };

  useEffect(() => {
    getAPI();
    checkDate();
  }, [loading]);

  useEffect(() => {
    setMorn([]);
    setAfter([]);
    setEven([]);
    checkDate();
  }, []);

  const checkDate = () => {
    for (let i = 0; i < medigers.length; i++) {
      const start = new Date(medigers[i].startDate);
      const last = new Date(medigers[i].lastDate);
      if (start <= today && last >= today) {
        if (medigers[i].when == 'Morn')
          setMorn((morn) => [...morn, medigers[i]]);
        else if (medigers[i].when == 'After')
          setAfter((after) => [...after, medigers[i]]);
        else setEven((even) => [...even, medigers[i]]);
      }
    }
  };

  return (
    <MypageLayout>
      <DailyMedigerBox>
        <div className="TitleBox ContentBox">
          <p className="Title">
            일간 메디저 <br />[ {selectDay} ]
          </p>
        </div>
        <div className="ContentBox">
          <p className="SubTitle">아침</p>
          <div className="MedicineBox">
            {morn.map((item) => (
              <Mediger
                coverImg={item.itemImage}
                name={item.itemName}
                many={item.many}
                itemSeq={item.medigerDruglist.itemSeq}
                how={item.how}
              />
            ))}
          </div>
        </div>
        <div className="ContentBox">
          <p className="SubTitle">점심</p>
          <div className="MedicineBox">
            {after.map((item) => (
              <Mediger
                coverImg={item.itemImage}
                name={item.itemName}
                many={item.many}
                itemSeq={item.medigerDruglist.itemSeq}
                how={item.how}
              />
            ))}
          </div>
        </div>
        <div className="ContentBox">
          <p className="SubTitle">저녁</p>
          <div className="MedicineBox">
            {even.map((item) => (
              <Mediger
                coverImg={item.itemImage}
                name={item.itemName}
                many={item.many}
                itemSeq={item.medigerDruglist.itemSeq}
                how={item.how}
              />
            ))}
          </div>
        </div>
      </DailyMedigerBox>
    </MypageLayout>
  );
}

export default DailyMediger;