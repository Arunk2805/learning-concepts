import React, { useEffect, useState } from "react";
import axios from "axios";
// import {useForm} from "react-hook-form"

const Cart = () => {
  const [product, setProduct] = useState([]);
  const [discount, setDiscount] = useState(false);
  const [title, setTitle] = useState("");

  const getData = async () => {
    let res = await axios
      .get("https://fakestoreapi.com/products/1")
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      });
  };

  const getTitle = () => {
    let res1 = axios
      .get("https://fakestoreapi.com/products/1")
      .then((response1) => {
        setTitle(response1.data.title);
        console.log(response1.data.title);
      });
  };
  useEffect(() => {
    getData();
    getTitle();
  }, []);
  const removeLetter = () => {
    var remove = title.substring(0, 10);
    console.log(remove);
    let newStr = "";
    for (let i = 0; i < remove.length; i++) {
      if (remove[i] !== "j") {
        newStr += remove[i];
      }
    }

    setTitle(newStr);
    console.log(newStr);
  };

  const calculatePrice = () => {
    if (discount) {
      return product.price * 0.95;
    } else {
      return product.price;
    }
  };
  const handleChange = () => {
    setDiscount(!discount);
  };
  return (
    <>
      <div className="d-flex justify-content-center align-item-center my-3">
        <div className="card cardSize">
          <img src={product.image} className="card-img-top imgSize" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p> price : $ {product.price}</p>
            <div className="">
              <label>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  onChange={handleChange}
                  checked={discount}
                  className="mx-2"
                />
                5% discount
              </label>
            </div>
            {discount && <p>Price after Discount : ${calculatePrice()}</p>}
            
          </div>
        </div>
      </div>
      <div className="">
        <h3>removing the one letter in tiltle which coming from api </h3>
        <p>{title}</p>
      <button type="button" onClick={removeLetter}>
        remove j letter
      </button>
      {title}
      </div>
    </>
  );
};

export default Cart;
