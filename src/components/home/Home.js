import React from "react";
import Navbar from "./Navbar";
import MainProducts from "./MainProducts";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../rtk/slices/Cart-slice";
import { useEffect } from "react";
import new_collections from "../../assest/Assets/new_collections";
import homeimg from "../../assest/Assets/hero_image.png";
import pop1 from "../../assest/Assets/product_1.png";
import pop2 from "../../assest/Assets/product_2.png";
import pop3 from "../../assest/Assets/product_4.png";
import pop4 from "../../assest/Assets/product_5.png";
import exImg from "../../assest/Assets/exclusive_image.png";
import { Link } from "react-router-dom";
import { fetchProducts } from "../rtk/slices/Product-slice";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <div className="container p-10">
        <div className="home-img">
          <img src={homeimg} alt="home-img" />
        </div>
        <div className="homeText">
          <p>NEW ARRIVAL ONLY</p>
          <h2>NEW SUMMER COLLECTION HERE </h2>
          <button className="homeBtn">latest collection</button>
        </div>
      </div>
      {/* ------------------------------------------- */}
      {/* popular */}
      <h2 className="popText">POPULAR IN WOMEN</h2>
      <div className="container-popular">
        <div className="popularCard">
          <img className="card-img-top" src={pop1} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">women summer clothes.</p>
            <span>100$</span>
          </div>
        </div>
        <div className="popularCard">
          <img className="card-img-top" src={pop2} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">women summer clothes.</p>
            <span>100 $</span>
          </div>
        </div>

        <div className="popularCard">
          <img className="card-img-top" src={pop3} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">women summer clothes.</p>
            <span>100 $</span>
          </div>
        </div>
        <div className="popularCard">
          <img className="card-img-top" src={pop4} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">women summer clothes.</p>
            <span>100 $</span>
          </div>
        </div>
      </div>
      {/* ----------- */}
      <div className="container-ex">
        <div className="exclusive">
          <div className="exText">
            <h1>EXCLUSIVE OFFERS FOR YOU</h1>
            <button className="btn">check now</button>
          </div>
          <div className="eximg">
            <img src={exImg} alt="img-ex" />
          </div>
        </div>
      </div>
      {/* products */}
      <div className="product-con">
        {new_collections.map((item) => {
          return (
            <div className="card">
              <img src={item.image} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.new_price}</p>
                <div className="btns">
                  <Link className="link-pro" to={`/productD/${item.id}`}>
                    show
                  </Link>
                  <button
                    to={"#"}
                    className="btn-pro"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    buy now
                  </button>
                </div>
              </div>
            </div>
          );
          // <MainProducts />
        })}
      </div>
      {/* last */}
      <div className="last">
        <div className="last-img">
          <h1>Get Exclusive Offers on your Email</h1>
          <span>subscribe to our new setup and stay update</span>
          <form>
            <input type="email" placeholder="your email"/>
            <button type="submit" className="btn-pro">Subscribe</button>
          </form>
        </div>
      </div>
      {/* footer */}
      
    </>
  );
}

export default Home;
