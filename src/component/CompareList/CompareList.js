import React, { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./CompareList.css";

import { CompareContext } from "../../Contexts/CompareContext";
import { CartContext } from "../../Contexts/CartContext";
import { toast } from "react-toastify";
import CompareCard from "./CompareCard";
const CompareList = () => {
  const [compareList, setCompareList] = useContext(CompareContext);
  const [cartList, setCartList] = useContext(CartContext);

  const addTowCard = (item) => {
    const exist = cartList.find((wishItem) => wishItem?.id === item.id);

    if (!exist) {
      setCartList([
        ...cartList,
        {
          ...item,
        },
      ]);
      toast.success(" Added in Cartlist");
    } else if (exist) {
      toast.error("Already Added in Cartlist");
    }
  };

  const removeCompareList = (id) => {
    const newCompareList = compareList.filter((comItem) => comItem?.id !== id);
    setCompareList([...newCompareList]);
  };

  return (
    <div className="my-4 container-fluid">
      <div className="row mx-1">
        {compareList.length > 0 ? (
          compareList.map((item) => (
            <React.Fragment key={item?.id}>
              <CompareCard
                item={item}
                addTowCard={addTowCard}
                removeCompareList={removeCompareList}
              />
            </React.Fragment>
          ))
        ) : (
          <h1 className="text-center my-5 py-5">No Item add to Compare List</h1>
        )}
      </div>
    </div>
  );
};

export default CompareList;
