import React from "react";
import PropTypes from "prop-types";
import bg from "../../assets/footer-bg.jpg";
import "./PageHeader.css";

PageHeader.propTypes = {};

function PageHeader({ title }) {
  return (
    <div className="page-header" style={{ backgroundImage: `url(${bg})` }}>
      <div className="page-header__content">
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default PageHeader;
