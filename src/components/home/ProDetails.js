import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ProDetails() {
  const params = useParams();

  const [product, setProduct] = useState([]);
  const api_url = "http://localhost:200/all_product";
  useEffect(() => {
    axios
      .get(`${api_url}/${params.productId}`)
      .then((res) => res.data)
      .then((data) => setProduct(data))
      .catch((error) => console.log("error", error));
  }, []);
  console.log("from det", product);
  return (
    <>
      <div className="containerp">
        {/* <Product product={product}/> */}
        <h1>product details-</h1>
        <img src={product.image} alt="product-img" />
        <h2>{product.name}</h2>
        <p>{product.category}</p>
        <p>{product.price}</p>
      </div>
    </>
  );
}

export default ProDetails;
