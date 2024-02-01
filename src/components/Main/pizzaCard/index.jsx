import style from "./style.module.scss";
import { useState } from "react";
import plus from "../../img/plus.svg";


const PizzaCard = ({
  title,
  types,
  sizes,
  price,
  imageUrl,
  addToBasket,
  id,
}) => {
  const [typePizza, setTypePizza] = useState(0);
  const [sizePizza, setSizePizza] = useState(0);
  const [countAdd, setCountAdd] = useState(0);

  function Add() {
    setCountAdd(countAdd + 1);
    addToBasket({
      id: id,
      size: sizes[sizePizza],
      type:typePizza == 0 ? "тонкое" : "традиционное",
      counter: countAdd,
      price: price,
      img: imageUrl,
      title: title,
    },price);
  }

  return (
    <div className={style.pizza_card}>
      <img src={imageUrl} alt="" />
      <p>{title}</p>
      <div className={style.pizza_card_filtration}>
        <div>
          {types.map((el, index) => {
            return (
              <p
                key={index}
                className={
                  typePizza == index ? style.p_active : style.p_notActive
                }
                onClick={() => setTypePizza(index)}
              >
                {el == 0 ? "тонкое" : "традиционное"}
              </p>
            );
          })}
        </div>
        <div>
          {sizes.map((el, index) => {
            return (
              <p
                key={index}
                className={
                  sizePizza == index ? style.p_active : style.p_notActive
                }
                onClick={() => setSizePizza(index)}
              >
                {el}
              </p>
            );
          })}
        </div>
      </div>
      <div className={style.pizza_price}>
        <p>{price} ₽</p>
        <div onClick={Add} className={style.pizza_price_add}>
          <img src={plus} alt="plus" />
          <p>Добавить</p>
          <p className={style.count}>{countAdd}</p>
        </div>
      </div>
      {/* {renderPizzaInBasket()} */}
    </div>
  );
};

export default PizzaCard;
