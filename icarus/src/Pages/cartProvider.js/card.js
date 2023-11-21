import { createContext, useState } from "react";

export const CartContext = createContext();

export const Cartprovider = ({ children }) => {
  const [CartItem, setCart] = useState([]);
  const [LikesItem, setLike] = useState([]);
  const [Rating, SetRating] = useState([]);
  const [Sort, Setsort] = useState([]);
  const [Category, SetCategory] = useState([]);
  const [filters, setFilters] = useState([]);
  const [Pricerange, setPricerange] = useState(3000);

  // const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const addCart = (ItemsAdded) => {
    const ItemsinCart = [...CartItem, ItemsAdded];
    setCart(ItemsinCart);
    console.log("ItemsinCart", ItemsinCart);
  };
  const addLike = (ItemsAdded) => {
    const ItemsinLikes = [...LikesItem, ItemsAdded];
    setLike(ItemsinLikes);
    console.log("ItemsinLikes", ItemsinLikes);
  };

  const RemovefromCart = (item) => {
    const Removeincart = CartItem.filter((data) => data.id !== item.id);
    setCart([...Removeincart]);
  };

  const RemovefromLike = (removeItem) => {
    const RemoveinLike = LikesItem.filter((data) => data.id !== removeItem.id);
    setLike([...RemoveinLike]);
  };

  const MovetoCart = (toCart) => {
    const RemoveinLike = LikesItem.filter((data) => data.id !== toCart.id);
    const ItemsinCart = [...CartItem, toCart];
    setCart(ItemsinCart);
    setLike([...RemoveinLike]);
  };

  const Movetowishlist = (toList) => {
    const Removeincart = CartItem.filter((data) => data.id !== toList.id);
    const ItemsinLikes = [...LikesItem, toList];
    setLike(ItemsinLikes);
    setCart([...Removeincart]);
  };

  const changeHandler = (items) => {
    const Stars = [items.target.value];
    SetRating(Stars);
    // Addall(Stars);
    setFilters([...filters, Stars]);
  };

  const sortRadio = (items) => {
    const radio = [items.target.value];
    Setsort(radio);
    // Addall(radio);
    setFilters([...filters, radio]);
    // console.log("radio", radio);
  };

  const sortCategory = (newCategory) => {
    // const Categoryval = [...Category, items.target.value];
    // const updatedCategory = Category.filter(
    //   (category) => category == Categoryval ? category != Categoryval : ""
    // );
    if (!Category.includes(newCategory)) {
      SetCategory([...Category, newCategory]);
    }
    // SetCategory(Categoryval);
    // setFilters([...filters, updatedCategory]);
    // Addall(Categoryval);
    // console.log("Cart", Categoryval);
  };

  // const Addall = (data) => {
  //   // const Data1 = [...data];
  //   // setFilters([...filters, Data1]);
  // };

  const ClearAll = () => {
    SetCategory([""]);
    SetRating([""]);
    Setsort([""]);
  };

  const handleRangeChange = (e) => {
    setPricerange(e.target.value);
  };

  return (
    <CartContext.Provider
      value={{
        CartItem,
        LikesItem,
        addCart,
        addLike,
        RemovefromCart,
        RemovefromLike,
        Movetowishlist,
        MovetoCart,
        changeHandler,
        sortRadio,
        sortCategory,
        filters,
        Category,
        Rating,
        Sort,
        ClearAll,
        handleRangeChange,
        Pricerange
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
