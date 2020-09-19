import axios from 'axios';
const url = 'https://api.mercadolibre.com/sites/MCO/';


export default axios.create({
  baseURL: url,
  headers: {
    'Content-type': 'application/json',
    'Accept': 'application/json',

  }
 
});
