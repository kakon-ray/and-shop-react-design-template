import React from "react";
import FollowUs from "../../component/FollowUs/FollowUs";
import HotProducts from "../../component/HotProducts/HotProducts";
import LatestBlog from "../../component/LatestBlog/LatestBlog";
import NewFashon from "../../component/NewFashon/NewFashon";
import OffCollection from "../../component/OffCollection/OffCollection";
import SlickCollection from "../../component/SlickCollection/SlickCollection";
import HeaderBanner from "../../component/HeaderBanner/HeaderBanner";
import NewCollection from "../../component/NewCollection/NewCollection";

const HomePage = () => {
  return (
    <>
      <HeaderBanner />
      <NewCollection />
      <HotProducts />
      <OffCollection />
      <SlickCollection />
      <NewFashon />
      <LatestBlog />
      <FollowUs />
    </>
  );
};

export default HomePage;
