import React, { useState } from "react";
import FollowUs from "../../component/FollowUs/FollowUs";
import PageBanner from "../../component/PageBanner/PageBanner";
import ShopCard from "../../component/ShopCard.js/ShopCard";
import useProducts from "../../Hooks/useProducts";

const ShopPage = () => {
  // custom hook use and get data
  const [shopItem, setShopItem] = useProducts();
  const [shop, setShop] = useState([]);

  return (
    <>
      <PageBanner page="SHOP" />
      <div className="container-fluid">
        <div className="row g-3">
          {shopItem.map((item) => (
            <ShopCard
              key={item.id}
              position="Trending"
              title={item.name}
              price={item.price}
              img={item.img}
              img1={item.img2}
              item={item}
            />
          ))}
        </div>
      </div>
      <FollowUs />
    </>
  );
};

export default ShopPage;
