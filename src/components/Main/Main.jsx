import React from "react";
import style from "./index.module.scss";
import PizzaCard from "./pizzaCard";
import PizzaObj from "../../data/pizzas";

const MainCards = ({addToBasket}) => {
  const pizzaCards = () => {
    return PizzaObj.map((pizza, index) => (
      <PizzaCard key={index} {...pizza} addToBasket={addToBasket} />
    ));
  };

  return (
    <>
      <h1>Все пиццы</h1>
      <section className={style.pizza_wrapper__cards}>
        {pizzaCards()} 
      </section>
    </>
  );
};

export default MainCards;
