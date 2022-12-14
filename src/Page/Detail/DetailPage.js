import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import { cartActions } from "../../store/cart";
import { useDispatch, useSelector } from "react-redux";

import classes from "./detail.module.css";
const DetailPage = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.login.isLogin);
  const [isShowDesc, setIsShowDesc] = useState(false);

  // Lấy dữ liệu số lượng item add vào cart
  const quanlityRef = useRef();

  // Lấy dữ liệu từ server
  const [product, setProduct] = useState(null);
  const [relateProduct, setRelateProduct] = useState([]);
  //Lấy id sản phẩm
  const params = useParams(); //a ktr xem nó có cập nhật váo state k a?
  const { productId } = params;

  useEffect(() => {
    fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    )
      .then((response) => response.json())
      .then((data) => {
        const productFound = data.find(
          (product) => product._id.$oid === productId
        );
        setProduct(productFound);

        // Tìm sản phẩm có cùng category
        const relateProductFound = data.filter(
          (item) =>
            item.category === productFound.category &&
            item._id.$oid !== productId
        );
        setRelateProduct(relateProductFound);
      });
  }, []);

  const addItemToCartHandler = (event) => {
    event.preventDefault();
    // Yêu cầu đăng nhập mới thêm vào giỏ hàng
    if (isLogin === false) {
      alert(`
      Please login for adding product to Cart!
      Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!
      `);
      return;
    }

    const productAmount = quanlityRef.current.value;

    // Thêm vào giỏ hàng
    dispatch(
      cartActions.addCart({ item: product, amount: Number(productAmount) })
    );

    // Cập nhật dữ liệu
    dispatch(cartActions.updateCart());

    //Thông báo đã bỏ sản phẩm vào giỏ hàng thành công
    alert(`
    The product is added to your cart
    Sản phẩn đã được thêm vào giỏ hàng
    `);
  };

  // Ẩn hiện decription
  const toggleDescription = () => {
    setIsShowDesc(!isShowDesc);
  };

  return (
    <div>
      {product && (
        <div className={classes.container}>
          <div className={classes.imgItems}>
            <div className={classes.imgItem}>
              <div className={classes.img_right}>
                <img className={classes.img} src={product.img1} />
              </div>
              <div className={classes.img_right}>
                <img className={classes.img} src={product.img2} />
              </div>
              <div className={classes.img_right}>
                <img className={classes.img} src={product.img3} />
              </div>
              <div className={classes.img_right}>
                <img className={classes.img} src={product.img4} />
              </div>
            </div>

            <div className={classes.image}>
              <img src={product.img1} alt="" />
            </div>
            <div className={classes.decs}>
              <h2>{product.name}</h2>
              <p>{`${product.price.replace(
                /\B(?=(\d{3})+(?!\d))/g,
                ","
              )} VND`}</p>
              <p>{product.short_desc}</p>
              <p style={{ color: "black", fontWeight: "bolder" }}>CATEGORY:</p>
              <p>{product.category}</p>
              <div className={classes.inputForm}>
                <form onSubmit={addItemToCartHandler}>
                  <input
                    type="number"
                    placeholder="QUANTITY"
                    step="1"
                    min="1"
                    ref={quanlityRef}
                    required
                  />
                  <button className={classes.addBtn}>Add to Cart</button>
                </form>
              </div>
            </div>
          </div>
          <div className={classes.description}>
            <button onClick={toggleDescription}>DESCRIPTION</button>
            {isShowDesc && (
              <span>
                <h3>PRODUCT DESCRIPTION</h3>
                <p>{product.long_desc}</p>
              </span>
            )}
          </div>
          <div>
            <h3>RELATE PRODUCTS</h3>
            {relateProduct && (
              <div className={classes.productsList}>
                {relateProduct.map((item, i) => (
                  <div
                    className={classes.productItem}
                    id={item._id.$oid}
                    key={i}
                  >
                    <img src={item.img1} alt="" id={item._id.$oid} />
                    <h5>{item.name}</h5>
                    <p>{`${item.price.replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      ","
                    )} VND`}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default DetailPage;
