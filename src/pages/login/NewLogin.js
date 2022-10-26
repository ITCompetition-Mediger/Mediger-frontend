import React from 'react';
import { Mobile } from '../../components/ReactResponsive';

function NewLogin() {

  return (
    <div>
      <Mobile>
        <h1>New Login Page</h1>
        <a
          target="_self"
          href="http://localhost:8080/oauth2/authorization/kakao"
        >
          카카오 로그인
        </a>
      </Mobile>
    </div>
  );
}

export default NewLogin;
