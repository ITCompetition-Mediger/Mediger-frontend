import React, { useEffect } from 'react';
import { useParams } from 'react-router';

function NewLoginRedirect() {
  const params = useParams();

  useEffect(() => {
    localStorage.clear();
    localStorage.setItem('token', params.token);
    window.location.replace('/');
  }, []);

  return <></>;
}

export default NewLoginRedirect;
