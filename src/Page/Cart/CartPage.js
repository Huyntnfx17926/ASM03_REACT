import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";

import { useSelector } from "react-redux";
import CartItem from "../../Component/CartItem/CartItem";
import classes from "./CartPage.module.css";
const CartPage = () => {
  const isLogin = useSelector((state) => state.login.isLogin);
  const listCart = useSelector((state) => state.cart.listCart);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Fragment>
      <div className={classes.banner}>
        <h1>CART</h1>
      </div>
      <h3 style={{ fontStyle: "italic" }}>SHOPPING CART</h3>

      {!isLogin && (
        <p style={{ color: "red", textAlign: "center" }}>
          You need log in to see cart!
        </p>
      )}
      {isLogin && (
        <div className={classes.container}>
          {listCart && <CartItem />}
          <div className={classes.carttotal}>
            <h3>CART TOTAL</h3>
            <div className={classes.total}>
              <span>SUBTOTAL</span>
              <span
                style={{
                  color: "grey",
                  fontSize: "smaller",
                }}
              >
                {`${
                  listCart
                    ? String(totalAmount).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    : 0
                } VND`}
              </span>
            </div>
            <div className={classes.total}>
              <span>TOTAL</span>
              <span>
                {`${
                  listCart
                    ? String(totalAmount).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    : 0
                } VND`}
              </span>
            </div>
            <div className={classes.coupon}>
              <input type="text" placeholder="Enter your coupon" />
              <button>
                <FontAwesomeIcon icon={faGift} />
                <span>Apply coupon</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default CartPage;
