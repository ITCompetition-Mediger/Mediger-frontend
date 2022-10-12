import axios from './config';

const ScrapAPI = { 
  getScrapAPI() {
    return axios.post(`/home/scrap`);
  },
};

export default ScrapAPI;
