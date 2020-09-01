import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function ProductList() {
  let [productList, setProductList] = useState([]);

  function fetchProductList() {
    fetch("https://mock-data-api.firebaseio.com/e-commerce/products.json")
      .then((res) => res.json())
      .then((result) => {
        setProductList(result.all);
      });
  }
  useEffect(() => {
    fetchProductList();
  }, []);

  return (
    <div>
      <div className="card-box row">
        {productList.map((item, index) => {
          return (
            <ProductCard
              key={index}
              id={index}
              name={item.name}
              description={item.description}
              price={item.price}
              stock={item.stock}
            ></ProductCard>
          );
        })}
      </div>
    </div>
  );
}
