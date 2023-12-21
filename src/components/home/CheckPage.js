import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function CheckPage() {
  const data=[{name:"",price:""}];
  const [postItem, setPostItem] = useState(data);
  const order_api = " http://localhost:500/orders";
  const cart = useSelector((state) => state.cart);
  console.log("carrt",cart)
  useEffect(() => {
    axios
      .post(order_api, 
        setPostItem({...postItem})
      )
      .then((response) => response.data)
      .catch((error) => {
        console.log("error", error);
      });
  },[]);
  return (
    <div className="con-check p-5">
      <h1>checkout</h1>
      <div className="container checkout">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>

                  <td>{item.name}</td>
                  <td>{item.new_price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CheckPage;
