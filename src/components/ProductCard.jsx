import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({
  id,
  name,
  description,
  image,
  price,
  stock
}) {
  console.log("ProductCard");
  return (
    <div className="card m-4 p-2">
      <div className="card-body p-2">
        <img className="card-img-top" src={image} alt="" />
        <h4 className="card-title mt-3">Name: {name}</h4>
        <p className="card-text">Description: {description}</p>
        <p className="card-text">Price: {price}</p>
        <p className="card-text">Stock: {stock}</p>
        <Link to={`/products/${id}`}>Show product</Link>
      </div>
    </div>
  );
}
