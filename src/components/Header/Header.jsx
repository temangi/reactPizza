import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MainCards from "../Main/Main";
import { Sort } from "./Sort/Sort";
//
import style from "./index.module.scss";
import pizzaLogo from "../img/pizza-logo.svg";
import cart from "../img/cart.svg";

const Header = ({ price, counter }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/cart");
  };

  return (
    <>
      <div className={style.header}>
        <div className={style.logo_wrapper}>
          <img src={pizzaLogo} alt="" />
          <div className={style.logo_wrapper_item}>
            <h2>REACT PIZZA</h2>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div onClick={handleClick} className={style.header_btn}>
          <p>{price} ₽</p>
          <hr />
          <div>
            <Link to="/cart">
              <img src={cart} alt="" />
            </Link>
            <p>{counter}</p>
          </div>
        </div>
      </div>
      <Sort />
    </>
  );
};

export default Header;
