import "./Content.css";
import { Navbar } from "./Navbar";
import { useContext } from "react";
import { CartContext } from "../cartProvider.js/card";

export const Cart = () => {
  const { CartItem, RemovefromCart, Movetowishlist } = useContext(CartContext);
  console.log(CartItem.length);

  return (
    <div>
      <Navbar />
      <br />
      <p>
        {CartItem.length === 0 ? "No Items in Cart" : ""}
        {CartItem.map(
          ({
            id,
            Image,
            watch_model,
            rating,
            manufacturer,
            year,
            discount,
            price
          }) => (
            <div className="card">
              <img src={Image} className="Watch" alt="watch" />

              <p>
                {watch_model}
                <span>{rating}</span>
              </p>
              <p>{manufacturer}</p>
              <p>{year}</p>
              <p>
                {price} (<span>{discount} OFF</span>)
              </p>
              <button className="button" onClick={() => RemovefromCart({ id })}>
                Remove
              </button>
              <button
                className="button"
                onClick={() =>
                  Movetowishlist({
                    id,
                    Image,
                    watch_model,
                    rating,
                    manufacturer,
                    year,
                    discount,
                    price
                  })
                }
              >
                Move to wishlist
              </button>
            </div>
          )
        )}
      </p>
    </div>
  );
};
