import React from "react";
import "./Meal.css";
const Meal = ({ meal, cart, setCart }) => {
  const { strMealThumb, strMeal, idMeal } = meal;

  const addToCart = (id) => {
    const info = {
      strMeal,
      idMeal,
      quantity: 0,
    };
    const addedItem = cart.find((item) => item.idMeal === id);

    if (addedItem) {
      return;
    }

    const newCart = [...cart, info];
    setCart(newCart);
  };

  const bookMark = () => {
    const info = {
      strMeal,
      idMeal,
      quantity: 0,
      bookmark: "true",
    };

    const previousBookmark = localStorage.getItem("bookmark");
    const oldBookmark = JSON.parse(previousBookmark);
    if (oldBookmark) {
      const isExist = oldBookmark.find((item) => item.idMeal === idMeal);
      if (isExist) {
        isExist.quantity = isExist.quantity + 1;
        localStorage.setItem("bookmark", JSON.stringify(oldBookmark));
      } else {
        localStorage.setItem(
          "bookmark",
          JSON.stringify([...oldBookmark, info])
        );
      }
    } else {
      localStorage.setItem("bookmark", JSON.stringify([info]));
    }
  };

  return (
    <div className="meal-container" data-aos="zoom-in">
      <img src={strMealThumb} alt="" />
      <p>{strMeal}</p>
      <p>{idMeal}</p>
      <div className="buttons">
        <button onClick={(id) => addToCart(idMeal)}>Add To Cart</button>
        <button onClick={bookMark}>Bookmark</button>
        <button>Details</button>
      </div>
    </div>
  );
};

export default Meal;
