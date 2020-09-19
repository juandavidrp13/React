import React from "react";
import logo from '../logo.svg';
import * as actions from '../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import {useInputHook} from '../my-hooks/input-hook';

function Home() {

  const productos = useSelector(store => store.products);
  const dispatch = useDispatch();
  //Exercise 9th: React Driver Form states:
  const {value:producto, setValue:setProducto, bind:bindProduct, reset:resetProduct} = useInputHook('');

  const consultarProductos = (e) => {
    dispatch(actions.getProductos(producto))
    console.log(producto)
    e.preventDefault();
  };




  

  return (
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {console.log(productos)}
        <h2>Productos disponibles en Mercado Libre</h2>
        <form onSubmit={consultarProductos}>
          <input placeholder="Producto" type="text" {...bindProduct}></input><br></br>
          <input type="submit" value="Consultar"></input>
        </form>
   
        <table class="demo">
          <caption>Productos</caption>
            <thead>
            <tr>
              <th>Titulo</th>
              <th>Precio</th>
              <th>Imagen</th>
            </tr>
            </thead>
            <tbody>
            {productos && productos.length > 0 && productos.map(product => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td><img src={product.thumbnail} alt={product.title}></img></td>
            </tr>	
              ))}
            </tbody>
       </table>

     {/*      {productos && productos.length > 0 && productos.map(product => (
            <div key={product.id}>
             <p>{product.title}</p>
             <p>{product.price}</p>
             <img src={product.thumbnail} alt={product.title}></img>
             </div>
          ))} */}
      
      
    </header>
  </div>
  
    
  );
}

export default Home;