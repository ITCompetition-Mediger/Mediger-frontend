import React, { useEffect, useState } from 'react';

function SubmitTest() {
  const test = () => {
    fetch(`http://localhost:8080/home/mypage/medigerplus`, {
      method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        how: 'Meal',
        ItemName: '자모',
        SD: '2022-09-13',
        LD: '2022-10-13',
        how: 'afterMeal',
        many: '2',
        T: 'Even',
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          alert('저장완료');
        }
      });
  };

  useEffect(() => {
    test();
  }, []);

  return <div>연결 테스트</div>;
}

export default SubmitTest;
