import "../Components/Content.css";
import { useContext, useState } from "react";
import { CartContext } from "../cartProvider.js/card";
import { Data } from "../../Data/db";

export const Sidebarcontent = () => {
  const { Sort, Rating } = useContext(CartContext);

  const SortRating = Data.watches.filter((data) => data.rating >= Rating);

  return (
    <div>
      <p>
        {SortRating.map(
          ({
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
              <button>Add To Carttttt</button>
            </div>
          )
        )}
      </p>
    </div>
  );
};
