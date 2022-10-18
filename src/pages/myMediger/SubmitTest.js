import React, { useEffect, useState } from 'react';

function SubmitTest() {
    const [medigerplusList, setMedigerplusList]= useState({
        ItemName: '활명수',
        SD: '2022-09-13',
        LD: '2022-10-13',
        how: 'afterMeal',
        many: '2',
        T: 'Even'
    })
  const test = () => {
    fetch(`http://localhost:8080/home/mypage/medigerplus`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(medigerplusList),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          alert('저장완료');
          console.log(JSON.stringify({
            ItemName: '활명수',
            SD: '2022-09-13',
            LD: '2022-10-13',
            how: 'afterMeal',
            many: '2',
            T: 'Even'
        }))
        }
      });
  };

  useEffect(() => {
    test();
  }, []);

  return <div>연결 테스트</div>;
}

export default SubmitTest;