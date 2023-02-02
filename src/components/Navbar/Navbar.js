import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { navTitle } from "../../utils/data";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import ksaImg from "../../assets/ksa.png"
import ukImg from "../../assets/uk.png"
import Spinner from "../Spinner/Spinner";

const Navbar = ({
  setLanguage,
  language = "en",
  siteName,
  loadingLogo = false,
}) => {
  const [click, setClick] = useState(false);
  // const [dropLang, setDropLang] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbarr">
        <div className="navbar-container container">
          {loadingLogo ? (
            <Spinner />
          ) : (
            <Link to="/" className="navbar-logo">
              <img src={logo} alt="logo" />
            </Link>
          )}

          <div className="menu-icon" onClick={handleClick}>
            <span>{click ? <AiOutlineClose /> : <AiOutlineMenu />}</span>
          </div>

          <ul className={click ? "nav-menu active " : "nav-menu"}>
            {navTitle.map((item, index) => (
              <li className="nav-item" key={index}>
                <NavLink
                  to={item.path}
                  className={"nav-links "}
                  onClick={() => {
                    handleClick();
                  }}
                >
                  {language === "en" ? item.title : item.titleArabic}
                </NavLink>
              </li>
            ))}

            {/* <div className="flex items-center navbar__lang">
              <BsGlobe2 />
              <select
                onChange={(e) => {
                  handleClick();
                  setLanguage(e.target.value);
                }}
              >
                <option value="en">EN</option>
                <option value="ar">AR</option>
              </select>
            </div> */}
            {/* New Select */}
            <div className="navbar__lang">
              {language === "en" ? (
                <button>
                  <img src={ksaImg} alt="" loading="lazy" />
                  عربي
                </button>
              ) : (
                <button>
                  <img src={ukImg} alt="" loading="lazy" />
                  English
                </button>
              )}
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
