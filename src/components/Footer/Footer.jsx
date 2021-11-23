import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/tmovie.png";
import "./Footer.css";

Footer.propTypes = {};

function Footer(props) {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <Container>
        <div className="footer__content">
          <div className="footer__content__logo">
            <div className="logo">
              <img src={logo} alt="" />
              <Link to="/">bi Movies</Link>
            </div>
          </div>

          <div className="footer__content__menus">
            <div className="menu-item">
              <Link to="/">Home</Link>
              <Link to="/">Contact us</Link>
              <Link to="/">Term of services</Link>
              <Link to="/">About us</Link>
            </div>
            <div className="menu-item">
              <Link to="/">Live</Link>
              <Link to="/">FAQ</Link>
              <Link to="/">Premium</Link>
              <Link to="/">Paravacy policy</Link>
            </div>
            <div className="menu-item">
              <Link to="/">You must watch</Link>
              <Link to="/">Recent release</Link>
              <Link to="/">Term of services</Link>
              <Link to="/">Top IMDB</Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
