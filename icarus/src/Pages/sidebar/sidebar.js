// import "./Sidebar.css";
import { useContext } from "react";
import { CartContext } from "../cartProvider.js/card";
import { NavLink } from "react-router-dom";

export const Aisde = () => {
  const STARS = [1, 2, 3, 4, 5];

  const {
    changeHandler,
    sortRadio,
    sortCategory,
    ClearAll,
    handleRangeChange,
    Pricerange
  } = useContext(CartContext);

  return (
    <div className="Side-main">
      <p>
        Filters{" "}
        <span className="clear" onClick={() => ClearAll()}>
          <NavLink to="/">Clear</NavLink>
        </span>
      </p>
      <div className="Price-Range">
        <p>Price</p>
        <div>
          <input
            type="range"
            min="3000"
            max="40000"
            value={Pricerange}
            onChange={(e) => handleRangeChange(e)}
          />
          <p>{Pricerange}</p>
        </div>
      </div>
      <div>
        <h4>Category</h4>
        <input
          type="checkbox"
          key="Category"
          value="Luxury"
          onClick={(e) => sortCategory(e)}
        />
        Sport <br />
        <input type="checkbox" value="Sport" onClick={(e) => sortCategory(e)} />
        Casual <br />
        <input
          type="checkbox"
          key="Category"
          value="Casual"
          onClick={(e) => sortCategory(e)}
        />
        Luxury <br />
      </div>
      <div className="filter">
        <h4>Rating</h4>
        <div>
          {STARS.map((star) => (
            <label key={star}>
              <input
                type="radio"
                name="rating"
                key="Category"
                value={star}
                onChange={(e) => changeHandler(e)}
              />
              <span>{star} Stars and Above</span>
              <br />
            </label>
          ))}
        </div>
      </div>
      <div>
        <h4>Sort by</h4>
        <input
          type="radio"
          value="Low"
          name="Sort"
          onClick={(e) => sortRadio(e)}
        />{" "}
        Price - Low to High <br />
        <input
          type="radio"
          value="High"
          name="Sort"
          onClick={(e) => sortRadio(e)}
        />{" "}
        Price - High to Low
        <br />
      </div>
    </div>
  );
};
