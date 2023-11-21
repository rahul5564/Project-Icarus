import "./Content.css";
import { Navbar } from "./Navbar";
import { useContext } from "react";
import { CartContext } from "../cartProvider.js/card";

export const Like = () => {
  const { LikesItem, RemovefromLike, MovetoCart } = useContext(CartContext);
  console.log(LikesItem.length);

  return (
    <div>
      <Navbar />
      <br />
      <p>
        {LikesItem.length === 0 ? "No Items in WishList" : ""}
        {LikesItem.map(
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
              <button className="button" onClick={() => RemovefromLike({ id })}>
                Remove
              </button>
              <button
                className="button"
                onClick={() =>
                  MovetoCart({
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
                Move to Cart
              </button>
            </div>
          )
        )}
      </p>
    </div>
  );
};
