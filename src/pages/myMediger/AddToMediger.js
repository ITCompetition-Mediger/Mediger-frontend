import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { IoIosAddCircle } from 'react-icons/io';
import styled from 'styled-components';
import MypageLayout from '../../components/MypageLayout';
import PillSearchList from '../pillSearch/PillSearchList';
import { StyledMedigerListModal } from '../../components/StyledModal';

const AddToMedigerBox = styled.form`
  display: flex;
  flex-direction: column;

  .ContentBox {
    margin: 3vh 0;
  }

  .TitleBox {
    width: 85vw;
    padding: 0 7.5vw;
    margin-bottom: 2vh;
  }

  .TitleBoxContent {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .MedicineToTakeBox {
    width: 85vw;
    padding: 0 7.5vw;
    // background-color: yellow;
  }

  .HowToTakeMedicineBox {
    width: 85vw;
    padding: 0 7.5vw;
    // background-color: green;
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

  button {
    border: none;
    background-color: white;
  }

  hr {
    width: 85vw;
    background: #3c7466;
    height: 1px;
    border: 0;
  }

  .SubTitle {
    font-size: 16px;
    color: #3c7466;
    font-weight: 600;
    margin: 1vh 0;
  }

  .AddBox {
    width: 85vw;
    /* height: 12vh; */
    margin-top: 0.7vh;
    border-radius: 10px;
    /* background-color: red; */

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .AddBtn {
    height: 20px;
    font-size: 20px;
    color: #3c7466;
  }

  .WayBox {
    display: flex;
    align-items: center;
    margin-bottom: 2vw;
  }

  .CalenderContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1vw 0;

    &:last-child {
      margin-left: 5vw;
    }
  }

  .SubText {
    font-size: 12px;
    color: #42514d;
  }

  .TimingSelectBox,
  .TimeSelectBox,
  .CountBox {
    border-radius: 2vw;
    padding: 1vw;
    margin-right: 3vw;
    text-align: center;
    background-color: #ecf2f0;
    color: #42514d;
    font-size: 13px;
    border: none;
  }

  .CountBox {
    margin-top: 0.4vh;
    width: 20vw;
  }

  //   캘린더 관련
  .react-datepicker-wrapper {
    width: 27vw;
  }
`;

