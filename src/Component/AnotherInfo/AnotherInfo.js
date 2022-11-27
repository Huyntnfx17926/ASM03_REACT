import classes from "./AnotherInfo.module.css";

function AnotherInfo() {
  return (
    <div className={classes.container}>
      <div className={classes.service}>
        <div>
          <h5>FREE SHIPPING</h5>
          <p>Free shipping worldwide</p>
        </div>
        <div>
          <h5>24 X 7 SERIVCE</h5>
          <p>Free shipping worldwide</p>
        </div>
        <div>
          <h5>FESTIVAL OFFER</h5>
          <p>Free shipping worldwide</p>
        </div>
      </div>
      <div className={classes.slogan}>
        <div className={classes.sloganItem}>
          <h4>LET'S BE FRIENDS!</h4>
          <p>Nisi nisi tempro consequat laboris nisi</p>
        </div>
        <div className={classes.register}>
          <input type="email" placeholder="Enter your email address" required />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default AnotherInfo;
