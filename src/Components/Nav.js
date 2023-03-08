import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { CgMenuRound } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navi = () => {
  const [click, setClick] = useState(false);
  const clickHandler = () => setClick(!click);

  const [show, setShow] = useState(false);
  const showMenu = () => {
    if (window.scrollY >= 90) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  window.addEventListener("scroll", showMenu);
  const closeMenu = () => setClick(false);

  return (
    <div className={show ? "header header-bg" : "header"}>
      <div className={show ? "logo-dis" : "logo-mob"}>
        <Link to="/" className="logo">
          <img src="static/phLogo.png" alt="logo" />
        </Link>
      </div>

      <nav className="navbar">
        <div className="hamburger" onClick={clickHandler}>
          {show ? null : click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <CgMenuRound size={90} style={{ color: "#FFDAB9" }} />
          )}
        </div>

        <ul className={click ? "nav-menu-active" : "nav-menu"}>
          <ul className="nav-item">
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </ul>
          <ul className="nav-item">
            <Link to="/artists" onClick={closeMenu}>
              Artists
            </Link>
          </ul>
          <ul className="nav-item">
            <Link to="/contact" onClick={closeMenu}>
              Contact Us
            </Link>
          </ul>
          <ul className="nav-item">
            <Link to="/faq" onClick={closeMenu}>
              FAQs
            </Link>
          </ul>
        </ul>
      </nav>
    </div>
  );
};

export default Navi;
