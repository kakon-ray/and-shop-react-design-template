import React, { useState, createContext, useEffect } from "react";

export const wishListContext = createContext();

export const WishListProvider = (props) => {
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    fetch("shop.json")
      .then((response) => response.json())
      .then((data) => setWishList(data.slice(24, 27)));
  }, []);

  return (
    <wishListContext.Provider value={[wishList, setWishList]}>
      {props.children}
    </wishListContext.Provider>
  );
};
