import { Container } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/tmovie.png";
import "./Header.css";

Header.propTypes = {};

function Header(props) {
  const headerRef = useRef(null);
  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);
  return (
    <div className="head">
      <div ref={headerRef} className="header">
        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="header__logo">
            <img src={logo} className="header__logoImg" alt="" />
            <Link exact to="/">
              bi Movies
            </Link>
          </div>
          <div className="header__nav">
            <NavLink activeClassName="active-menu" exact to="/">
              Home
            </NavLink>
            <NavLink activeClassName="active-menu" exact to="/movie">
              Movies
            </NavLink>
            <NavLink activeClassName="active-menu" exact to="/tv">
              Tv Shows
            </NavLink>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Header;
