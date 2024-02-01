import React, { useState } from "react";
import "./Sort.scss";
import style from "../index.module.scss";
import vector from "../../img/Vector.svg";

export const Sort = () => {
  const [type, setType] = useState("all");
  const [openModal,setOpenModal] = useState(false)
  const [typeOfPizza,setTypeOfPizza] = useState(0)

  const clickType = (id) => {
    setType(id);
  };


  return (
    <header>
      <ul>
        <li
          className={type === "all" ? "active_button" : style.li}
          onClick={() => clickType("all")}
        >
          Все
        </li>
        <li
          className={type === "meat" ? "active_button" : style.li}
          onClick={() => clickType("meat")}
        >
          Мясные
        </li>
        <li
          className={type === "vegetarian" ? "active_button" : style.li}
          onClick={() => clickType("vegetarian")}
        >
          Вегетарианская
        </li>
        <li
          className={type === "grill" ? "active_button" : style.li}
          onClick={() => clickType("grill")}
        >
          Гриль
        </li>
        <li
          className={type === "spicy" ? "active_button" : style.li}
          onClick={() => clickType("spicy")}
        >
          Острые
        </li>
        <li
          className={type === "closed" ? "active_button" : style.li}
          onClick={() => clickType("closed")}
        >
          Закрытые
        </li>
      </ul>
      <div className={style.popular} onClick={() => setOpenModal(!openModal)}>
        <img src={vector} alt="" />
        <p>Сортировка по:</p>
        <p>{typeOfPizza > 0 ? typeOfPizza === 1 ? "по цене" : "по алфавиту" : "популярности" }</p>
      </div>
      <div className={openModal ? "modal" : "modal_notActive"}>
        <p onClick={() => {setTypeOfPizza(0);setOpenModal(!openModal)}}>популярности
        </p>
        <p onClick={() => {setTypeOfPizza(1);setOpenModal(!openModal)}}>по цене</p>
        <p onClick={() => {setTypeOfPizza(2);setOpenModal(!openModal)}}>по алфавиту</p>
      </div>
    </header>
  );
};
