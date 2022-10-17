// 마이페이지 메인에 나오는 일간 메디저 위젯
import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import styled from 'styled-components';
import DailyMedigerIconWidget from '../components/DailyMedigerIconWidget';

const DailyWidget = styled.div`
  display: flex;

  .TimeBox {
    width: 25vw;
    height: 17vh;
    border-radius: 2vw;
    margin: 2vw;
    padding-bottom: 1vh;
    background-color: #ecf2f0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
  }

  .TimeTitle {
    font-size: 3vw;
    color: #3c7466;
    margin: 2vw 0;
  }

  .MedicineBox {
    width: 23vw;
    height: 13vh;

    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr;

    overflow: auto;
  }
`;

function DailyMedigerWidget({ day }) {
  const today = day;
  // console.log('위젯업데이트: ' + today);
  // api 저장
  const [loading, setLoading] = useState(false);
  const [medigers, setMedigers] = useState([]);
  //   const [daily, setDaily] = useState([]);
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
    console.log(json);
    checkDate();
  };

  useEffect(() => {
    getAPI();
    // checkDate();
  }, [loading]);

  useEffect(() => {
    setMorn([]);
    setAfter([]);
    setEven([]);
    checkDate();
  }, [day]);

  //   console.log(today);

  const checkDate = () => {
    // console.log('checkDate 실행');
    // setToday(day);
    // console.log(today);
    for (let i = 0; i < medigers.length; i++) {
      const start = new Date(medigers[i].startDate);
      const last = new Date(medigers[i].lastDate);
      if (start <= today && last >= today) {
        // console.log(medigers[i]);
        // console.log(today);
        // setDaily((daily) => [...daily, medigers[i]]);
        if (medigers[i].when == 'Morn')
          setMorn((morn) => [...morn, medigers[i]]);
        else if (medigers[i].when == 'After')
          setAfter((after) => [...after, medigers[i]]);
        else setEven((even) => [...even, medigers[i]]);
      }
    }
  };

  return (
    <DailyWidget>
      <div className="TimeBox">
        <div className="TimeTitle">아침</div>
        <div className="MedicineBox">
          {morn.map((item) => (
            <DailyMedigerIconWidget coverImg={item.itemImage} />
          ))}
        </div>
      </div>
      <div className="TimeBox">
        <div className="TimeTitle">점심</div>
        <div className="MedicineBox">
          {after.map((item) => (
            <DailyMedigerIconWidget coverImg={item.itemImage} />
          ))}
        </div>
      </div>
      <div className="TimeBox">
        <div className="TimeTitle">저녁</div>
        <div className="MedicineBox">
          {even.map((item) => (
            <DailyMedigerIconWidget coverImg={item.itemImage} />
          ))}
        </div>
      </div>
    </DailyWidget>
  );
}

export default DailyMedigerWidget;

// // 마이페이지 메인에 나오는 일간 메디저 위젯
// import React from 'react';
// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
// import styled from 'styled-components';
// import DailyMedigerIconWidget from '../components/DailyMedigerIconWidget';

// const DailyWidget = styled.div`
//   display: flex;

//   .TimeBox {
//     width: 25vw;
//     height: 17vh;
//     border-radius: 2vw;
//     margin: 2vw;
//     padding-bottom: 1vh;
//     background-color: #ecf2f0;

//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;

//     /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
//   }

//   .TimeTitle {
//     font-size: 3vw;
//     color: #3c7466;
//     margin: 2vw 0;
//   }

//   .MedicineBox {
//     width: 23vw;
//     height: 13vh;

//     display: grid;
//     place-items: center;
//     grid-template-columns: 1fr 1fr;

//     overflow: auto;
//   }
// `;

// function DailyMedigerWidget({ day }) {
//   //   const [today, setToday] = useState();
//   console.log('날짜2: ' + day);
//   // api 저장
//   const [loading, setLoading] = useState(false);
//   const [medigers, setMedigers] = useState([]);
//   //   const [daily, setDaily] = useState([]);
//   const [morn, setMorn] = useState([]);
//   const [after, setAfter] = useState([]);
//   const [even, setEven] = useState([]);

//   const getAPI = async () => {
//     const json = await (
//       await fetch(`
//             /home/mypage
//             `)
//     ).json();
//     setLoading(true);
//     setMedigers(json.daily);
//     // console.log(medigers);

//     // setMorn([]);
//     // setAfter([]);
//     // setEven([]);
//     // setToday(day);
//     // checkDate();
//   };

//   useEffect(() => {
//     getAPI();
//     // checkDate();
//   }, [loading]);

//   // 날짜로 추려내기
//   // 후에 props로 들어오는 날짜로 수정
//   //   const today = day;
//   //   console.log(today);

//   //   console.log(day);
//   const [today, setToday] = useState();
//   //   setToday(day);
//   useEffect(() => {
//     // {
//     //   day == 'today' ? setToday(now) : setToday(day);
//     // }
//     setMorn([]);
//     setAfter([]);
//     setEven([]);
//     setToday(day);
//     checkDate();
//   }, [day]);

//   //   console.log(today);

//   const checkDate = () => {
//     // setToday(day);
//     // console.log(today);
//     for (let i = 0; i < medigers.length; i++) {
//       const start = new Date(medigers[i].startDate);
//       const last = new Date(medigers[i].lastDate);
//       if (start <= today && last >= today) {
//         // console.log(medigers[i]);
//         console.log(today);
//         // setDaily((daily) => [...daily, medigers[i]]);
//         if (medigers[i].time == 'Morn')
//           setMorn((morn) => [...morn, medigers[i]]);
//         else if (medigers[i].time == 'After')
//           setAfter((after) => [...after, medigers[i]]);
//         else setEven((even) => [...even, medigers[i]]);
//       }
//     }
//     // console.log(daily);
//     // console.log('==아침==');
//     // console.log(morn);
//     // console.log('==점심==');
//     // console.log(after);
//     // console.log('==저녁==');
//     // console.log(even);
//   };

//   return (
//     <DailyWidget>
//       <div className="TimeBox">
//         <div className="TimeTitle">아침</div>
//         <div className="MedicineBox">
//           {morn.map((item) => (
//             <DailyMedigerIconWidget coverImg={item.itemImage} />
//           ))}
//         </div>
//       </div>
//       <div className="TimeBox">
//         <div className="TimeTitle">점심</div>
//         <div className="MedicineBox">
//           {after.map((item) => (
//             <DailyMedigerIconWidget coverImg={item.itemImage} />
//           ))}
//         </div>
//       </div>
//       <div className="TimeBox">
//         <div className="TimeTitle">저녁</div>
//         <div className="MedicineBox">
//           {even.map((item) => (
//             <DailyMedigerIconWidget coverImg={item.itemImage} />
//           ))}
//         </div>
//       </div>
//     </DailyWidget>
//   );
// }

// export default DailyMedigerWidget;
