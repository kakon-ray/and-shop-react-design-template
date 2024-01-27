import React, { useContext } from "react";
import { wishListContext } from "../Contexts/wishListContext";
import { toast } from "react-toastify";

const useAddWishList = (item, productDetailsitem) => {
  const [wishList, setWishList] = useContext(wishListContext);
  const addTowishList = () => {
    const exist = wishList.find(
      (wishItem) => wishItem?.id === productDetailsitem[0].id
    );
    if (!exist) {
      setWishList([
        ...wishList,
        {
          id: item.id,
          name: item.name,
          price: item.price,
          text: item.text,
          img: item.img,
          img2: item.img2,
          value: item.value,
        },
      ]);
      toast.success(" Successfully Added in Wishlist");
    } else if (exist) {
      toast.error("Already Added in Wishlist");
    }
  };
  return { addTowishList };
};

export default useAddWishList;
