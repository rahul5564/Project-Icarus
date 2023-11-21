import "./Content.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../cartProvider.js/card";

export const Navbar = () => {
  const { CartItem, LikesItem } = useContext(CartContext);
  return (
    <div className="Nav-main">
      <NavLink className="Nav-head" to="/">
        Icarus
      </NavLink>
      <input type="search" id="search1" placeholder="Search for product" />
      <NavLink className="nav" to="/Like">
        🤍{LikesItem.length === 0 ? "" : LikesItem.length}
      </NavLink>{" "}
      <NavLink className="nav" to="/Cart">
        🛒{CartItem.length === 0 ? "" : CartItem.length}
      </NavLink>
    </div>
  );
};
