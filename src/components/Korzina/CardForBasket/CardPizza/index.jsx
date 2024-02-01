import scss from "./style.module.scss";
import minus from "../../../img/minus.svg";
import plus from "../../../img/plus.svg";
import X from "../../../img/xxx.svg";
import { useEffect, useState } from "react";


const CardPizza = ({size,type, counter,img, title,id,changePizzaPrice,price,deletePizza }) => {

  const [counterPizza , setCounterPizza ] = useState(counter+1)

  const changeCounerPlus = () => {
    setCounterPizza(counterPizza+1)
  }

  useEffect(() => {
    changePizzaPrice(counterPizza*price)
    console.log(counterPizza*price)
  },[counterPizza,price,img,size])

  const changeCounerMinus = () => {
    setCounterPizza(counterPizza === 0 ? 0 : counterPizza-1)
  }



  return (
    <section className={scss.cart_for_basket}>
      <div className={scss.pizza}>
        <img src={img} alt="" />
        <div className={scss.pizza_info}>
          <h2>{title}</h2>
          <p>{type} тесто, {size} см.</p>
        </div>
      </div>
      <div className={scss.pizza_counter}>
        <img src={minus} alt="" onClick={changeCounerMinus}  />
        <p>{counterPizza}</p>
        <img src={plus} alt="" onClick={changeCounerPlus} />
      </div>
      <div className={scss.pizza_price}>
        <p>{price}</p>
        <img onClick={() => deletePizza(id)} src={X} alt="" />
      </div>
    </section>
  );
};

export default CardPizza;
