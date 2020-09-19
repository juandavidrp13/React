import http from './http-commons';

const getProducts = (product) => {
  const url = `search?q=${product}`
  return http.get(url);
};


export default {
   getProducts
}