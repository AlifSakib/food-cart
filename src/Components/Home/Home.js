import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Meals from "../Meals/Meals";
import Order from "../Order/Order";
import "./Home.css";
const Home = () => {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState(" ");
  const [cart, setCart] = useState([]);
  console.log(cart);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [search]);

  const deletFromCart = (id) => {
    const remainingItems = cart.filter((item) => item.idMeal !== id);
    setCart(remainingItems);
    toast("Deleted Successfully");
    <ToastContainer></ToastContainer>;
  };
  return (
    <div className="home-container">
      <div className="search-field">
        <input
          type="text"
          placeholder="Search Meal Here . . ."
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="meals-container">
          <Meals meals={meals} cart={cart} setCart={setCart}></Meals>
        </div>
      </div>
      <div>
        <Order cart={cart} deletFromCart={deletFromCart}></Order>
      </div>
    </div>
  );
};

export default Home;
