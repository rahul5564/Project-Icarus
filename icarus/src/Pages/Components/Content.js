import { useContext } from "react";
import { CartContext } from "../cartProvider.js/card";

import { Sidebarcontent } from "../sidebar/sidebarContent";
export const Content = ({ Data }) => {
  const { addCart, addLike, filters } = useContext(CartContext);
  // console.log("filters",filters);
  return (
    <div>
      <p>
        {filters.length != "" ? (
          <div>
            <Sidebarcontent />
          </div>
        ) : (
          <div>
            {Data.watches.map(
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
                  <button
                    className="button"
                    onClick={() =>
                      addLike({
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
                    <span className="Like">Like👍 </span>
                  </button>
                  <button
                    className="button"
                    onClick={() =>
                      addCart({
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
                    <span className="Like"> Add To Cart 🛒</span>
                  </button>
                </div>
              )
            )}
          </div>
        )}
      </p>
    </div>
  );
};
