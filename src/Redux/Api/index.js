import axios from 'axios';
export default class Api {
  static login = () => {
  
    let data = JSON.stringify({
      "email": "thakkardevcreations@gmail.com",
      "password": "asdf@123"
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://45.79.123.102:48006/api/user/login',
      headers: { 
        'Content-Type': 'application/json', 
        
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  }
    
}
