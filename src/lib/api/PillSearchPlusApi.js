import axios from './config';

const PillSearchPlusAPI = { 
  getPillSearchPlusAPI(itemSeq) {
    return axios.get(`/home/searchByItemSeq/Detail?itemSeq=${itemSeq}`);
  },
};

export default PillSearchPlusAPI;
