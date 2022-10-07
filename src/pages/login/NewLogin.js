import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Desktop, Mobile, Tablet } from '../../components/ReactResponsive';
// import NewLoginRedirect from './NewLoginRedirect';

function NewLogin() {
  //   const params = useParams();

  //   useEffect(() => {
  //     localStorage.clear();
  //     localStorage.setItem('token', params.token);
  //     window.location.replace('/');
  //   }, []);

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
