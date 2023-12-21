import React from 'react'
import'./CartStyle.css'
import { useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import {clear, delFromCart} from '../rtk/slices/Cart-slice'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Cart.css'
function Cart() {
  const dispatch =useDispatch();
  const cart =useSelector((state)=>state.cart);
  const totalPrice=cart.reduce((acc,product)=>{
    acc+=(product.price * product.quantity);
    return acc;
  },0)
  
  console.log(cart); //-->include items that user add choose it
  // const params = useParams();
  // const [product, setProduct] = useState([]);
  // const api_url = "https://fakestoreapi.com/products";
  // useEffect(() => {
  //   axios
  //     .get(`${api_url}/${params.productId}`)
  //     .then((res) => res.data)
  //     .then((data) => setProduct(data))
  //     .catch((error) => console.log("error", error));
  // });
  // const {myProduct}=props;
  // console.log(myProduct);
  return (
    <>
      <div className="containerp p-5">
        <h1>your cart </h1>
        <button className="btn btn-success" onClick={() => dispatch(clear())}>
          clear all
        </button>
        {/* <h4>total price :: {totalPrice.toFixed(2)} $</h4> */}
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Img</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>
                    <img className='cart-img' src={item.image} alt="img" />
                  </td>
                  <td>{item.quantity}</td>
                  {/* <td>
                    <input type="number" id="quantity" name="quantity" />
                  </td> */}
                  <td>{item.price} $</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(delFromCart(item))}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="containerp checkout">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{totalPrice.toFixed(2)} $</td>

                <td>
                  <Link
                    className="btn btn-success"
                    to={"/cart/out"}
                    // onClick={() => dispatch(delFromCart(item))}
                  >
                    checkout
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Cart