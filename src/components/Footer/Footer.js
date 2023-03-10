import "./Footer.css";
import logoImg from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { navTitle } from "../../utils/data";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="footer__upper">
        <div className="container">
          <div className="row">
            <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="footer__about-widget">
                <div className="footer__about-widget__logo">
                  <Link to="/">
                    <img src={logoImg} alt="Kayan" loading="lazy" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="footer__link-widget">
                <div className="footer__link-widget-title">
                  <h3>Our Services</h3>
                </div>

                <ul>
                  {navTitle.map((item, index) => (
                    <li key={index}>
                      <Link to={item.path}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="footer__link-widget">
                <div className="footer__link-widget-title">
                  <h3>Contact</h3>
                </div>

                <ul>
                  <li className="d-flex gap-2">
                    <span className="flex-center">
                      <IoLocationOutline />
                    </span>
                    68D, Belsion Town 2365 Fna city, LH 3656, USA
                  </li>
                  <li className="d-flex gap-2">
                    <span className="flex-center">
                      <BsTelephone />
                    </span>
                    + 8 (123) 123 456 789
                  </li>
                  <li className="d-flex gap-2">
                    <span className="flex-center">
                      <HiOutlineMail />
                    </span>
                    arkio@gmail.com
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="footer__follow-widget">
                <div className="footer__link-widget-title">
                  <h3>Follow Us</h3>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.
                  Viverra laoreet ultrices donec placerat commodo elementum
                  justo, consequat.
                </p>
                <ul className="gap-3">
                  <li>
                    <a href="www.google.com">
                      <span className="flex-center">
                        <FaFacebookF />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="www.google.com">
                      <span className="flex-center">
                        <FaTwitter />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="www.google.com">
                      <span className="flex-center">
                        <FaInstagram />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="www.google.com">
                      <span className="flex-center">
                        <AiOutlineYoutube />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__lower">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <ul>
                <li>
                  ?? 2023 Kayan Template. Design By{" "}
                  <a
                    href="https://technomasr.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                   Technomasr
                  </a>
                  . All Rights Reserved.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
