import React from "react";
import { useNavigate } from "react-router";
import classes from "./Banner.module.css";

function Banner() {
  const navigate = useNavigate();

  // Di chuyển đến trang /shop
  const gotoShop = () => {
    navigate("/shop");
  };

  return (
    <div className={classes.container}>
      <div className={classes.banner}>
        <h3>NEW INSPIRATION 2020</h3>
        <h1>
          20 % OFF ON NEW <br /> SEASON
        </h1>
        <button onClick={gotoShop}>Brows collecttions</button>
      </div>
    </div>
  );
}

export default Banner;
