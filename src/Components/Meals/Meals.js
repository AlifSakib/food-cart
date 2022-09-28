import React from "react";
import Meal from "../../Meal/Meal";
import "./Meals.css";
const Meals = ({ meals, cart, setCart }) => {
  return (
    <div className="meals-container">
      {meals?.map((meal, index) => (
        <Meal key={index} meal={meal} cart={cart} setCart={setCart}></Meal>
      ))}
    </div>
  );
};

export default Meals;
