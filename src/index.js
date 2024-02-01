import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import PizzaObj from "./data/pizzas";

export const Context = createContext();
let pizzasObject = {
  pizzas: PizzaObj,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context.Provider value={pizzasObject}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);

