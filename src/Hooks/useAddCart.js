import React, { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import { wishListContext } from "../Contexts/wishListContext";
import { toast } from "react-toastify";

const useAddCart = (item) => {
  const [cartList, setCartList] = useContext(CartContext);

  const addTowCard = () => {
    const exist = cartList.find((wishItem) => wishItem?.id === item.id);

    if (!exist) {
      setCartList([
        ...cartList,
        {
          ...item,
        },
      ]);
      toast.success(" Successfully Added in Cartlist");
    } else if (exist) {
      toast.error("Already Added in Cartlist");
    }
  };

  return { addTowCard };
};

export default useAddCart;
