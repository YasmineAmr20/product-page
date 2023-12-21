import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import logo from '../../assest/Assets/logo.png'
import './Navbar.css'
function Navbar() {
  const cart=useSelector((state)=>state.cart)
  return (
    <>
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
          <div className="container-fluid">
            <Link className='logoImg'
              to={"/"}
            >
              <img src={logo} alt="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to={"/"}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-link active" to={"/shop"}>
                    Shop
                  </Link>
                </li>
                <li>
                  <Link className="nav-link active" to={"/contact"}>
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to={"/cart"}>
                    Cart-{cart.length}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to={"/out"}>
                    Checkout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    </>
  );
}

export default Navbar