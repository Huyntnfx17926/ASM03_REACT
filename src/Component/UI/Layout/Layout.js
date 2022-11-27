import React from "react";
import NavbarComponent from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import classe from "./Layout.module.css";

function Layout(props) {
  return (
    <div className={classe.container}>
      <NavbarComponent />
      <div className={classe.content}>{props.children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
