import services from '../services/api.services';


// GET
export const GET_PRODUCTOS = 'GET_PRODUCTOS';
export const GET_PRODUCTOS_ERROR = 'GET_PRODUCTOS_ERROR';


export const getProductos = (producto) => {
    return dispatch => {
      services.getProducts(producto)
        .then(response  => {
          console.log(response);
          console.log(response.data);
          console.log(response.data.results);
          dispatch(getProductosAsync(response));
        })
        .catch(error => {
          console.log(error);
          dispatch(getProductosErrorAsync(error));
        });
    }
  }
  
export const getProductosAsync = (payload) => ({
  type: GET_PRODUCTOS,
  payload: payload
});

export const getProductosErrorAsync = (error) => ({
  type: GET_PRODUCTOS_ERROR,
  error: error
});







