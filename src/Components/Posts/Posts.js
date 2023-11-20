import React, { useEffect, useState } from "react";
import axios from "axios";

import Heart from "../../assets/Heart";
import "./Post.css";

function Posts() {
  const [products, setProducts] = useState([]);
  const [product2, setProducts2] = useState([]);
  const dynamicData = () => {
    axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then((res) => {
        setProducts(res.data);
        console.log(res);
      });
    axios
      .get("https://fakestoreapi.com/products/category/women's clothing")
      .then((res) => {
        setProducts2(res.data);
      });
  };

  useEffect(() => {
    dynamicData();
  }, []);
  return (
    <div className="wrapper">
      <div className="postParentDiv">
        <div className="moreView">
          <div className="heading">
            <span>Quick Menu</span>
            <span>View more</span>
          </div>
          <div className="sideToSide">
            <div className="cards">
              {products.map((items) => {
                return (
                  <div className="card">
                    <div className="favorite">
                      <Heart></Heart>
                    </div>
                    <div className="image">
                      <img src={items.image} alt="" />
                    </div>
                    <div className="content">
                      <p className="rate">&#x20B9; {items.price}</p>
                      <span className="kilometer">{items.category} </span>
                      <p className="name">{items.title}</p>
                    </div>
                    <div className="date">
                      <span>Tue May 04 2023</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="recommendations">
          <div className="heading">
            <span>Fresh recommendations</span>
          </div>
          <div className="sideToSide">
            {product2.map((itms) => {
              return (
                <div className="cards">
                  <div className="card">
                    <div className="favorite">
                      <Heart></Heart>
                    </div>
                    <div className="image">
                      <img src={itms.image} alt="" />
                    </div>
                    <div className="content">
                      <p className="rate">&#x20B9; {itms.price}</p>
                      <span className="kilometer">{itms.category}</span>
                      <p className="name">{itms.title}</p>
                    </div>
                    <div className="date">
                      <span>10/5/2021</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