const MyDatePicker = styled(DatePicker)`
  width: 22vw;
  margin: 0;
  padding: 1.2vw;
  border: none;
  border-radius: 2vw;
  text-align: center;
  background-color: #ecf2f0;
  color: #42514d;
  font-size: 13px;

  &:focus {
    border-color: #3c7466;
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

function AddToMediger() {
  const [isSubmit, setIsSubmit] = useState(false);
  // 사용자가 작성한 내용
  const [postMediger, setPostMediger] = useState({
    id: '',
    itemName: '',
    start: '',
    last: '',
    when: '',
    how: '',
    many: '',
  });

  const { itemSeq } = useParams();
  //   console.log(itemSeq);
  const [pillDetails, setPillDetails] = useState([]); //약 정보 호출 담는 배열
  //   const [itemName, setItemName] = useState([]); //약품명 호출

  //의약품 검색 상세 api 호출
  const getPillSearchPlusAPI = async () => {
    const response = await fetch(`
              http://localhost:8080/home/searchByItemSeq/Detail?itemSeq=${itemSeq}
            `);

    const data = await response.json();
    // console.log(data);
    setPillDetails(data);
    // console.log(pillDetails);
    // setItemName(data.itemName); //itemName만 따로 저장
    setPostMediger((prevState) => ({
      ...prevState,
      id: localStorage.getItem('id'),
      itemName: data.itemName,
      start: startDate,
      last: endDate,
      when: selectedWhen,
      how: selectedHow,
      many: inputMany,
    }));
  };

  useEffect(() => {
    getPillSearchPlusAPI();
  }, []);

  // 날짜 라이브러리
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // 복용 방법 상태
  const [selectedWhen, setSelectedWhen] = useState('아침');
  const [selectedHow, setSelectedHow] = useState('식전 30분');
  const [inputMany, setInputMany] = useState(0);

  const onChangeWhen = (event) => {
    setSelectedWhen(event.target.value);
    // console.log(event.target.value);
    // console.log(selectedWhen);
    setPostMediger((prevState) => ({ ...prevState, when: event.target.value }));
  };
  const onChangeHow = (event) => {
    setSelectedHow(event.target.value);
    setPostMediger((prevState) => ({ ...prevState, how: event.target.value }));
  };
  const onChangeMany = (event) => {
    setInputMany(event.target.value);
    setPostMediger((prevState) => ({ ...prevState, many: event.target.value }));
  };

  //모달창 조정 컨트롤러
  const [isOpen, setIsopen] = useState(false);

  // 제출하면
  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(postMediger);
    fetch(`/home/mypage/medigerplus`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postMediger),
    });
    // alert('추가되었습니다!');
    setIsSubmit(true);
    setIsopen(!isOpen);
    // console.log('제출');
  };

  const onClickBtn = () => {
    document.location.href('/myMediger/MonthlyMediger');
  };

  return (
    <MypageLayout>
      <AddToMedigerBox onSubmit={onSubmit}>
        <div className="TitleBox">
          <div className="TitleBoxContent">
            <p className="Title">메디저 추가</p>
            {/* <StyledLink to={`/myMediger/MonthlyMediger`}> */}
            {!isSubmit && !isOpen ? (
              <button className="PlusBtn">
                <IoIosAddCircle />
              </button>
            ) : (
              <StyledMedigerListModal>
                <p className="modalContent">✅ 복용 일정이 추가되었습니다!</p>
              </StyledMedigerListModal>
            )}
            {/* <button className="PlusBtn">
              <IoIosAddCircle />
            </button> */}
            {/* </StyledLink> */}
          </div>
          <hr />
        </div>

        <div className="MedicineToTakeBox ContentBox">
          <p className="SubTitle">복용할 약</p>
          <div className="AddBox">
            <PillSearchList
              itemName={pillDetails.itemName}
              itemSeq={pillDetails.itemSeq}
              entpName={pillDetails.entpName}
              itemImage={pillDetails.itemImage}
            />
          </div>
        </div>

        <div className="HowToTakeMedicineBox ContentBox">
          <p className="SubTitle">복용 방법</p>
          <div className="WayBox">
            <div className="CalenderContainer">
              <MyDatePicker
                selected={startDate}
                // onChange={(date) => setStartDate(date)}
                onChange={(date) => {
                  setStartDate(date);
                  setPostMediger((prevState) => ({
                    ...prevState,
                    start: date,
                  }));
                }}
                dateFormat="yyyy.MM.dd"
                selectsStart
                startDate={startDate}
                endDate={endDate}
              />
              <div className="SubText">부터</div>
            </div>
            <div className="CalenderContainer">
              <MyDatePicker
                selected={endDate}
                // onChange={(date) => setEndDate(date)}
                onChange={(date) => {
                  setEndDate(date);
                  setPostMediger((prevState) => ({
                    ...prevState,
                    last: date,
                  }));
                }}
                dateFormat="yyyy.MM.dd"
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
              />
              <div className="SubText">까지</div>
            </div>
          </div>
          <div className="WayBox">
            <div className="TimeContainer">
              <select
                onChange={onChangeWhen}
                value={selectedWhen}
                className="TimingSelectBox"
              >
                <option value="아침">아침</option>
                <option value="점심">점심</option>
                <option value="저녁">저녁</option>
              </select>
              <select
                onChange={onChangeHow}
                value={selectedHow}
                className="TimeSelectBox"
              >
                <option value="식전 30분">식전 30분</option>
                <option value="식사 직후">식사 직후</option>
                <option value="식후 30분">식후 30분</option>
                {/* <option value="before30">식전 30분</option>
                <option value="at">식사 직후</option>
                <option value="after30">식후 30분</option> */}
              </select>
            </div>
            <div className="SubText">에</div>
          </div>
          <div className="WayBox">
            <div className="CountContainer">
              <input
                onChange={onChangeMany}
                value={inputMany}
                type="number"
                min="0"
                className="CountBox"
              ></input>
            </div>
            <div className="SubText">개씩</div>
          </div>
        </div>
      </AddToMedigerBox>
    </MypageLayout>
  );
}

export default AddToMediger;
