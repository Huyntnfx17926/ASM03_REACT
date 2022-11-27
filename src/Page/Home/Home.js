import React from "react";
import AnotherInfo from "../../Component/AnotherInfo/AnotherInfo";
import Banner from "../../Component/Banner/Banner";
import Categories from "../../Component/Categories/Categories";
import TrendingProdct from "../../Component/TrendingProduct/TrendingProduct";
import LiveChat from "../../Component/UI/LiveChat/LikeChat";

function Home() {
  return (
    <>
      <Banner />
      <Categories />
      <TrendingProdct />
      <LiveChat />
      <AnotherInfo />
    </>
  );
}

export default Home;
