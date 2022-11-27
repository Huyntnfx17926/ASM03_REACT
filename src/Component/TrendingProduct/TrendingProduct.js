import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { popupActions } from "../../store/popup";
import { useNavigate } from "react-router-dom";
import classes from "./TrendingProdct.module.css";
import PopupModal from "../PopupModal/PopupModal.js";

const TrendingProdct = (props) => {
  //Lấy dữ liệu từ server
  const [data, setData] = useState([]);

  // Lấy thông tin của product
  const [productID, setProductID] = useState(null);

  // Ẩn - hiện popup
  const dispatch = useDispatch();
  const isPopup = useSelector((state) => state.popup.isPopup);

  useEffect(() => {
    fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const showPopupHandler = (event) => {
    dispatch(popupActions.showPopup());

    // Lấy ID sản phẩm
    setProductID(event.target.id);
    console.log(event.target.id);
  };

  const hidePopupHandler = () => {
    dispatch(popupActions.hidePopup());
  };
  const navigate = useNavigate();
  //chuyển đến trang Detail

  // Lấy dữ liệu sản phẩm cần popup
  const product = data.find((product) => product._id.$oid === productID);
  // console.log();
  const gotoDetail = (event) => {
    navigate(`detail/${product._id.$oid}`);
    console.log(product._id.$oid);
  };

  return (
    <div className={classes.container}>
      {isPopup && (
        <PopupModal
          onClose={hidePopupHandler}
          onClick={gotoDetail}
          img={product.img1}
          name={product.name}
          price={product.price}
          desc={product.short_desc}
        />
      )}
      <div className={classes.header}>
        <p>MADE THE HARD WAY</p>
        <h5>TOP TRENDING PRODUCTS</h5>
      </div>
      <div className={classes.productsList}>
        {data.map((item, i) => (
          <div className={classes.productItem} id={item._id.$oid} key={i}>
            <img
              src={item.img1}
              alt=""
              onClick={showPopupHandler}
              id={item._id.$oid}
            />
            <h5>{item.name}</h5>
            <p>{`${item.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProdct;
