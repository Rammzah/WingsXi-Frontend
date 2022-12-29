import React from "react";
import WingsXI from "../../assets/images/WingsXI.png";
import "../../assets/css/header.css";

const Header = () => {
  return (
    <div>
      <img src={WingsXI} alt="WingsXI_Logo" className="header-logo" />
    </div>
  );
};

export default Header;
