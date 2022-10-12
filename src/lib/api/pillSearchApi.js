import axios from './config';

const pillSearchAPI = {
  // 리뷰 삭제
  getPillSearchAPI(type, inputValue) {
    return axios.get(`/home/search?type=${type}&keyword=${inputValue}`);
  },
};

export default pillSearchAPI;
