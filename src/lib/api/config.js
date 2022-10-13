import axios from 'axios';

export const apiUrl = 'http://localhost:8080';

axios.defaults.baseURL = apiUrl;
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const accessToken = localStorage.getItem('accessToken');
if (accessToken) {
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
}


export default axios;
