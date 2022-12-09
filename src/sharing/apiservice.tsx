
//const API_URL = 'https://localhost:5004';
const API_URL = 'http://192.168.1.159:5029';

const axios = require('axios').default;

class UserService {


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
export default new UserService();
