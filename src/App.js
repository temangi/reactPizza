import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainCards from "./components/Main/Main";
import Cart from "./components/Korzina/Cart";
import { useState } from "react";

function App() {
  const [basket, setBasket] = useState([]);
  const [pricePizza, setPricePizza] = useState(0);
  const [counterPizza, setCounterPizza] = useState(0);

  const addToBasket = (el, price) => {
    const existingItem = basket.find(item => item.id === el.id);
  
    if (existingItem) {
      const updatedBasket = basket.map(item =>
        item.id === el.id ? { ...item, counter: (item.counter || 0) + 1 } : item
      );
      setBasket(updatedBasket);
    } else {
      setBasket([...basket, el]);
    }
  
    setPricePizza(pricePizza + price);
    setCounterPizza(counterPizza + 1);
  };
  
  const deletePizza = (id) => {
    const newPizzaArray = basket.filter(el => el.id!=id)
    setBasket(newPizzaArray)
    if (id == -1){
      setBasket([])
    }
  }

  return (
    <div className="App">
      <div className="wrapper">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header counter={counterPizza} price={pricePizza} />
                  <MainCards addToBasket={addToBasket} />
                </>
              }
            />
            <Route path="/cart" element={<Cart basket={basket} price={pricePizza} deletePizza={deletePizza} />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
