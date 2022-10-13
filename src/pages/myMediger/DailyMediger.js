// 마이페이지 > 일간 메디저 페이지
import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoIosAddCircle } from 'react-icons/io';
import styled from 'styled-components';
import Mediger from '../../components/Mediger';
import MypageLayout from '../../components/MypageLayout';
import { af } from 'date-fns/locale';
// import MonthlyMediger from './MonthlyMediger';

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

function DailyMediger() {
  const { selectDay } = useParams();
  const today = new Date(selectDay);
  console.log(today);

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
    // console.log(medigers);

    // const day = new Date(selectDay);
    // console.log(day);
  };

  useEffect(() => {
    getAPI();
    checkDate();
  }, [loading]);

  //   console.log(day);
  useEffect(() => {
    setMorn([]);
    setAfter([]);
    setEven([]);
    checkDate();
  }, []);

  const checkDate = () => {
    // console.log(today);
    for (let i = 0; i < medigers.length; i++) {
      const start = new Date(medigers[i].startDate);
      const last = new Date(medigers[i].lastDate);
      if (start <= today && last >= today) {
        // console.log(medigers[i].medigerDruglist.itemSeq);
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
    <MypageLayout>
      <DailyMedigerBox>
        <div className="TitleBox ContentBox">
          <p className="Title">
            일간 메디저 <br />[ {selectDay} ]
          </p>
          {/* <p className="Title">{date}</p> */}
          {/* <p className="Title">
              <MonthlyMediger date={date} />
            </p> */}
          {/* <div className="PlusBtn">
            <StyledLink to={`/myMediger/AddToMediger`}>
              <IoIosAddCircle />
            </StyledLink>
          </div> */}
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
              />
            ))}
          </div>
        </div>
      </DailyMedigerBox>
    </MypageLayout>
  );
}

export default DailyMediger;

// // 마이페이지 > 일간 메디저 페이지
// import React from 'react';
// import { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { IoIosAddCircle } from 'react-icons/io';
// import styled from 'styled-components';
// import Mediger from '../../components/Mediger';
// import MypageLayout from '../../components/MypageLayout';
// import { af } from 'date-fns/locale';
// // import MonthlyMediger from './MonthlyMediger';

// const DailyMedigerBox = styled.div`
//   flex-direction: column;

//   .ContentBox {
//     width: 85vw;
//     padding: 0 7.5vw;
//     margin: 4vh 0;
//   }

//   .TitleBox {
//     width: 85vw;
//     padding: 0 7.5vw;
//     margin-bottom: 8vh;

//     height: 40px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }

//   .Title {
//     font-size: 20px;
//     font-weight: 600;
//     color: #3c7466;
//   }

//   .PlusBtn {
//     height: 25px;
//     font-size: 25px;
//     color: #3c7466;
//   }

//   .SubTitle {
//     font-size: 16px;
//     color: #3c7466;
//     font-weight: 600;
//     margin: 0.5vw 0;
//   }

//   .MedicineBox {
//     width: 100%;
//     height: 15vh;
//     overflow: auto;

//     display: grid;
//     place-items: center;
//     grid-template-columns: 1fr 1fr;
//   }
// `;

// const StyledLink = styled(Link)`
//   color: #3c7466;
//   text-decoration: none;

//   &:focus,
//   &:hover,
//   &:visited,
//   &:link,
//   &:active {
//     text-decoration: none;
//     color: #3c7466;
//   }
// `;

// function DailyMediger() {
//   const { selectDay } = useParams();
//   //   console.log(typeof selectDay);
//   //   const day = new Date(selectDay);
//   //   console.log(day);

//   //   console.log(typeof day);
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

//     // const day = new Date(selectDay);
//     // console.log(day);
//   };

//   useEffect(() => {
//     getAPI();
//     checkDate();
//   }, [loading]);

//   //   console.log(day);
//   const [today, setToday] = useState();
//   const [num, setNum] = useState(1);
//   useEffect(() => {
//     const day = new Date(selectDay);
//     console.log(day);
//     // {
//     //   day == 'today' ? setToday(now) : setToday(day);
//     // }
//     setToday(day);
//     setMorn([]);
//     setAfter([]);
//     setEven([]);
//     checkDate();
//   }, []);

//   const checkDate = () => {
//     // console.log(today);
//     for (let i = 0; i < medigers.length; i++) {
//       const start = new Date(medigers[i].startDate);
//       const last = new Date(medigers[i].lastDate);
//       if (start <= today && last >= today) {
//         // console.log(medigers[i]);
//         // setDaily((daily) => [...daily, medigers[i]]);
//         if (medigers[i].when == 'Morn')
//           setMorn((morn) => [...morn, medigers[i]]);
//         else if (medigers[i].when == 'After')
//           setAfter((after) => [...after, medigers[i]]);
//         else setEven((even) => [...even, medigers[i]]);
//       }
//     }

//     console.log('아침');
//     console.log(morn);
//     console.log('점심');
//     console.log(after);
//     console.log('저녁');
//     console.log(even);
//   };

//   return (
//     <MypageLayout>
//       <DailyMedigerBox>
//         <div className="TitleBox ContentBox">
//           <p className="Title">
//             {selectDay} <br />
//             일간 메디저
//           </p>
//           {/* <p className="Title">{date}</p> */}
//           {/* <p className="Title">
//               <MonthlyMediger date={date} />
//             </p> */}
//           <div className="PlusBtn">
//             <StyledLink to={`/myMediger/AddToMediger`}>
//               <IoIosAddCircle />
//             </StyledLink>
//           </div>
//         </div>
//         <div className="ContentBox">
//           <p className="SubTitle">아침</p>
//           <div className="MedicineBox">
//             {morn.map((item) => (
//               <Mediger
//                 coverImg={item.itemImage}
//                 name={item.itemName}
//                 many={item.many}
//               />
//             ))}
//           </div>
//         </div>
//         <div className="ContentBox">
//           <p className="SubTitle">점심</p>
//           <div className="MedicineBox">
//             {after.map((item) => (
//               <Mediger
//                 coverImg={item.itemImage}
//                 name={item.itemName}
//                 many={item.many}
//               />
//             ))}
//           </div>
//         </div>
//         <div className="ContentBox">
//           <p className="SubTitle">저녁</p>
//           <div className="MedicineBox">
//             {even.map((item) => (
//               <Mediger
//                 coverImg={item.itemImage}
//                 name={item.itemName}
//                 many={item.many}
//               />
//             ))}
//           </div>
//         </div>
//       </DailyMedigerBox>
//     </MypageLayout>
//   );
// }

// export default DailyMediger;
