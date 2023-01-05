import axios from 'axios';

const API_URL = 'https://localhost:5186';
// const API_URL = 'http://192.168.1.159:5029';



class ApiService {


  Getclient() {
    return axios.get(API_URL + '/api/report/get_client',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
      })
      .then((data:any) => data.data)
  }

  
}
export default new ApiService();
