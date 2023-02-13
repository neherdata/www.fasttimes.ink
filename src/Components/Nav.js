import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { CgMenuRound } from "react-icons/cg";

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
      <div className={show ? "logo-display-2" : "logo-display-1"}>
        <a href="/" className="logo">
          <img src="" alt="logo" />
        </a>
      </div>

      <nav className="navbar">
        <div className="hamburger" onClick={clickHandler}>
          {show ? null : click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <CgMenuRound size={60} style={{ color: "#FFDAB9" }} />
          )}
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-item">
            <a href="/" onClick={closeMenu}>
              Home
            </a>
          </ul>
          <ul className="nav-item">
            <a href="/artists" onClick={closeMenu}>
              Artists
            </a>
          </ul>
          <ul className="nav-item">
            <a href="/contact" onClick={closeMenu}>
              Contact Us
            </a>
          </ul>
          <ul className="nav-item">
            <a href="/faq" onClick={closeMenu}>
              FAQs
            </a>
          </ul>
        </ul>
      </nav>
    </div>
  );
};

export default Navi;
