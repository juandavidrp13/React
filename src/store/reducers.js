import {GET_PRODUCTOS,GET_PRODUCTOS_ERROR} from './actions';

const initialState = {
  products: [],
  productsError:'',
  
}

export const reducers = (state = initialState, action) => {
    switch (action.type) {
      case GET_PRODUCTOS:
        return {
          ...state,
          products: action.payload.data.results
        }
      case GET_PRODUCTOS_ERROR:
        return {
          ...state,
          productsError: action.payload.error
        }
      default:
        return state;
    }
  };