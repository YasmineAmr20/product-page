import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../rtk/slices/Cart-slice";
import { fetchProducts } from "../rtk/slices/Product-slice";
import all_product from "../../assest/Assets/all_product";
import './MainProducts.css'
function MainProducts() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  console.log(products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  // const api_url = "http://localhost:3030/products";
  // const [mainPro, setMainPro] = useState([]);
  // //get all products data
  // const getProduct = () => {
  //   axios
  //     .get(api_url)
  //     .then((res) => res.data)
  //     .then((data) => setMainPro(data))
  //     .catch((error) => console.log("error", error));
  // };
  // useEffect(()=>{
  //   getProduct();
  // },[])
  return (
    <>
      <div className="prod-con p-5">
        <h1>New Collections</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {
            /*map through the array of objects and create a card for each product*/
            all_product.map((product) => {
              return (
                <div className="col" key={product.id}>
                  {/* <ProductCard product={product} key={product.id} /> */}
                  <div className="card">
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt="img"
                    />
                    <div className="card-body">
                      <p className="card-title">{product.name}</p>
                      <p className="card-text">{product.price}</p>
                      <div className="btns">
                        <Link
                          className="link-pro"
                          to={`/productD/${product.id}`}
                        >
                          show
                        </Link>
                        <button
                          className="btn-pro"
                          onClick={() => dispatch(addToCart(product))}
                        >
                          addToCart
                        </button>
                      </div>

                      {/* <Link className="btn btn-primary" to={`/cart`}>
            add to cart
          </Link> */}
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  );
}
export default MainProducts;
