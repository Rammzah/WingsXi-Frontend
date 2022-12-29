import React from "react";
import "../../assets/css/footer.css";

const Footer = () => {
  return (
    <figure className="footer-text">
      <small>
        Website by Twilight and Gweivyth, © 2019-{new Date().getFullYear()}
      </small>
    </figure>
  );
};

export default Footer;
