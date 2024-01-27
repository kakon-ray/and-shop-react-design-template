import React from "react";
import ShopCard from "../ShopCard.js/ShopCard";
import img1 from "../../assets/Hot/product3.1d2f5e96 (2).png";
import img2 from "../../assets/Hot/product6.f19b14e6.png";

const SlickCollectionItem = ({ todayDell }) => {
  return (
    <div className="row">
      {todayDell?.map((todayItem) => (
        <ShopCard
          key={todayItem.id}
          position="Trending"
          title={todayItem.name}
          price={todayItem.price}
          img={todayItem.img}
          img1={todayItem.img2}
          item={todayItem}
        />
      ))}
    </div>
  );
};

export default SlickCollectionItem;
